<template>
    <section class="container article_header">
        <div class="article_title">
            <h2>{{ title }}</h2> 
        </div>
        <div class="article_descr">
            <p>{{ articleDescr }}</p>
            <div class="info">
                <div><b>Text</b> {{ author }}</div>
				<div><b>Date</b> {{ date }}</div>
				<div><b>Duration</b> {{ duration }}</div>
				<div class="label">{{ label }}</div>
            </div>
        </div>
        <div class="article_img">
            <img :src="require(picUrl)" alt='article'/>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ArticleHeaderComp',
        props: {
            title: String,
            articleDescr: String,
            author: String,
            date: String,
            duration: String,
            label: String,
            picUrl: String
        }
    }
</script>

<style lang="scss" scoped>
    .article_header {
        display: flex;
        flex-wrap: wrap;
        gap: 48px;
        margin-bottom: 50px;
    }

    .article_title {
        flex-basis: 48%;
        flex-grow: 1;
    }

    .article_descr {
        flex-basis: 48%;
        flex-grow: 1;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 24px;

        p {
            line-height: 2rem;
        }
    }

    .article_img {
        width: 100%;
        vertical-align: top;
        max-height: 800px;
        overflow: hidden;
        margin-bottom: 50px;
    }
</style>