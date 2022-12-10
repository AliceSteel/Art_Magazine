<template>
	<div class="container" v-if="asyncDataStatus_ready">
		<h1 class="magazine_h1">magazine</h1>
		<div class="categories">
			<h4>categories</h4>
			<button @click='filterPosts("all")' class="label">all</button>
			<button @click='filterPosts("art")' class="label">art</button >
			<button @click='filterPosts("street art")' class="label">street art</button>
			<button @click='filterPosts("sculptures")' class="label">sculptures</button>
		</div>
		<div v-if="posts.length">
			<div class="articles_wrap">
				<ArticleCardMagComp 
					v-for='article in posts'
					:key='article.id'
					:article='article'
				/>	
			</div>
			<AppInfiniteScroll
							v-if="$store.state.magazine.length < count"
							@load="fetchLatestPosts"
							:done="posts.length === count"
			/>	
		</div>
		<div class='empty_message' v-else><h4>No articles available</h4></div>
	</div>
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
	data(){
		return {
			posts: this.$store.state.magazine
		}	
	},
	computed: {
		lastPostFetched() {
			if (this.posts.length === 0) return null;
			return this.posts[this.posts.length - 1];
		},
		count(){
			return this.$store.state.collectionCount
		}
	},
	methods: {
        ...mapActions(['fetchCollectionByScroll']),
		...mapActions(['fetchFirestoreCollectionCount']),
		...mapActions(['fetchAllCollection']),
		
		fetchLatestPosts() {
			return this.fetchCollectionByScroll({
				resource: 'magazine',
				startAftr: this.lastPostFetched,
			});
		},
		async filterPosts (catName) {
			if (this.$store.state.magazine.length < this.count ){
				console.log('execurte fetchingAll');
				this.$store.dispatch("emptyCollection", { resource: "magazine" });
				await this.fetchAllCollection({resource: 'magazine'})
			}
			this.posts = this.$store.state.magazine
			if(catName !== 'all') {
				this.posts = this.posts.filter((post) => {
					return post.label === catName
				})
			}
		}
    },
	async created () {
		await this.fetchFirestoreCollectionCount({resource: 'magazine'})
        if(this.$store.state.magazine.length < this.count){
            await this.fetchLatestPosts({resource: 'magazine'})
		}
		this.asyncDataStatus_fetched()
	}
}
</script>

<style lang="scss" scoped>
.magazine_h1 {
	margin-inline-start: -15px;
}
.categories {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-end;
	gap: 12px;
	padding: 35px 0 67px;

	h4 {
		margin-right: auto;
	}
	.label {
		margin: 0;
		background-color: #fff;
		&:hover {
			scale: 1.1
		}
	}
}

.articles_wrap {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	margin-bottom: 50px;

	a {
		color: #000;
	}
}
@media screen and (max-width: 360px) {
	.articles_wrap {
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}
}
</style>
