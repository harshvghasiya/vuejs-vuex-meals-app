import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import MealDetails from '../components/partial/MealDetails.vue'

const routes = [
		
	{
		path: '/',
		name: 'home',
		component: Home

	},
	{
		path: '/meal-details/:id',
		name: 'meal_details',
		component: MealDetails

	}
];

const router = createRouter({

	history: createWebHistory(),
	routes 
})

export default router