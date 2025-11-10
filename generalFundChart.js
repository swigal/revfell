const incomeColor ="#007672"
const expenseColor ="#f93822"
const balanceColor = "rgba(224,165,38, 1)"
const reserveColor = "#a51890"
const transparent = "rgba(0,0,0,0.0)"

const generalFund = new Chart(document.getElementById("generalFund2025"), {
    type: 'bar',
    data: {
        datasets: [{
            type: 'line', 
            label: 'Balance',
            backgroundColor: transparent,
            borderColor: balanceColor,
            data: [5543.90,3123.95,8514.10,9394.06,9179.46,9255.14,9854.97,10949.38,0,0,0,0],
            order: 0
        }, /* {
            type: 'line', 
            label: 'Reserve',
            backgroundColor: transparent,
            borderColor: reserveColor,
            data: [4410.00,5310.00,6579.00,8694.00,9044.00,9294.00,9394.00,12540.00,0,0],
            order: 0
        }, */{
            type: 'bar', 
            label: 'Income',
            backgroundColor: incomeColor,
            data: [13276.13, 12171.84, 19102.13, 15850.25, 13267.36, 12667.46, 12402.15, 14155.27, 0, 0, 0, 0],
            order: 1
        }, {
            type: 'bar', 
            label: 'Expenses',
            backgroundColor: expenseColor,
            data: [13276.13, 12171.84, 19102.13, 15850.25, 13267.36, 12667.46, 12402.15, 13060.86, 0, 0, 0, 0],
            order: 2 
        }],
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
})

// General Fund Expenses Doughnut Chart

const genFundExpPie = new Chart(document.getElementById("genFundExpPie"), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [206.03,6709.56,5059.84,426.72],
            backgroundColor: [ balanceColor, incomeColor,expenseColor, reserveColor]
        }],
        labels: ['Office', 'Payroll', 'Rent & Utilities', 'Programs']
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }

})