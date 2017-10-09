<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
};
</script>

<style lang='scss'>
@import './assets/css/reset.scss';
@import './assets/css/base.scss';
body {
	@include font-dpr(16px);
}
</style>
