// Ensure script executes cleanly following full DOM assembly
document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // CHART 1: Mixed Chart (Bar + Line)
    // Monthly Profile Traffic & Confirmed Violations
    // ==========================================
    const ctx1 = document.getElementById('trafficViolationsChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                {
                    type: 'line',
                    label: 'Violations Logged',
                    data: [1, 3, 0, 4, 2],
                    borderColor: '#dc3545', // Bootstrap red
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    pointBackgroundColor: '#dc3545',
                    yAxisID: 'yViolations'
                },
                {
                    type: 'bar',
                    label: 'Public Page Views',
                    data: [120, 290, 180, 410, 310],
                    backgroundColor: 'rgba(13, 110, 253, 0.15)', // Bootstrap light blue
                    borderColor: '#0d6efd',
                    borderWidth: 1,
                    yAxisID: 'yTraffic'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yTraffic: {
                    type: 'linear',
                    position: 'left',
                    title: { display: true, text: '