import Vue from 'vue';

const state = {
	articles: []
};

const getters = {
	allArticles: (state) => state.articles
};

const actions = {
	async fetchArticles({ commit }) {
		const response = await Vue.axios.get('http://localhost:3000/articles');

		commit('setArticles', response.data);
	}
};

const mutations = {
	setArticles: (state, articles) => (state.articles = articles)
};

export default {
	state,
	getters,
	actions,
	mutations
};
