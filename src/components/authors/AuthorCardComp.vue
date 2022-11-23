<template>
  <div class="author_card" key={name}>
		<div class="pic_wrap">
			<img :src='author.picUrl' :alt='author.name' />
		</div>
		<div class="author_card_content">
				<h3>{{ author.name }}</h3>
				<div class="info">
						<div><b>Job</b>{{ author.job }}</div>
						<div><b>City</b> {{ author.city }}</div>
				</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AuthorCardComp',
	props: {
		author: {
			required: true,
			type: Object
		}
	}
}
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
}

</style>