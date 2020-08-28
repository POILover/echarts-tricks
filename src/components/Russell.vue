<template>
    <div class="russel">
        <p class="paragraph">
            The whole problem with the world is that fools and fanatics are
            always so certain of themselves, and wiser people so full of doubts.
        </p>
        <p class="name">——Bertrand Russell</p>
    </div>
</template>
<script>
export default {
    name: "Russell",
};
</script>

<style lang="scss" scoped>
.russel {
    margin: 0 auto;
    width: 800px;
    height: 400px;
    background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.1)
        ),
        url("../assets/Bertrand-Russell.jpg");
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}
.paragraph {
    width: 50%;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 130px;
    margin-left: 50px;
    font-size: 20px;
    font-family: Calibri, "Trebuchet MS", sans-serif;
}
.name {
    width: 50%;
    color: rgba(255, 255, 255, 0.7);
    margin-left: 50px;
    font-size: 20px;
    font-style: italic;
    font-family: Calibri, "Trebuchet MS", sans-serif;
}
</style>
