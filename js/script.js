// JSON 데이터를 fetch로 불러옵니다.
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // 데이터 구조 확인 및 변수 할당
        const seasonData = data.union[0];
        
        // 상단 정보 표시
        document.getElementById('season-number').textContent = seasonData.season;
        document.getElementById('ranking-number').textContent = seasonData.ranking;
        document.getElementById('clear-time').textContent = seasonData.clearTime;

        // 테이블 데이터 표시
        const tableBody = document.getElementById('table-body');
        seasonData.member.forEach(member => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = member.name;
            const levelCell = document.createElement('td');
            levelCell.textContent = member.level;
            row.appendChild(nameCell);
            row.appendChild(levelCell);
            tableBody.appendChild(row);
        });

        // 차트 데이터 준비
        const ctx = document.getElementById('level-chart').getContext('2d');
        const levels = seasonData.member.map(member => member.level);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: seasonData.member.map(member => member.name),
                datasets: [{
                    label: 'Level',
                    data: levels,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
