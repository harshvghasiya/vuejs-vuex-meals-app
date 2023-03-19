<template>
	<div class="container mt-4">
		<h1 class="text-success">Random Meals</h1>
		<div class="row ">
			<div class="col-md-3"></div>
			<div class="col-md-9 mt-3">
				<a href="#" v-for="letter in letters" :key="letter" @click="mealsByLetters(letter)" class="text-dark mx-1">{{ letter }}</a> 
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-md-2">
				<h4>Filters</h4>
				<div class="row mt-3">
					<div class="col-md-12">
						<div class="form-group">
							 <input type="text" v-model="search" v-on:keyup="searchMeal" name="search" class="form-control" placeholder="Search..." />
						</div>
						<h4 class="mt-3">Select Ingredient</h4>
					</div>
					<div class="col-md-12 " v-for="area in areaList">
						<input type="checkbox" v-model="ingre" :value="area.strIngredient" v-on:change="mealsBystrIngredient" class="mx-1"  />{{ area.strIngredient }}
					</div>
				</div>
			</div>
			<div class="col-md-10">
				<div class="row">
					<div class="col-md-4 mt-3" v-for="meal in randomMeals" :key="meal.id">
						<Meal :meal="meal" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import Meal from './partial/Meal.vue'
	import {mapGetters} from 'vuex'


	export default{

		name: 'Home',
		components:{
			Meal
		},
		methods:{

			mealsByLetters(letter){
				console.log(letter)
				this.$store.dispatch('mealsByLetters', { f: letter })
			},

		},
		data(){

			return{

				ingre:[],
				search: ''
			}
		},
		
		computed: {

			letters(){

				let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
				str = str.split("")
				return str
			},
			randomMeals(){ 

				return this.$store.state.randomMeals;
			},

			mealsBystrIngredient(){

				let ing = this.ingre.toString()

				this.$store.dispatch('mealsBystrIngredient', { i: ing })

			},

			searchMeal(){

				let search = this.search
				this.$store.dispatch('mealsByLetters', { s: search })

			},

			...mapGetters({

				areaList: 'areaList'
			})
			
		},
		mounted(){

			this.$store.dispatch('randomMeals')
			this.$store.dispatch('areaList')

		}
	}
</script>