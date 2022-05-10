<script setup>
	import { computed, ref } from "vue";	
	import Place from "../components/Place.vue";

	const data = ref(
		{
			places: [
				{
					id: "HOME",
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

	const isPlaceValid = (id) => {
		// check if id >= a && <= p
		
		var correct = "ABCDEFGHIJKLMNOP";
		id = id.toUpperCase();
		var isValid = true;
		for (var i = 0; i < id.length; i++) {
			if (correct.indexOf(id[i]) === -1) {
				isValid = false;
				break;
			}
		}

		return isValid;
	}

	const addPlace = () => {
		var id = prompt("Enter place id");

		if (isPlaceValid(id)) {
			data.value.places.push({
				id: id,
				ppl: [],
			});
		}
	}

</script>

<template>

	<div>
		<div class="mt-20 container mx-auto px-5">
			<div class="grid grid-cols-1 md:grid-cols-2">
				<Place @delThisPerson="delPerson" @delThisPlace="delPlace" v-for="place in data.places" :key="place.id" :id="place.id" :ppl="place.ppl" />
			</div>
		</div>

		<!-- ICONS -->
		<svg xmlns="http://www.w3.org/2000/svg" class="fixed top-14 right-9 h-10 w-10 hover:text-blue-400 hover:underline hover:cursor-pointer" @click="addPlace" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
		</svg>
	</div>

</template>