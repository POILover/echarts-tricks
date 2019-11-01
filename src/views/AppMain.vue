<template>
    <div class="app-main">
        <div class="russel">
            <div
                class="paragraph"
            >The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.</div>
        </div>
        <example1></example1>
    </div>
</template>
<script>
import example1 from "../components/example1/example1";
export default {
    name: "AppMain",
    components: {
        example1
    }
};
</script>

<style lang="scss" scoped>
.russel {
    width: 800px;
    height: 400px;
    background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.1)
        ),
        url("../assets/Bertrand-Russell.jpg");

    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}
.paragraph {
    width: 50%;
    color: rgba(255, 255, 255, 0.7);
}
</style>