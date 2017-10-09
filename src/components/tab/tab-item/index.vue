<template>
    <a href="javascript:;" class="vs-tab-item" :class="{'vs-tab-item-selected':isSelected}" @click="updateActiveId">
        <slot>
        </slot>
    </a>
</template>
<script>
export default {
    name: 'tabItem',
    props: {
        id: [String, Number],
        selected: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateActiveId() {
            console.log('child:' + this.id);
            this.$parent.$emit('input', this.id);
        }
    },
    watch: {
        activeId(val) {
            console.log('change:' + val);
            if (this.id === val) {
                this.selected = true;
            }
        }
    },
    data() {
        return {
            isSelected: this.selected
        }
    },
    mounted() {
        console.log('init:' + this.activeId);
        if (this.isSelected) {
            this.updateActiveId();
        }
        this.$on('update', (val) => {
            if (val === this.id) {
                this.isSelected = true;
            } else {
                this.isSelected = false;
            }
        })
    }
};
</script>
<style lang="scss">
@import './style.scss';
</style>
