<template>
	<div class="author_card">
		<div class="pic_wrap">
			<img :src="author.picUrl" :alt="author.name" />
		</div>
		<div class="author_card_content">
			<h3>{{ author.name }}</h3>
			<div class="info">
				<div><b>Job </b> {{ author.job }}</div>
				<div><b>City </b> {{ author.city }}</div>
				<router-link
					v-if='this.$route.name === "authors"'
					:to="{ name: 'AuthorPage', params: { id: author.id } }"
					class="all_others_link"
				>
					<i>ABOUT</i>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
							fill="black"
						/>
					</svg>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AuthorCardComp",
	props: {
		author: {
			required: true,
			type: Object,
		},
	},
};
</script>

<style lang='scss' scoped>
.author_card {
	flex-basis: 50%;
	flex-grow: 1;
	padding: 2rem;
	display: flex;
	gap: 48px;
	border: 1px solid #000;
}
.pic_wrap {
	width: 150px;
	height: 150px;
}
.author_card_content {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	.info {
		width: max-content;
	}
}
</style>