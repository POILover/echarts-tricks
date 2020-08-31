export const option = {
    grid: {
        left: '10%'
    },
    xAxis: {
        name: '横轴',
        type: 'value',
    },

    yAxis: {
        name: '纵轴',
        nameGap: '40',
        nameLocation: 'middle',
        type: 'value'
    },
    series: [{
        data: [
            [1, 300],
            [2, 100],
            [3, 4],
            [4, 1],
            [5, 5],
            [6, 9],
            [7, 2]
        ],
        type: 'line',
        smooth: true
    }]
};