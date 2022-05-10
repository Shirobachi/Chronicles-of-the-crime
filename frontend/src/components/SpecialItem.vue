<script setup>

	const props = defineProps({
		item: Object,
	});

	// set emit
	const emit = defineEmits(
		[
			"delSpecialItem",
		]
	);

	const item = new URL("../img/specialItems/" + props.item.id + ".png", import.meta.url).href;

	const delSpecialItem = () => {
		console.log("delete: ", props.item.id);

		emit("delSpecialItem", props.item.id);
	}
</script>

<template>
	
	<div class="relative">
		<img class="w-36" :src="item" alt="">
		<svg @click="delSpecialItem" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-400 hover:text-red-800 hover:cursor-pointer absolute top-2 right-4 bg-gray-600 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
		</svg>
	</div>


</template>