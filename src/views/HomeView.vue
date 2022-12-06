<template>
	<main v-if="asyncDataStatus_ready">
		<div class="container">
			<h1>art &amp; life</h1>
			<div class="black_bg">
				<div class="marquee">
					<p>
						<b>NEWS+++ </b>Lorem ipsum dolor sit amet, consectetur
						adipiscing elit +++ <b>NEWS+++ </b>Lorem ipsum dolor sit
						amet, consectetur adipiscing elit +++ <b>NEWS+++ </b>Lorem
						ipsum dolor sit amet, consectetur adipiscing elit +++
						<b>NEWS+++ </b>Lorem ipsum dolor sit amet, consectetur
						adipiscing elit +++
					</p>
				</div>
			</div>	
		</div>
		<router-link :to="{ name: 'ArticlePage', params: { id: last6Articles[4].id } }">
			<ArticleHeaderComp :article="last6Articles[4]" />
		</router-link>
		
		<section class="container homepage_articles">
			<div class="articles" v-if="last6Articles">
				<ArticleCardComp
					v-for="article in last6Articles"
					:key="article.title"
					:article="article"
				/>

				<router-link to="/magazine" class="all_others_link">
					<i>ALL ARTICLES</i>
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

			<div class="print_magazine">
				<div class="latest_issue">
					<h4>printmagazine</h4>
					<div class="date">03/2022</div>
					<div class="magazine_img_wrap">
						<img
							src="https://lh3.googleusercontent.com/pw/AL9nZEWqZ30IkHBSwQkrGXhdKumEUtj86S1vaE8xNic05rMg7X3Psli4OkAR4x1bXpi-R4sCa_kzXnSWOM3EvjeSzIiE9wblQOJPT5Ng64sYMluK1o-36CnvbflhwlKlroTAm8czBWqSkBUEnStt5gEstEwDfQ=w369-h462-no?authuser=0"
							alt="magazine cover"
						/>
					</div>
					<a
						href="https://magazinenewsstand.com/digital-magazines"
						target="_blank"
						rel="nofollow, noreferrer"
						class="black_btn"
					>
						<i>BUY NOW</i>
					</a>
				</div>

				<div class="newsletter">
					<h4>newsletter</h4>
					<h3>Design news to your inbox</h3>
					<NewsletterForm />
				</div>
			</div>
		</section>
		<section class="container">
			<div class="section_title_wrap">
				<h2>podcast</h2>
				<router-link to="/podcasts" class="all_others_link">
					<i>ALL EPISODES</i>
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

			<div class="latest_3_items">
				<PodcastCardComp
					v-for="podcast in last3Podcasts"
					:key="podcast.id"
					:podcast="podcast"
				/>
			</div>
		</section>

		<section class="container">
			<div class="section_title_wrap">
				<h2>Authors</h2>
				<router-link to="/authors" class="all_others_link">
					<i>ALL AUTHORS</i>
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
			<div class="authors_wrap">
				<AuthorCardComp
					v-for="author in first6Authors"
					:key="author.id"
					:author="author"
				/>
			</div>
		</section>
	</main>
</template>

<script>
import { mapActions } from "vuex";
import asynDataStatus from "@/mixins/asyncDataStatus";
import ArticleHeaderComp from "@/components/articles/ArticleHeaderComp.vue";
import ArticleCardComp from "@/components/articles/ArticleCardComp.vue";
import PodcastCardComp from "@/components/podcasts/PodcastCardComp.vue";
import AuthorCardComp from "@/components/authors/AuthorCardComp.vue";
import NewsletterForm from "@/components/NewsletterForm.vue";

export default {
	name: "HomeView",
	mixins: [asynDataStatus],
	components: {
		ArticleHeaderComp,
		ArticleCardComp,
		PodcastCardComp,
		AuthorCardComp,
		NewsletterForm,
	},

	computed: {
		last6Articles() {
			let articles = this.$store.state.magazine;
			return articles.slice((articles.length - 6), (articles.length));
		},

		last3Podcasts() {
			let podcasts = this.$store.state.podcasts;
			return podcasts.slice((podcasts.length - 3), (podcasts.length))
		},
		first6Authors() {
			return this.$store.state.authors.slice(0, 6);
		},
	},
	methods: {
		...mapActions(["fetchAllCollection"]),
	},

	async created() {
		if (this.$store.state.magazine.length == []) {
			await this.fetchAllCollection({ resource: "magazine" });
		}
		if (this.$store.state.podcasts.length == []) {
			await this.fetchAllCollection({ resource: "podcasts" });
		}
		if (this.$store.state.authors.length == []) {
			await this.fetchAllCollection({ resource: "authors" });
		}
		this.asyncDataStatus_fetched();
	},
};
</script>

<style lang="scss" scoped>

section.homepage_articles {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 48px;
	padding-bottom: 46px;
}

.articles {
	flex-basis: 70%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}

.print_magazine {
	flex-basis: 25%;
	max-width: 370px;
	display: flex;
	flex-direction: column;
	gap: 50px;

	h4 {
		padding-bottom: 1rem;
	}
}
.latest_issue {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.date {
	font-size: 3rem;
	font-weight: 700;
}
.magazine_img_wrap {
	width: 100%;
	max-width: 370px;
}

.newsletter {
	background-color: #f8f8f8;
	padding: 30px;
}

/* ===========AUTHORS====================================== */

.authors_wrap {
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 12vw;
}
/* ======================================================== */
@media screen and (max-width: 1066px) {
	.print_magazine {
		flex-direction: row;
		flex-basis: 100%;
		max-width: 100%;
		justify-content: space-between;
	}
}
</style>
