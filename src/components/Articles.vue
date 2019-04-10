<template>
  <div class="articles-wrapper">
    <h3>Articles</h3>
    <div class="articles">
      <div v-for="article in allArticles" :key="article.id" class="article">{{ article.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "articles",
  methods: { ...mapActions(["fetchArticles"]) },
  computed: mapGetters(["allArticles"]),
  created() {
    this.fetchArticles();
  }
};
</script>

<style>
</style>
