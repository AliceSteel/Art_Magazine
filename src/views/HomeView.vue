<template>
	<main>
	<div class="container">
		<h1>art &amp; life</h1>
		<div class="black_running_line">
			<b>NEWS+++ </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
			<b>NEWS+++ </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
		</div>
	</div>
<!-- { articles && <ArticleHeader article={articles[1]} />}
 -->	
	
	<section class="container homepage_articles">
		<div class="articles">

			<!-- {firstSixArticles &&
				firstSixArticles.map((article) => (
					<ArticlePreviewCard key={article.title} article={article}/>
			))} -->

			<router-link to='/articles' class="all_others_link">
				<i>ALL ARTICLES</i>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
						fill="black" />
				</svg>
			</router-link>

		</div>

		<div class="print_magazine">
			<div class="latest_issue">
				<h4>printmagazine</h4>
				<div class="date">03/2022</div>
				<div class="magazine_img_wrap">
					<img src="https://lh3.googleusercontent.com/pw/AL9nZEWqZ30IkHBSwQkrGXhdKumEUtj86S1vaE8xNic05rMg7X3Psli4OkAR4x1bXpi-R4sCa_kzXnSWOM3EvjeSzIiE9wblQOJPT5Ng64sYMluK1o-36CnvbflhwlKlroTAm8czBWqSkBUEnStt5gEstEwDfQ=w369-h462-no?authuser=0"
						alt="magazine cover" />
				</div>
				<button class="black_btn"><i>BUY NOW</i></button>
			</div>

			<div class="newsletter">
				<h4>newsletter</h4>
				<h3>Design news to your inbox</h3>
				<form class="sign_up_form">
					<input type="email" placeholder="Email" />
					<button type="submit" class="black_btn"><i>sign up</i></button>
				</form>

			</div>
		</div>
	</section>

	<section class="container">
		<div class="section_title_wrap">
			<h2>podcast</h2>
			<span class="all_others_link">
				<i>ALL EPISODES</i>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
						fill="black" />
				</svg>
			</span>
		</div>

		<div class="latest_3_podcast">

		<!-- 	{firstThreePodcasts && 
			firstThreePodcasts.map(({id, imgUrl, title, date, duration})=> (
					<div class="podcast_card" key={id}>
						<div class="podcast_img_wrap">
							<img src={imgUrl} alt="podcast" />
						</div>
						<div class="podcast_title">
							<h3>{ title }</h3>
						</div>
						<div class="info">
							<div><b>Date</b> {date}</div>
							<div><b>Duration</b> { duration }</div>
						</div>
					</div>
				))}
 -->
		</div>
	</section>

	<section class="container">
		<div class="section_title_wrap">
			<h2>Authors</h2>
			<span class="all_others_link">
				<i>ALL AUTHORS</i>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
						fill="black" />
				</svg>
			</span>
		</div>
		<div class="authors_wrap">
			<!-- {
			AUTHORS.filter((_, index)=> index < 6)
				.map(({name, picUrl, job, city}) =>(
				<div class="author_card" key={name}>
					<div class="pic_wrap">
						<img src={picUrl} alt={name} />
					</div>
					<div class="author_card_content">
						<h3>{name}</h3>
						<div class="info">
							<div><b>Job</b>{ job }</div>
							<div><b>City</b> { city }</div>
						</div>
					</div>
				</div>
			))}
 -->
		</div>
	</section>
</main>
</template>

<script>

//import ArticleHeaderComp from '@/components/

export default {
  name: 'HomeView',
  components: {
    
  }
}
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

.all_others_link {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 50px 0;
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

.date {
    font-size: 3rem;
    font-weight: 700;
    padding-bottom: 1rem;
}
.magazine_img_wrap {
    width: 100%;
    max-width: 370px;
    padding-bottom: 1rem;
}

.black_btn {
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    padding: 24px 16px;
    font-size: 14px;
}
.newsletter {
    background-color: #F8F8F8;
    padding: 30px;
}

.sign_up_form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-end;
    padding-top: 1rem;

    input {
        width: 100%;
        height: 50px;
        font-size: 1rem;
        padding: 15px;
    }
}
/* ============PODCASTS==========================0 */
.section_title_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    border-top: 1px solid #000;
}
.latest_3_podcast {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-bottom: 12vw;
}
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

/* ===========AUTHORS====================================== */

.authors_wrap {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 12vw;
}
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
