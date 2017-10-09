<template>
    <div class="loading-demo">
        <nav-bar>loading</nav-bar>
        <div class="loading-demo-main">
            <loading v-model="show"></loading>
        </div>
        <div class="loading-demo-footer">
            <a href="javascript:;" @click="showLoading" class="loading-demo-btn">显示loading</a>
        </div>
    </div>
</template>
<script>
import NavBar from '../../components/nav';
import Loading from '../../../src/components/loading';
export default {
    components: {
        NavBar,
        Loading
    },
    methods: {
        showLoading() {
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 3000);
        }
    },
    watch: {
        show(val) {
            //do something
        }
    },
    data() {
        return {
            show: false
        }
    }
}
</script>
<style lang='scss'>
@import '../../assets/css/base.scss';
.loading-demo-btn {
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

.loading-demo-footer {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: px2rem(100px);
    border-top: px2rem(4px) solid #FF552E;
    background-color: #fff;
}
</style>