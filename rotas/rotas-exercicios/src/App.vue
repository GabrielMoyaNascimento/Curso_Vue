<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view />
		<Menu />
	</div>
</template>

<script>
import Menu from './components/template/Menu.vue'

export default {
	components: {Menu}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
