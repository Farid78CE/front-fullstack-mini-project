<template>
    <nav class="nav-bar">
        <div class="center">
            <router-link class="router-link" v-for="(route, index) in routes" v-bind:key="index" v-bind:to="route.to">
                {{ route.title }}
            </router-link>
        </div>
    </nav>
</template>


<script>
export default {
    data() {
        return {
            routes: [
                {
                    "title": "home",
                    "to": "/"
                },
                {
                    "title": "register",
                    "to": "/register"
                }
            ]
        }
    }
}
</script>


<style scoped>

    *{
        margin: auto;

    }
    .nav-bar {
        display: inline-flex;
        margin-left: auto;
        margin-right: auto;
        background-color: white ;
        border: 1px solid gray;
        width:100%;
    }
    .router-link{
        margin-right: 5px;
        margin-left: 5px;
        text-decoration: none;
        font-size: 25px;
        font-weight: bold;
        color: green;
    }
</style>