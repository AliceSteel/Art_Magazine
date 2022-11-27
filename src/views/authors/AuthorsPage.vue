<template>
	<main class="container" v-if="asyncDataStatus_ready">
		<h1>authors</h1>

		<div class="authors_wrap">
			<AuthorCardComp
				v-for="author in authors"
				:key="author.name"
				:author="author"
			/>
		</div>
	</main>
</template>

<script>
import asynDataStatus from "@/mixins/asyncDataStatus";
import { mapActions } from "vuex";
import AuthorCardComp from "@/components/authors/AuthorCardComp.vue";

export default {
	name: "AuthorsPage",
	mixins: [asynDataStatus],
	components: { AuthorCardComp },
	computed: {
		authors() {
			return this.$store.state.authors;
		},
	},
	methods: {
		...mapActions(["fetchAllCollection"]),
	},
	async created() {
		if (this.$store.state.authors.length === 0) {
			await this.fetchAllCollection({ resource: "authors" });
		}
		this.asyncDataStatus_fetched();
	},
};
</script>

<style lang='scss' scoped>
  .authors_wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 140px 0;
  }
  
</style>