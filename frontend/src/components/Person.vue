<script setup>
	const props = defineProps({
		id: Number
	});

	const person = new URL("../img/people/" + props.id + ".png", import.meta.url).href;
	const w = 250;

	const del = (id) => {
		console.log("delete: ", id);
	}

	// set emitter(s)
	const emit = defineEmits(
		[
			"delThisPerson",
		]
	);
	const delThisPerson = () => {
		emit("delThisPerson", props.id);
		console.log("sending emit delThisPerson person -> place");
	}

</script>

<template>
	<div>
		<div class="relative">
			<img class="h-[14rem] -mt-[25rem] bg-gray-500" :src="person" alt="">
			<svg xmlns="http://www.w3.org/2000/svg" @click="delThisPerson()" class="h-5 w-5 text-red-400 hover:text-red-800 hover:cursor-pointer absolute top-2 right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</div>
	</div>

</template>