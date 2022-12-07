<template>
	<router-link
		:to="{ name: 'ArticlePage', params: { id: article.id } }"
		class="article"
	>
		<div class="article_pic">
			<img :src="article.picUrl" :alt="article.title" />
		</div>
		<div class="article_content">
			<div class="descr">
				<h3>{{ article.title }}</h3>
				<p>{{ article.articleDescr }}</p>
			</div>
			<div class="info">
				<div><b>Text: </b>{{ article.author }}</div>
				<div><b>Date </b> {{ article.date }}</div>
				<div><b>Duration </b>{{ article.duration }}</div>
				<div class="label">{{ article.label }}</div>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {
	name: "ArticleCardComp",
	props: {
		article: {
			required: true,
			type: Object,
		},
	},
};
</script>

<style lang='scss' scoped>
.article {
	width: 100%;
	display: grid;
	grid-template-columns: 240px 1fr;
	padding: 48px 0;
	border-top: 1px solid #000;

	&:first-child {
		border-top: none;
	}

	&_pic {
		width: 240px;
		height: 240px;
		vertical-align: top;
		img {
			height: 100%;
		}
	}
	&_content {
		padding-left: 48px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}
}

.descr h3 {
	padding-bottom: 12px;
}
@media screen and (max-width: 500px) {
	.article {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;

		&_pic {
			width: 100%;
		}
		&_content {
			padding-left: 0;
			display: flex;
			gap: 1rem;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
		}
	}
}
</style>