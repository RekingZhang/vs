<template>
    <div class="vs-alert">
        <transition name="mask-fade">
            <div class="vs-alert-mask" v-show="show"></div>
        </transition>
        <transition name="dialog-fade">
            <div class="vs-alert-content" v-show="show">
                <strong class="vs-alert-title">{{title}}</strong>
                <div class="vs-alert-message">
                    <slot></slot>
                </div>
                <a href="javascript:;" class="vs-alert-btn" @click="close">{{buttonText}}</a>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'Alert',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '提示'
        },
        buttonText: {
            type: String,
            default: '确定'
        }
    },
    watch: {
        value(val) {
            this.show = val;
        },
        show(val) {
            this.$emit('input', val);
        }
    },
    methods: {
        close() {
            this.show = false;
        }
    },
    data() {
        return {
            show: this.value
        };
    }
};
</script>
<style lang="scss">
@import './style.scss';
</style>
