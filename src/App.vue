<template>
	<AppHead>
		<title>Fyrre Magazine</title>
		<meta
			name="description"
			content="Portfolio project of Front-End Developer Olga Garkusha"
		/>
		<!-- Social -->
		<meta property="og:title" content="Fyrre Magazine" />
		<meta
			property="og:description"
			content="Portfolio project of Front-End Developer Olga Garkusha"
		/>
		<meta
			property="og:image"
			content="https://firebasestorage.googleapis.com/v0/b/art-magazine-2da1b.appspot.com/o/content_images%2Fmagazin-cover.jpg?alt=media&token=d5e53b19-50c5-445c-8a2a-3e3b2a179779"
		/>
	</AppHead>
	<nav>
		<header-view />
		<router-view />
		<footer-view />
	</nav>
</template>

<script>
import HeaderView from "./views/HeaderView.vue";
import FooterView from "./views/FooterView.vue";

export default {
	components: {
		HeaderView,
		FooterView,
	},
};
</script>

<style>
html {
	--s: 80px; /* control the size */
	--c: #fff;

	--_g: #0000 calc(-650% / 13) calc(50% / 13), var(--c) 0 calc(100% / 13),
		#0000 0 calc(150% / 13), var(--c) 0 calc(200% / 13), #0000 0 calc(250% / 13),
		var(--c) 0 calc(300% / 13);
	--_g0: repeating-linear-gradient(45deg, var(--_g));
	--_g1: repeating-linear-gradient(-45deg, var(--_g));
	background: var(--_g0), var(--_g0) var(--s) var(--s), var(--_g1),
		var(--_g1) var(--s) var(--s) #27b8b8;
	background-size: calc(2 * var(--s)) calc(2 * var(--s));
}
</style>
