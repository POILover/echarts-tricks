<template>
    <div class="content-container">
        <div class="top">top</div>
        <div class="bottom">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="解释" name="explanation">
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                    <p>解释</p>
                </el-tab-pane>
                <el-tab-pane label="配置" name="option">
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                    <p>配置</p>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    name: "Structure",
    data() {
        return {
            activeName: "explanation",
        };
    },
};
</script>
<style lang="scss">
.content-container {
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
    .top {
        width: 100%;
        height: 70%;
        box-sizing: border-box;
        border-left: 2px solid grey;
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
