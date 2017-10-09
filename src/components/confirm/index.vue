<template>
    <div class="vs-confirm">
        <transition name="mask-fade">
            <div class="vs-confirm-mask" v-show="show"></div>
        </transition>
        <transition name="dialog-fade">
            <div class="vs-confirm-content" v-show="show">
                <strong class="vs-confirm-title">{{title}}</strong>
                <div class="vs-confirm-message">
                    <slot></slot>
                </div>
                <div class="vs-confirm-footer">
                    <a href="javascript:;" class="vs-confirm-btn" @click="cancel">{{cancelText}}</a>
                    <a href="javascript:;" class="vs-confirm-btn" @click="confirm">{{confirmText}}</a>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'Confirm',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '提示'
        },
        confirmText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
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
        confirm() {
            this.show = false;
            this.$emit('confirm');
        },
        cancel() {
            this.show = false;
            this.$emit('cancel');
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
