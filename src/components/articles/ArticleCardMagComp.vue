<template>
	<router-link :to="{name: 'ArticlePage', params: { id: article.id } }" class="article_card">
		<div class="article_date">
			<span>{{ article.date }}</span>
			<div class="label">{{ article.label }}</div>
		</div>
		<div class="article_img_wrap">
			<img :src="article.picUrl" :alt="article.title" />
		</div>
		<h3>{{ article.title }}</h3>
		<p>{{ article.articleDescr }}</p>
		<div class="info">
			<div><b>Text: </b>{{ article.author }}</div>
			<div><b>Duration </b>{{ article.duration }}</div>
		</div>
	</router-link>
</template>

<script>
export default {
	name: "ArticleCardMagComp",
	props: {
		article: {
			required: true,
			type: Object,
		},
	},
};
</script>

<style lang='scss' scoped>
.article_card {
	width: 100%;
	height: 100%;
	padding: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
	border: 1px solid #000;
}
.article_date {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.article_img_wrap {
	width: 100%;
	height: 100%;
	max-width: 400px;
	max-height: 400px;
	img {
		height: 100%;
	}
}
</style>