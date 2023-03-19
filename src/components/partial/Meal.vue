<template>
	
	<div class="card" style="width: 18rem;">
	  <img :src="meal.strMealThumb" class="card-img-top" alt="">
	  <div class="card-body">
	    <h5 class="card-title">{{ meal.strMeal }}</h5>
	    <router-link :to="{ name: 'meal_details', params:{ id:meal.idMeal } }" class="btn btn-success">Meal Detail</router-link>
	  </div>
	</div>
</template>

<script>
	
	export default{

		name:'Meal',
		props:{

			meal:{

				type: Object
			}
		}
	}
</script>