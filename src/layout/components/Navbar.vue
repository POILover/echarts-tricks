<template>
    <div class="navbar">
        我来组成头部
    </div>
</template>
<script>
export default {
    name: "Navbar",
};
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.navbar {
    width: 100%;
    height: #{$headerHeight};
    background: #293c55;
    position: fixed;
    z-index: 999;
    top: 0;
    // left: 0;
}
</style>
