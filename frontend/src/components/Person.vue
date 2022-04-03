<script setup>
	const props = defineProps({
		id: Number
	});

	const person = new URL("../img/people/" + props.id + ".png", import.meta.url).href;
	const qr = new URL("https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=Ind1_c" + props.id + ".jpg", import.meta.url).href;
	const w = 250;
</script>

<template>
	<div class="m-1 border-dashed border-2 border-blue-600 relative">
		<img :width="w" class="bg-gray-500" :src="person" alt="">
		<img :width="w/3" class="absolute bottom-1 right-1" :src="qr" alt="">
	</div>

</template>