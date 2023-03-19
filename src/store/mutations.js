import state from './state'

const mutations = {

	randomMeals(state, payload){

		state.randomMeals = payload.meals 
	},

	areaList(state, payload){

		state.areaList = payload.meals
	},

	mealDetails(state, payload){

		state.mealDetails = payload.meals 
	}
}

export default mutations