<template>
    <div class="index">
        <nav-bar :isShowBack="false">首页</nav-bar>
        <div class="main">
            <div class="container">
                <router-link to="/alert" class="item">alert</router-link>
                <router-link to="/confirm" class="item">confirm</router-link>
                <router-link to="/loading" class="item">loading</router-link>
                <router-link to="/toast" class="item">toast</router-link>
                <router-link to="/tab" class="item">tab</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/nav';

export default {
    name: 'index',
    components: {
        NavBar
    }
};
</script>

<style lang='scss'>
@import '../assets/css/base.scss';

.main {
    margin: px2rem(100px) 0;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-top: 1px solid #c7c7c7;
    border-left: 1px solid #c7c7c7;
}

.item {
    display: flex;
    height: px2rem(200px);
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c7c7c7;
    border-right: 1px solid #c7c7c7;
    @include font-dpr(16px);
}
</style>
