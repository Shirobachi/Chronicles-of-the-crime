<script setup>
	const props = defineProps({
		id: String
	})

	const place = new URL("../img/places/" + props.id + ".png", import.meta.url).href;
</script>

<template>
	<div>
		<img 
			:src="place" 
			:alt="'Could not load image for place ' + id" 
			class="
				object-cover 
				w-9/12
			"
		>
	</div>
</template>