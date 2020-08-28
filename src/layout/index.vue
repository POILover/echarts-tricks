<template>
    <div>
        <navbar />
        <sidebar />
        <app-main />
    </div>
</template>
<script>
import navbar from "./components/Navbar";
import sidebar from "./components/Sidebar";
import AppMain from "../views/AppMain";
export default {
    name: "Layout",
    components: { navbar, sidebar, AppMain },
};
</script>
