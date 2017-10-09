<template>
    <transition name="fade">
        <div class="vs-toast" v-show="show">
            <div class="vs-toast-content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'Loading',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        time: {
            type: Number,
            default: 2000
        },
        position: {
            type: String,
            default: 'middle'
        }
    },
    watch: {
        value(val) {
            this.show = val;
        },
        show(val) {
            this.$emit('input', val);
            if (val) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.show = false;
                }, this.time);
            }
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
