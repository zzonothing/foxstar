document.addEventListener('DOMContentLoaded', () => {
    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            const unionData = data.union[0]; // 데이터는 첫 번째 객체만 사용
            displayTable(unionData.member);
            displayChart(unionData.member);
        })
        .catch(error => console.error('Error loading data:', error));
});

function displayTable(members) {
    const tableContainer = document.getElementById('table-container');
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>순위</th>
                    <th>이름</th>
                    <th>레벨</th>
                </tr>
            </thead>
            <tbody>
    `;

    members.sort((a, b) => b.level - a.level).forEach((member, index) => {
        tableHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${member.name}</td>
                <td>${member.level}</td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    tableContainer.innerHTML = tableHTML;
}

function displayChart(members) {
    const ctx = document.getElementById('chart').getContext('2d');
    const names = members.map(member => member.name);
    const levels = members.map(member => member.level);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: '레벨',
                data: levels,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '레벨'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '이름'
                    }
                }
            }
        }
    });
}
