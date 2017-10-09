<template>
    <div class="confirm-demo">
        <nav-bar>confirm</nav-bar>
        <div class="confirm-demo-main">
            <confirm v-model="show" @confirm="confirm" @cancel="cancel">提示文案</confirm>
        </div>
        <div class="confirm-demo-footer">
            <a href="javascript:;" @click="showConfirm" class="confirm-demo-btn">显示confirm</a>
        </div>
    </div>
</template>
<script>
import NavBar from '../../components/nav';
import Confirm from '../../../src/components/confirm';
export default {
    components: {
        NavBar,
        Confirm
    },
    methods: {
        showConfirm() {
            this.show = true;
        },
        confirm() {
            console.log('确定');
        },
        cancel() {
            console.log('取消');
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
.confirm-demo-btn {
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

.confirm-demo-footer {
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