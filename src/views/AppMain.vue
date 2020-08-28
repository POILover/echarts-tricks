<template>
    <div class="app-main">
        <structure></structure>
    </div>
</template>
<script>
import structure from "../components/structure";
export default {
    name: "AppMain",
    components: { structure },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.app-main {
    margin-left: #{$sideBarWidth};
    margin-top: #{$headerHeight};
    height: calc(100vh - #{$headerHeight});
}
</style>
