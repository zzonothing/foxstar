// 데이터를 JSON 파일에서 가져오는 함수
async function fetchData() {
    const response = await fetch('data/data.json');
    const data = await response.json();
    return data;
}

// 시즌 데이터 추출 및 차트 표시 함수
async function displaySeasonData() {
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
        previousLevel: getPreviousLevel(member.name, season22),
        levelHistory: getLevelHistory(member.name, data.union)
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

        // 선 그래프를 위한 캔버스 생성
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 100;
        chartCell.appendChild(canvas);

        // Chart.js로 선 그래프 생성
        new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: member.levelHistory.map(record => `Season ${record.season}`),
                datasets: [{
                    data: member.levelHistory.map(record => record.level),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'category',
                        labels: member.levelHistory.map(record => `Season ${record.season}`),
                        title: {
                            display: false,
                            text: 'Season'
                        }
                    },
                    y: {
                        title: {
                            display: false,
                            text: 'Level'
                        },
                        beginAtZero: true
                    }
                },
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // 이름을 상단에 표시하지 않음
                    }
                }
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

// 시즌별 레벨 히스토리를 가져오는 함수
function getLevelHistory(name, seasons) {
    return seasons
        .sort((a, b) => a.season - b.season)
        .map(season => {
            const member = season.member.find(member => member.name === name);
            return member ? { season: season.season, level: member.level } : null;
        })
        .filter(record => record !== null);
}

// 페이지가 로드되면 실행
document.addEventListener('DOMContentLoaded', displaySeasonData);
