<template>
    <section class="container article_header">
        <div class="article_title">
            <h2>{{ article.title }}</h2> 
        </div>
        <div class="article_descr">
            <p>{{ article.articleDescr }}</p>
            <div class="info">
                <div><b>Text</b> {{ article.author }}</div>
				<div><b>Date</b> {{ article.date }}</div>
				<div><b>Duration</b> {{ article.duration }}</div>
				<div class="label">{{ article.label }}</div>
            </div>
        </div>
        <div class="article_img">
            <img :src="article.picUrl" alt='article'/>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ArticleHeaderComp',
        props: {
           article: {
            required: true,
            type: Object
           }
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