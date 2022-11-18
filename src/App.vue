<template>
	<nav>
		<header-view />
		<router-view />
		<footer-view />
	</nav>
</template>

<script>
	import HeaderView from './views/HeaderView.vue';
	import FooterView from './views/FooterView.vue';

	export default {
		components: {
			HeaderView,
			FooterView
		}
	}
</script>
