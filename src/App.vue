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
