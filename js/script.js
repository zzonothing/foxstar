// 데이터를 JSON 파일에서 가져오는 함수
async function fetchData() {
    const response = await fetch('data/data.json');
    const data = await response.json();
    return data;
}

// 시즌 23의 데이터를 표시하는 함수
async function displaySeason23() {
    const data = await fetchData();
    const season23 = data.union.find(season => season.season === 23);
    const season22 = data.union.find(season => season.season === 22);

    if (!season23) {
        console.error('Season 23 data not found.');
        return;
    }

    // 상단 정보 출력
    document.getElementById('season').textContent = `Season: ${season23.season}`;
    document.getElementById('ranking').textContent = `Ranking: ${season23.ranking}`;
    document.getElementById('clearTime').textContent = `Clear Time: ${season23.clearTime}`;

    // 멤버 정보를 정렬하여 테이블 생성
    const members = season23.member.map(member => ({
        name: member.name,
        level: member.level,
        previousLevel: getPreviousLevel(member.name, season22)
    }));

    members.sort((a, b) => b.level - a.level);

    const tableBody = document.getElementById('ranking-table').getElementsByTagName('tbody')[0];
    members.forEach((member, index) => {
        const row = tableBody.insertRow();
        const rankCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const levelCell = row.insertCell(2);
        const increaseCell = row.insertCell(3);
        const chartCell = row.insertCell(4);

        rankCell.textContent = index + 1;
        nameCell.textContent = member.name;
        levelCell.textContent = member.level;

        if (member.previousLevel === undefined) {
            increaseCell.textContent = 'NEW';
        } else {
            const increase = member.level - member.previousLevel;
            increaseCell.textContent = increase > 0 ? `+${increase}` : increase.toString();
        }

        // 차트 생성 (각 멤버의 상승 차트)
        const canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 50;
        chartCell.appendChild(canvas);

        new Chart(canvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['상승'],
                datasets: [{
                    label: member.name,
                    data: [member.level - member.previousLevel || 0],
                    backgroundColor: member.level - member.previousLevel > 0 ? 'green' : 'red',
                    borderColor: 'black',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100 // 레벨 상승 범위를 제한할 수 있습니다.
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    });
}

// 이전 시즌에서의 레벨을 찾는 함수
function getPreviousLevel(name, season22) {
    if (!season22) return undefined;
    const member = season22.member.find(member => member.name === name);
    return member ? member.level : undefined;
}

// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', displaySeason23);
