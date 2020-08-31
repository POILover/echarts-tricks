<template>
    <div class="content-container">
        <div class="grid-slider">
            <el-slider
                @input="gridSlideChange"
                :format-tooltip="formatGridSlideTooltip"
                v-model="gridPercent"
            ></el-slider>
        </div>
        <div class="gap-slider" :style="`width:${sliderWidth}px`">
            <el-slider
                :step="0.0001"
                @input="gapSlideChange"
                :format-tooltip="formatGapSlideTooltip"
                v-model="gapValue"
            ></el-slider>
        </div>
        <div class="top">
            <div id="chart" style="width:100%;height:100%"></div>
        </div>
        <div class="bottom">
            <el-tabs v-model="activeName" type="card">
                <el-tab-pane label="解释" name="explanation"> </el-tab-pane>
                <el-tab-pane label="配置" name="option"> </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import { option } from "./option";
export default {
    name: "Structure",
    data() {
        return {
            sliderWidth: "",
            gridPercent: 10,
            gapValue: 20,
            activeName: "explanation",
        };
    },
    watch: {},
    mounted() {
        let innerWidth1 = window.innerWidth;
        this.sliderWidth = (innerWidth1 - 275) * 0.1;
        this.option = option;
        this.chart = this.echarts.init(document.querySelector("#chart"));
        this.chart.setOption(this.option);
        this.$nextTick(() => {
            const self = this;
            this.resizeFun = function() {
                let innerWidth = window.innerWidth;
                self.sliderWidth = (innerWidth - 275) * 0.1;
                self.chart.resize({ width: "auto" });
            };
            window.addEventListener("resize", this.resizeFun);
        });
    },
    methods: {
        formatGridSlideTooltip(val) {
            return `${val}%`;
        },
        formatGapSlideTooltip(val) {
            let percent = Math.abs(val - 100) / 100;

            return (this.sliderWidth * percent).toFixed(1) + "px";
        },
        gridSlideChange() {
            if (this.gridPercent > 90) {
                this.gridPercent = 90;
                return;
            }
            this.option.grid.left = `${this.gridPercent}%`;
            this.chart.setOption(this.option);
        },
        gapSlideChange() {},
    },
};
</script>
<style lang="scss">
.content-container {
    .gap-slider {
        .el-slider__runway {
            background: #409eff;
        }
        .el-slider__bar {
            background: #e4e7ed;
        }
    }
    .el-tabs--card > .el-tabs__header {
        border-bottom: none !important;
    }
    .el-tabs--card > .el-tabs__header .el-tabs__nav {
        border-bottom: 1px solid #e4e7ed !important;
        border-radius: 0 !important;
    }
    .el-tabs__item.is-active {
        color: red !important;
    }
    .el-tabs__item:hover {
        color: red !important;
    }
    .el-tabs__header {
        margin: 0 !important;
    }
    .el-tabs {
        height: 100%;
        .el-tabs__content {
            height: calc(100% - 42px);
            overflow: auto;
        }
    }
}
</style>
<style lang="scss" scoped>
.content-container {
    // border 换sidebar边框
    height: 100%;
    border-left: 1px solid #000;

    .grid-slider {
        //5px?
        //250 + 2 * 10 + 5
        width: calc((100% - 275px));
        position: fixed;
        top: 60px;
        right: 10px;
        z-index: 99999;
    }
    .gap-slider {
        // width: calc((100% - 275px) * 0.1);
        position: fixed;
        top: 330px;
        left: 262px;
        z-index: 99999;
    }
    .top {
        padding: 10px;
        width: 100%;
        height: 70%;
        box-sizing: border-box;
        border-left: 2px solid grey;
        #chart {
            border: 1px solid grey;
            box-sizing: border-box;
        }
    }
    .bottom {
        width: 100%;
        height: 30%;
        box-sizing: border-box;
        border-left: 2px solid grey;
        border-top: 2px solid grey;
    }
}
</style>
