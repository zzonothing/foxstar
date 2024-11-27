async function loadTable() {
    const response = await fetch('data/data.json');
    const data = await response.json();

    const container = document.getElementById('table-container');
    let tableHTML = `
        <table>
            <tr>
                <th>Name</th>
                <th>Sales</th>
                <th>Profit</th>
            </tr>
    `;

    data.forEach(item => {
        tableHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.sales}</td>
                <td>${item.profit}</td>
            </tr>
        `;
    });

    tableHTML += '</table>';
    container.innerHTML = tableHTML;
}

async function loadChart() {
    const response = await fetch('data/data.json');
    const data = await response.json();

    const labels = data.map(item => item.name);
    const salesData = data.map(item => item.sales);
    const profitData = data.map(item => item.profit);

    const ctx = document.getElementById('chart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Sales',
                    data: salesData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Profit',
                    data: profitData,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

loadTable();
loadChart();
