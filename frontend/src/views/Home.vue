<script setup>
	import { computed, ref } from "vue";	
	import Person from "../components/Person.vue";
	import Place from "../components/Place.vue";
	
	const data = ref([
			{
				"place": "N"
			},
		]
	);
</script>

<template>

	<div class="mx-auto">
		<Place id="N" />
		<Place id="N" />
	</div>
	<!-- <div v-for="(item) in data">
		{{item.place}}
	</div> -->

<!-- 
	<div class="flex flex-row justify-center m-5">
			<Person id="31" />
			<Person id="32" />
			<Person id="54" />
	</div> -->

</template>