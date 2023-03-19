<template>
	 	<section class="py-5">
            <div class="container px-4 px-lg-5 my-5" v-for="meal in mealDetails" :key="meal.id">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" :src="meal.strMealThumb" /></div>
                    <div class="col-md-6">
                        <h1 class="display-5 fw-bolder">{{ meal.strMeal }}</h1>
                        <div class="fs-5 mb-5">
                            <span>Category: {{ meal.strCategory }}</span>
                        </div>
                        <p class="lead">{{ meal.strInstructions }}</p>
                       
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
	
	export default{
		name:'MealDetals',
		data(){

			return {

				id: null
			}
		},
		computed: {

			mealDetails(){ 

				return this.$store.state.mealDetails;
			}
			
		},
		mounted(){

			let id = this.$route.params.id

			this.id = id
			this.$store.dispatch('mealDetails', {i: id} )
		}
	}
</script>