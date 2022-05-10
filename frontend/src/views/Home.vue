<script setup>
	import { computed, ref } from "vue";	
	import Place from "../components/Place.vue";

	const data = ref(
		{
			places: [
				{
					id: "N",
					ppl: [
						{
							id: 33,
						},
						{
							id: 33,
						},
						{
							id: 33,
						},
					]
				},
				{
					id: "N",
					ppl: [
						{
							id: 33,
						},
						{
							id: 55,
						},
						{
							id: 55,
						},
					]
				},
				{
					id: "N",
					ppl: [
						{
							id: 54,
						},
						{
							id: 33,
						},
						{
							id: 54,
						},
					]
				},
			],
		},
	);

	const delPlace = (id) => {
		console.log("delete place: ", id);
		data.value.places = data.value.places.filter(place => place.id !== id);
	}

	const delPerson = (id) => {
		console.log("delete person: ", id);
		data.value.places.forEach(place => {
			place.ppl = place.ppl.filter(person => person.id !== id);
		});
	}

</script>

<template>

	<div class="mt-12 container mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<Place @delThisPerson="delPerson" @delThisPlace="delPlace" v-for="place in data.places" :key="place.id" :id="place.id" :ppl="place.ppl" />
		</div>
	</div>

</template>