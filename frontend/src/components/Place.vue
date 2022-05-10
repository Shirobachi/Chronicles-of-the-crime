<script setup>
	import Person from "../components/Person.vue";

	const props = defineProps({
		id: String,
		ppl: {
			type: Array,
			default: () => [],
		}
	})

	// set emitter(s)
	const emit = defineEmits(
		[
			"delThisPlace", 
			"delThisPerson", 
		]
	);

	const delThisPlace = () => {
		console.log("sending emit delThisPlace place -> home");
		emit("delThisPlace", props.id);
	}
	const delThisPerson = (e) => {
		console.log("sending emit delThisPerson place -> home");
		emit("delThisPerson", e);
	}


	const place = new URL("../img/places/" + props.id + ".png", import.meta.url).href;
</script>

<template>
	<div class="m-2">
		<div class="relative">
			<img :src="place" :alt="'Could not load image for place ' + id">
			<!-- if ppl exist show it -->
			
			<div v-if="ppl.length > 0" class="flex justify-around">
				<Person @delThisPerson="delThisPerson" v-for="person in ppl" :key="person.id" :id="person.id" />
			</div>

			<div @click="delThisPlace" >
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400 hover:text-red-800 hover:cursor-pointer absolute top-2 right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>

		</div>
	</div>
</template>