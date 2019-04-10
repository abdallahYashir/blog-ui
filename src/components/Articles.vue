<template>
  <div class="articles-wrapper">
    <h3>Articles</h3>
    <div class="articles">
      <div v-for="article in allArticles" :key="article.id" class="article">
        <b-card
          :title="article.title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>{{ article.content | truncate(100) }}</b-card-text>

          <b-button href="#" variant="primary">Read More</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Vue from "vue";

Vue.filter("truncate", function(text, stop, clamp) {
  return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
});

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
