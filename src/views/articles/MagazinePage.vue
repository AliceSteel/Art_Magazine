<template>
	<main class="container" v-if="asyncDataStatus_ready">
		<h1>magazine</h1>
		<div class="categories">
			<h4>categories</h4>
			<div class="label">all</div>
			<div class="label">art</div>
			<div class="label">street art</div>
			<div class="label">sculptures</div>
		</div>

		<div class="articles_wrap">
			<ArticleCardMagComp 
				v-for='article in articles'
				:key='article.id'
				:article='article'
			/>
		</div>
	</main>
</template>

<script>
import ArticleCardMagComp from '@/components/articles/ArticleCardMagComp.vue'
import asynDataStatus from '@/mixins/asyncDataStatus'
import { mapActions } from 'vuex'

export default {
    name: 'MagazinePage',
	mixins: [asynDataStatus],
    components: {
        ArticleCardMagComp
    },
	computed: {
		articles () {
			return this.$store.state.magazine
		}
	},
	methods: {
        ...mapActions(['fetchAllCollection'])
    },
	async created () {
        if(this.$store.state.magazine.length === 0){
            await this.fetchAllCollection({resource: 'magazine'})
		}
		this.asyncDataStatus_fetched()
	}
}
</script>

<style lang="scss" scoped>
.categories {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 12px;
	padding: 67px 0;

	h4 {
		margin-right: auto;
	}
	.label {
		margin: 0;
	}
}

.articles_wrap {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	margin-bottom: 12vw;

	a {
		color: #000;
	}
}
</style>
