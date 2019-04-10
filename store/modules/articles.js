import Vue from 'vue';

const api = 'http://localhost:3000/articles';

const state = {
	articles: []
};

const getters = {
	allArticles: (state) => state.articles
};

const actions = {
	async fetchArticles({ commit }) {
		const response = await Vue.axios.get(api);
		commit('setArticles', response.data);
	},
	async addArticle({ commit }, article) {
		const response = await Vue.axios.post(api, article);
		commit('newArticle', response.data);
	},
	async deleteArticle({ commit }, id) {
		await Vue.axios.delete(`${api}/${id}`);
		commit('removeArticle', id);
	},
	async updateArticle({ commit }, updateArticle) {
		const response = await Vue.axios.put(`${api}/${updateArticle.id}`, updateArticle);
		commit('updateArticle', response.data);
	}
};

const mutations = {
	setArticles: (state, articles) => (state.articles = articles),
	newArticle: (state, article) => state.articles.unshift(article),
	removeArticle: (state, id) => (state.articles = state.articles.filter((article) => article.id !== id)),
	updateArticle: (state, updateArticle) => {
		const index = state.articles.findIndex((article) => article.id === updateArticle.id);
		if (index !== -1) {
			state.articles.splice(index, 1, updateArticle);
		}
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
