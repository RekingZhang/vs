<template>
    <div class="navBar">
        <a href="javascript:;" class="back" v-on:click="back" v-show="isShowBack"></a>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    props: {
        title: String,
        isShowBack: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss">
@import "../../assets/css/base.scss";
.navBar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: px2rem(100px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF552E;
    color: #fff;
    font-size: px2rem(36px);
}

.back {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    height: px2rem(100px);
    width: px2rem(80px);
}

.back:after {
    content: '';
    position: absolute;
    top: 50%;
    left: px2rem(20px);
    display: inline-block;
    width: px2rem(20px);
    height: px2rem(20px);
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(45deg) translateY(-50%);
    -webkit-transform: rotate(45deg) translateY(-50%);
}
</style>