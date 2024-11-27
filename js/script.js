// JSON 데이터를 로드하고 테이블을 생성하는 코드
document.addEventListener("DOMContentLoaded", function() {
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            const season23 = data.union.find(season => season.season === 23);
            const season22 = data.union.find(season => season.season === 22);

            if (season23 && season22) {
                const season23Members = season23.member;
                const season22Members = season22.member.reduce((acc, member) => {
                    acc[member.name] = member.level;
                    return acc;
                }, {});

                // 테이블 생성
                const table = document.createElement('table');
                table.border = '1';
                table.style.width = '100%';

                // 테이블 헤더 생성
                const headerRow = document.createElement('tr');
                const headers = ['순위', '이름', '레벨', '상승'];
                headers.forEach(text => {
                    const th = document.createElement('th');
                    th.textContent = text;
                    headerRow.appendChild(th);
                });
                table.appendChild(headerRow);

                // 데이터 행 생성
                season23Members.forEach((member, index) => {
                    const row = document.createElement('tr');

                    // 순위
                    const rankCell = document.createElement('td');
                    rankCell.textContent = index + 1;
                    row.appendChild(rankCell);

                    // 이름
                    const nameCell = document.createElement('td');
                    nameCell.textContent = member.name;
                    row.appendChild(nameCell);

                    // 레벨
                    const levelCell = document.createElement('td');
                    levelCell.textContent = member.level;
                    row.appendChild(levelCell);

                    // 상승량 계산
                    const increaseCell = document.createElement('td');
                    if (season22Members[member.name] !== undefined) {
                        const levelChange = member.level - season22Members[member.name];
                        increaseCell.textContent = (levelChange > 0 ? '+' : '') + levelChange;
                    } else {
                        increaseCell.textContent = 'new';
                    }
                    row.appendChild(increaseCell);

                    table.appendChild(row);
                });

                // 테이블을 페이지에 추가
                document.body.appendChild(table);
            } else {
                console.error("해당 시즌 데이터가 없습니다.");
            }
        })
        .catch(error => console.error('데이터 로드 실패:', error));
});
