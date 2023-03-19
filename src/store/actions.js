import axios from 'axios';
import mutations from './mutations';

const baseUrl = 'https://themealdb.p.rapidapi.com'

const actions = {

	async randomMeals({commit}){

		let url = '/randomselection.php';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  headers: {
		    'X-RapidAPI-Key': 'a8d298ab7bmshbb0a2eedce28965p134fc3jsn0d777aae416d',
		    'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
		  }
		};

		await axios.request(options)
		.then(function (response) {
            commit('randomMeals', response.data);
			console.log(response.data);
			return true;

		})

	},

	async mealsByLetters({commit}, params){

		let url = '/search.php';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  params:params,
		  headers: {
		    'X-RapidAPI-Key': 'a8d298ab7bmshbb0a2eedce28965p134fc3jsn0d777aae416d',
		    'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
		  }
		};

		await axios.request(options)
		.then(function (response) {
            commit('randomMeals', response.data);
			console.log(response.data);
			return true;

		})

	},

	async areaList({commit}){

		let url = '/list.php';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  params:{ i: 'list'},
		  headers: {
		    'X-RapidAPI-Key': 'a8d298ab7bmshbb0a2eedce28965p134fc3jsn0d777aae416d',
		    'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
		  }
		};

		await axios.request(options)
		.then(function (response) {
            commit('areaList', response.data);
			console.log(response.data);
			return true;

		})

	},

	async mealsBystrIngredient({commit}, params){

		let url = '/filter.php';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  params:params,
		  headers: {
		    'X-RapidAPI-Key': 'a8d298ab7bmshbb0a2eedce28965p134fc3jsn0d777aae416d',
		    'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
		  }
		};

		await axios.request(options)
		.then(function (response) {
            commit('randomMeals', response.data);
			console.log(response.data);
			return true;

		})

	},

	async mealDetails({commit}, params){

		let url = '/lookup.php';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  params: params,
		  headers: {
		    'X-RapidAPI-Key': 'a8d298ab7bmshbb0a2eedce28965p134fc3jsn0d777aae416d',
		    'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
		  }
		};

		await axios.request(options)
		.then(function (response) {
            commit('mealDetails', response.data);
			console.log(response.data);
			return true;

		})

	}
}

export default actions