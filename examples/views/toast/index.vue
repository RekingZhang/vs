<template>
    <div class="toast-demo">
        <nav-bar>toast</nav-bar>
        <div class="toast-demo-main">
            <input type="text" placeholder="请输入toast内容" v-model="toastText" class="toast-demo-input">
            <toast v-model="show">{{toastText}}</toast>
        </div>
        <div class="toast-demo-footer">
            <a href="javascript:;" @click="showToast" class="toast-demo-btn">显示toast</a>
        </div>
    </div>
</template>
<script>
import NavBar from '../../components/nav';
import Toast from '../../../src/components/toast';
export default {
    components: {
        NavBar,
        Toast
    },
    methods: {
        showToast() {
            this.show = true;
        }
    },
    watch: {
        show(val) {
            //do something
        }
    },
    data() {
        return {
            show: false,
            toastText: ""
        }
    }
}
</script>
<style lang='scss'>
@import '../../assets/css/base.scss';
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

.toast-demo-input {
    height: px2rem(80px);
    width: px2rem(600px);
    border: 1px solid #ccc;
    @include font-dpr(16px);
}

.toast-demo-footer {
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