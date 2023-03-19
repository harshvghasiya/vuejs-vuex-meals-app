import state from './state'

const getters = {

	randomMeals(state){

		return state.randomMeals
	},

	areaList(state){

		let arr = state.areaList.slice(0, 20)

		return arr
	}
}

export default getters