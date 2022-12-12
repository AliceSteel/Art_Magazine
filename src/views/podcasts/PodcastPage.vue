<template>
	<div v-if="asyncDataStatus_ready">
		<AppHead>
			<title>{{ podcast.title }}</title>
		</AppHead>
		<ContentPagesHeader slug='/podcasts' title='PODCAST' />
		<div class="podcast_content_wrap">
			<div class="podcast_header">
				<div class="podcast_header_pic_container">
					<div class="podcast_header_pic">
						<img :src="podcast.imgUrl" alt="podcast" />
					</div>
					<div class="podcast_header_info">
						<b class="listenOn">Listen On</b>
						<ul>
							<li>
                                <a href="https://www.spotify.com/" target='_blank' rel="nofollow, noreferrer">
									<svg
										viewBox="0 0 32 32"
										class="icon"
										title="Spotify"
									>
										<path
											d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"
										></path>
									</svg>
								</a>
							</li>
							<li>
                                <a href="https://soundcloud.com/" target='_blank' rel="nofollow, noreferrer" title="SoundCloud">
									<svg class="icon" viewBox="0 0 32 32" title="SoundCloud">
										<path d="M27.874 16.069c-0.565 0-1.105 0.11-1.596 0.308-0.328-3.574-3.447-6.377-7.25-6.377-0.931 0-1.834 0.176-2.635 0.474-0.311 0.116-0.393 0.235-0.393 0.466v12.585c0 0.243 0.195 0.445 0.441 0.469 0.011 0.001 11.36 0.007 11.434 0.007 2.278 0 4.125-1.776 4.125-3.965s-1.848-3.966-4.126-3.966zM12.5 24h1l0.5-7.007-0.5-6.993h-1l-0.5 6.993zM9.5 24h-1l-0.5-5.086 0.5-4.914h1l0.5 5zM4.5 24h1l0.5-4-0.5-4h-1l-0.5 4zM0.5 22h1l0.5-2-0.5-2h-1l-0.5 2z"></path>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="podcast_header_info_wrap">
					<div class="podcast_header_info">
						<b>Date </b> {{ podcast.date }}
					</div>
					<div class="podcast_header_info">
						<b>Duration </b> {{ podcast.duration }}
					</div>
					<div class="podcast_header_info">
						<b>Share</b>
						<ul class="links">
                                    <li>
                                        <a href="https://www.instagram.com/" target='_blank' rel="nofollow, noreferrer" title="Instagram">
                                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7957 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7957 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7957 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7957 9 12 9ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75ZM12 4C9.526 4 9.122 4.007 7.971 4.058C7.187 4.095 6.661 4.2 6.173 4.39C5.76462 4.53994 5.39541 4.78026 5.093 5.093C4.78001 5.3954 4.53935 5.76458 4.389 6.173C4.199 6.663 4.094 7.188 4.058 7.971C4.006 9.075 4 9.461 4 12C4 14.474 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.474 20 14.878 19.993 16.029 19.942C16.811 19.905 17.338 19.8 17.826 19.611C18.2338 19.4603 18.6027 19.2205 18.906 18.909C19.243 18.572 19.444 18.259 19.61 17.829C19.8 17.336 19.906 16.809 19.942 16.029C19.994 14.925 20 14.539 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.8 6.661 19.61 6.173C19.4593 5.765 19.2191 5.39596 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.925 4.006 14.539 4 12 4ZM12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z"
                                                    fill="black" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/home" target='_blank' rel="nofollow, noreferrer" title="Twitter">
                                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M22.162 5.656C21.3985 5.99369 20.589 6.21547 19.76 6.314C20.6337 5.79143 21.2877 4.96901 21.6 4C20.78 4.488 19.881 4.83 18.944 5.015C18.3146 4.34158 17.4803 3.89496 16.5709 3.74458C15.6615 3.59421 14.7279 3.74849 13.9153 4.18345C13.1026 4.61841 12.4564 5.30968 12.0771 6.14979C11.6978 6.9899 11.6067 7.93178 11.818 8.829C10.1551 8.74565 8.52832 8.31352 7.04328 7.56066C5.55823 6.8078 4.24812 5.75105 3.19799 4.459C2.82628 5.09745 2.63095 5.82323 2.63199 6.562C2.63199 8.012 3.36999 9.293 4.49199 10.043C3.828 10.0221 3.17862 9.84278 2.59799 9.52V9.572C2.59819 10.5377 2.93236 11.4736 3.54384 12.2211C4.15532 12.9685 5.00647 13.4815 5.95299 13.673C5.33661 13.84 4.6903 13.8647 4.06299 13.745C4.32986 14.5762 4.85 15.3032 5.55058 15.8241C6.25117 16.345 7.09712 16.6338 7.96999 16.65C7.10247 17.3313 6.10917 17.835 5.04687 18.1322C3.98458 18.4294 2.87412 18.5143 1.77899 18.382C3.69069 19.6114 5.91609 20.2641 8.18899 20.262C15.882 20.262 20.089 13.889 20.089 8.362C20.089 8.182 20.084 8 20.076 7.822C20.8949 7.23017 21.6016 6.49702 22.163 5.657L22.162 5.656Z"
                                                    fill="black" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" target='_blank' rel="nofollow, noreferrer" title="YouTube">
                                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z"
                                                    fill="black" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
					
					</div>
				</div>
			</div>

			<div class="podcast_text">
				<h4>episode {{ displayId }}</h4>
				<h2>{{ podcast.title }}</h2>
				<p>
					<i> {{ podcast.textP1 }} </i>
				</p>
				<p>{{ podcast.textP2 }}</p>
				<p>{{ podcast.textP3 }}</p>
			</div>
		</div>
		<section class="container">
            <div class="section_title_wrap">
                <h2>Latest Episodes</h2>
                <router-link to='/podcasts' class="all_others_link" title="Podcasts Page">
                    <i>ALL EPISODES</i>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                            fill="black" />
                    </svg>
                </router-link>
            </div>

            <div class="latest_3_items">
                <PodcastCardComp 
                    v-for='episode in last3Podcasts'
                    :key='episode.id'
                    :podcast="episode"
                />
		</div>
        </section>  
	</div>
</template>

<script>
import asynDataStatus from "@/mixins/asyncDataStatus";
import { mapActions } from "vuex";
import ContentPagesHeader from "@/components/ContentPagesHeader.vue";
import PodcastCardComp from "@/components/podcasts/PodcastCardComp.vue"

export default {
	name: "PodcastPage",
	mixins: [asynDataStatus],
	components: { ContentPagesHeader, PodcastCardComp },
	computed: {
		id() {
			return this.$route.params.id;
		},
		podcast() {
			return this.$store.getters.podcast(this.id);
		},
		displayId() {
			return this.id.replace("p", "0");
		},
		last3Podcasts() {
			let podcasts = this.$store.state.podcasts;
			return podcasts.slice((podcasts.length - 3), (podcasts.length))
		},
	},
	methods: {
		...mapActions(["fetchAllCollection"]),
	},
	async created() {
		if (!this.$store.state.podcasts.length) {
			await this.fetchAllCollection({ resource: "podcasts" });
		}
		this.asyncDataStatus_fetched();
	},
};
</script>

<style lang='scss' scoped>
h2 {
	padding: 1rem 0 2rem;
}
.podcast_content_wrap {
	width: 90%;
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 50px;
}
.podcast_header {
	height: fit-content;
	flex-basis: 30%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	&_pic_container {
		width: 100%;
		max-width: 350px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #000;
	}
	&_pic {
		width: 100%;
	}
	&_info_wrap {
		width: 100%;
		max-width: 320px;
	}
	&_info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 1rem;
		ul {
			height: 100%;
			display: flex;
			justify-content: space-between;
			gap: 12px;
			li:hover .icon{
				scale: 1.2;
				stroke: tomato;
				fill: tomato
			}
		}
	}
}
b.listenOn {
	font-size: 1.5rem;
}
.podcast_text {
	flex-basis: 60%;
	flex-grow: 1;
	padding-bottom: 50px;
	p {
		line-height: 28.8px;
		padding-bottom: 24px;

		i {
			font-size: 20px;
			line-height: 36px;
		}
	}
}
.icon {
	display: inline-block;
	width: 2rem;
	height: 2rem;
	stroke-width: 0;
	stroke: #000;
	fill: #000;
	margin-left: 1rem;
}

</style>