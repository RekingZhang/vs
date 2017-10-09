<template>
    <div class="vs-loading" v-show="value">
        <div class="vs-loading-content">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Loading',
    props: {
        value: {
            type: Boolean,
            default: false
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
