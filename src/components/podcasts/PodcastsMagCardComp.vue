<template>
	<div class="podcast_wrap">
		<div class="podcast_id">
			{{ id }}
		</div>
		<div class="podcast_pic">
			<img :src="podcast.imgUrl" :alt="podcast.title" />
		</div>

		<div class="podcast_descr">
			<h3>{{ podcast.title }}</h3>
		</div>
		<div class="info">
			<div><b>Date </b> {{ podcast.date }}</div>
			<div><b>Duration </b>{{ podcast.duration }}</div>
			<router-link :to="{ name: 'PodcastPage', params: { id: podcast.id } }" class="all_others_link">
                    <i>LISTEN</i>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                            fill="black" />
                    </svg>
            </router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "PodcastsMagCardComp",
	props: {
		podcast: {
			required: true,
			type: Object,
		},
	},
	computed: {
		id(){
			return this.podcast.id.replace('p', '0')
		}
	}
};
</script>

<style lang='scss' scoped>
.podcast_wrap {
	width: 100%;
	padding: 48px 0;
	border-top: 1px solid #000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 64px;
	.info {
		max-width: 30%;
	}
}
.podcast_id {
	font-size: 1.5rem;
	font-weight: 600;
}
.podcast_pic {
	width: 100%;
	max-width: 240px;
	vertical-align: top;
	img {
		height: 100%;
	}
}
.podcast_descr {
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 50px;
}
</style>