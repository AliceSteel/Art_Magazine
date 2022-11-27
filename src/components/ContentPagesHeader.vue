<template>
	<div class="container">
		<router-link :to="slug" class="all_others_link">
			<svg viewBox="0 0 32 32" class="icon_small">
				<path
					d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"
				></path>
			</svg>
			<i>GO BACK</i>
		</router-link>
		<h3>{{ title }}</h3>
	</div>
</template>

<script>
export default {
	name: 'ContentPagesHeader',
	props: {
		slug: {
			required: true,
			type: String
		},
		title: {
			required: true,
			type: String
		}
	}
};
</script>

<style lang='scss' scoped>
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.icon_small {
	display: inline-block;
	stroke-width: 0;
	stroke: #000;
	fill: #000;
	width: 1rem;
	height: 1rem;
	
}
</style>