/**
 * FoodSafe Dashboard Logic Implementation Engine
 * Sample Domain Datasets Mapping Establishment Violations, Traffic, and Safety Ratings
 */
document.addEventListener("DOMContentLoaded", function () {
    
    // Brand Color Definition Tags Mapping CSS Parameters
    const colorPrimaryBlueViolet = '#533AFA';
    const colorAccentOrange      = '#FF7A00';
    const colorMutedGray         = '#A3AED0';
    const colorSoftPurpleHighlight = '#8D7BFF';

    // Global Font Configuration Rule Injection into the Chart.js Core Instance
    Chart.defaults.font.family = "'Quicksand', sans-serif";
    Chart.defaults.font.weight = '600';
    Chart.defaults.color = '#2B3674';

    // =========================================================================
    // GRAPHIC DATASET 1: HORIZONTAL CATEGORICAL DISTRIBUTION
    // Description: Track isolated safety infraction categories logged historically
    // =========================================================================
    const canvasViolationsElement = document.getElementById('violationHistoryChart').getContext('2d');
    new Chart(canvasViolationsElement, {
        type: 'bar',
        data: {
            labels: [
                'Cross-contamination', 
                'Poor Handwashing', 
                'Expired Inventory', 
                'Dirty Equipment', 
                'Improper Food Temp'
            ],
            datasets: [{
                label: 'Logged Violations',
                data: [4, 3, 1, 4, 2], // Mock operational data parameters
                backgroundColor: colorPrimaryBlueViolet,
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            indexAxis: 'y', // Convert to a distinct Horizontal Bar layout
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: { stepSize: 1, color: colorMutedGray },
                    grid: { display: false }
                },
                y: {
                    ticks: { color: '#2B3674' },
                    grid: { display: false }
                }
            }
        }
    });

    // =========================================================================
    // GRAPHIC DATASET 2: DOUGHNUT SEGMENTED ORIGIN MATRIX
    // Description: Breakdown tracking how public viewers find this page
    // =========================================================================
    const canvasTrafficElement = document.getElementById('trafficSourcesChart').getContext('2d');
    new Chart(canvasTrafficElement, {
        type: 'doughnut',
        data: {
            labels: ['Google Maps App', 'Portal Search Bar', 'QR Window Decal', 'Shared Links'],
            datasets: [{
                data: [450, 620, 180, 95], // Mock traffic parameters
                backgroundColor: [
                    colorPrimaryBlueViolet,
                    colorAccentOrange,
                    colorSoftPurpleHighlight,
                    '#E0E5F2' // Neutral Balance Tone
                ],
                borderWidth: 4,
                borderColor: '#FFFFFF', // Clean isolation grid line spacing
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        padding: 15,
                        font: { size: 12 }
                    }
                }
            },
            cutout: '70%' // Creates an open ring profile style
        }
    });

    // =========================================================================
    // GRAPHIC DATASET 3: REGULAR TIMELINE DEVIATION LINE GRAPH
    // Description: Display sequential inspection performance outcomes
    // =========================================================================
    const canvasScoreElement = document.getElementById('scoreTrendChart').getContext('2d');
    new Chart(canvasScoreElement, {
        type: 'line',
        data: {
            labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026'],
            datasets: [{
                label: 'Audited Points Score',
                data: [88, 92, 74, 68, 81, 85], // Performance variance markers
                fill: false,
                borderColor: colorAccentOrange,
                backgroundColor: colorPrimaryBlueViolet,
                borderWidth: 4,
                tension: 0.3, // Smoothes line directional updates
                pointRadius: 6,
                pointHoverRadius: 9,
                pointHoverBackgroundColor: colorPrimaryBlueViolet,
                pointHoverBorderColor: '#FFFFFF'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    min: 50,
                    max: 100,
                    ticks: { color: colorMutedGray, stepSize: 10 },
                    grid: { color: 'rgba(224, 229, 242, 0.5)' }
                },
                x: {
                    ticks: { color: colorMutedGray },
                    grid: { display: false }
                }
            }
        }
    });
});
