<template>
	<div class="container" v-if="asyncDataStatus_ready">
		<AppHead>
			<title>Fyrre Podcasts</title>
		</AppHead>
		<h1>podcast</h1>

		<div class="podcasts_wrap" v-if="podcasts.length">
			<PodcastsMagCardComp
				v-for="podcast in podcasts"
				:key="podcast.id"
				:podcast="podcast"
			/>
		</div>
		<div v-else class='empty_message'><h4>No podcasts available</h4></div>
	</div>
</template>

<script>
import asynDataStatus from "@/mixins/asyncDataStatus";
import { mapActions } from "vuex";
import PodcastsMagCardComp from "@/components/podcasts/PodcastsMagCardComp.vue";

export default {
	name: "PodcastsPage",
	mixins: [asynDataStatus],
	components: { PodcastsMagCardComp },
	computed: {
		podcasts() {
			let podcastsReversed = this.$store.state.podcasts;
			return podcastsReversed.reverse();
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
.podcasts_wrap {
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 30px 0 0;
}
</style>