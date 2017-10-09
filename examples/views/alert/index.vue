<template>
    <div class="alert-demo">
        <nav-bar>alert</nav-bar>
        <div class="alert-demo-main">
            <alert v-model="show">提示文案</alert>
        </div>
        <div class="alert-demo-footer">
            <a href="javascript:;" @click="showAlert" class="alert-demo-btn">显示alert</a>
        </div>
    </div>
</template>
<script>
import NavBar from '../../components/nav';
import Alert from '../../../src/components/alert';
export default {
    components: {
        NavBar,
        Alert
    },
    methods: {
        showAlert() {
            this.show = true;
        }
    },
    watch: {
        show(val) {
            //do something
            console.log(val);
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

.alert-demo-btn {
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

.alert-demo-footer {
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