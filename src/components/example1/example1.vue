<template>
    <div class="example1">
        <div id="example1"></div>
    </div>
</template>

<script>
export default {
    name: "example1",
    data() {
        return {
            option: {
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: [
                        "周一",
                        "周二",
                        "周三",
                        "周四",
                        "周五",
                        "周六",
                        "周日"
                    ]
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        type: "line",
                        data: [0.01, -0.02, 0.02, 0.05, 0.03, 0.002, 0],
                        markLine: {
                            data: [{ yAxis: 0.005 }]
                        }
                    }
                ]
            }
        };
    },
    mounted() {
        let chart = this.echarts.init(document.getElementById("example1"));
        chart.setOption(this.option);
    }
};
</script>

<style lang="scss" scoped>
.example1 {
    width: 800px;
    height: 600px;
}
#example1 {
    width: 800px;
    height: 600px;
}
</style>