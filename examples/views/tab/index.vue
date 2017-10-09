<template>
    <div class="toast-demo">
        <nav-bar>tab</nav-bar>
        <div class="toast-demo-main">
            <tab>
                <tab-item selected id="0">电影</tab-item>
                <tab-item id="1">美食</tab-item>
                <tab-item id="2">娱乐</tab-item>
            </tab>
        </div>
    </div>
</template>
<script>
import NavBar from '../../components/nav';
import { Tab, TabItem } from '@/index';

export default {
    components: {
        NavBar,
        Tab,
        TabItem
    }
}
</script>
<style lang='scss'>
@import '../../assets/css/base.scss';
html,
body {
    background: #f8fafb;
    min-height: 100%;
}

.toast-demo-btn {
    width: 50%;
    height: px2rem(68px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: px2rem(6px);
    background-color: #ff550a;
    @include font-dpr(16px);
}

.toast-demo-main {
    margin-top: px2rem(110px);
    height: px2rem(900px);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>