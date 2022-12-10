<template>
	<router-link 
		:to="{ name: 'PodcastPage', params: { id: podcast.id } }" 
		class="podcast_card"
		title="To the podcast page"
		>
		<div class="podcast_img_wrap">
			<img :src="podcast.imgUrl" alt="podcast" />
		</div>
		<div class="podcast_title">
			<h3>{{ podcast.title }}</h3>
		</div>
		<div class="info">
			<div><b>Date</b> {{ podcast.date }}</div>
			<div><b>Duration</b> {{ podcast.duration }}</div>
		</div>
	</router-link>
</template>

<script>
export default {
	name: 'PodcastCardComp',
	props: {
		podcast: {
			required: true,
			type: Object
		}
	}
};
</script>

<style lang='scss' scoped>
.podcast_card {
    padding: 48px;
    width: 100%;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
}
.podcast_img_wrap {
    width: 100%;
    max-width: 408px;
    vertical-align: top;
}
</style>