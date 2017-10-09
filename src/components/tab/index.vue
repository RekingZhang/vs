<template>
    <div class="vs-tab">
        <slot>
        </slot>
    </div>
</template>
<script>
import Emitter from '../../mixins/emitter';
export default {
    name: 'tab',
    mixins: [Emitter],
    props: ['value'],
    watch: {
        value(val) {
            this.currentActive = val;
        },
        currentActive(val) {
            this.broadcast('tabItem', 'update', val);
        }
    },
    data() {
        return {
            currentActive: this.value
        }
    },
    created() {
        this.$on('input', function(val) {
            this.currentActive = val;
            console.log('parent:' + this.currentActive);
        })
    }
};
</script>
<style lang="scss">
@import './style.scss';
</style>
