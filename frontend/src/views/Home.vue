<script setup>
	import { computed, ref } from "vue";	
	import Place from "../components/Place.vue";
	import SpecialItem from "../components/SpecialItem.vue";
	import Item from "../components/Item.vue";
  import { useToast } from "vue-toastification";

	const Toast = useToast();

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
			cards: {
				normal: [],
				special: [
					{
						id: 7
					},
					{
						id: 7
					},
					{
						id: 7
					},
					{
						id: 7
					},
					{
						id: 7
					},
					{
						id: 7
					},
					{
						id: 7
					},
				],
			}
		},
	);

	const delPlace = (id) => {
		console.log("delete place: ", id);
		if (isPlaceValid(id))
			data.value.places = data.value.places.filter(place => place.id !== id);
	}

	const delPerson = (id) => {
		console.log("delete person: ", id);
		data.value.places.forEach(place => {
			place.ppl = place.ppl.filter(person => person.id !== id);
		});
	}

	const delItem = (id) => {
		console.log("delete item: ", id);
		data.value.cards.normal = data.value.cards.normal.filter(item => item.id !== id);
	}

	const delSpecialItem = (id) => {
		console.log("delete special item: ", id);

		data.value.cards.special = data.value.cards.special.filter(item => item.id !== id);
	}

	const isPlaceValid = (id) => {
		// check if id >= a && <= p
		
		var correct = "ABCDEFGHIJKLMNOP";
		id = id.toUpperCase();
		
		for (var i = 0; i < id.length; i++) {
			if (correct.indexOf(id[i]) === -1) {
				Toast.info("Place id is not valid!");
				return false;
			}
		}
		return true;
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

	const isValidCard = (id) => {
		if (id >= 0 && id <= 74) {
			return true;
		}
		Toast.info("Card id is not valid!");
		return false;
	}

	const isValidSpecialCard = (id) => {
		if (id >= 0 && id <= 74) {
			return true;
		}
		Toast.info("Card id is not valid!");
		return false;
	}

	const addNewCard = () => {
		var id = prompt("Enter card id");

		if (isValidCard(id)) {
			data.value.cards.normal.push({
				id: id,
			});
		}
	}

	const addNewSpecialCard = () => {
		var id = prompt("Enter card id");

		if (isValidSpecialCard(id)) {
			data.value.cards.special.push({
				id: id,
			});
		}
	}

	const showModal = ref(false);
	const modalOption = ref(0);

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
		<svg @click="showModal = true" xmlns="http://www.w3.org/2000/svg" class="fixed top-28 right-9 h-10 w-10 hover:text-blue-400 hover:underline hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
		</svg>

		<!-- MODAL WITH SPECIAL CARDS -->
		<vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
      <button class="modal__close" @click="showModal = false">
        <mdi-close></mdi-close>
      </button>
      <span class="modal__title">Cards</span>
      <div class="modal__content">
				
				<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
					<li class="mr-2">
						<a @click="modalOption = 0" href="#" aria-current="page" :class="modalOption == 0 ? 'inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500' : 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300600'">Items cards</a>
					</li>
					<li class="mr-2">
						<a @click="modalOption = 1" href="#" aria-current="page" :class="modalOption == 1 ? 'inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500' : 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300600'">Special items cards</a>
					</li>
				</ul>

				<!-- ITEMS CARDS -->
				<div v-if="modalOption == 0">
					<div class="grid grid-cols-5 space-x-3 space-y-3">
						<div v-for = "item in data.cards.normal" :key="item.id">
							<Item @delItem="delItem" :item="item"/>
						</div>
					</div>
						
					<!-- ADD NEW BUTTON -->
					<div class="flex justify-center mt-2">
						<button @click="addNewCard()" type="button" class="text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-300 dark:text-green-300 dark:hover:text-white dark:hover:bg-green-400 dark:focus:ring-green-900">Add new card</button>
					</div>

				</div>

				<!-- SPECIAL CARDS -->
				<div v-if="modalOption == 1">
					<div class="grid grid-cols-5 space-x-3 space-y-3">
						<div v-for = "item in data.cards.special" :key="item.id">
							<SpecialItem @delSpecialItem="delSpecialItem" :item="item"/>
						</div>
					</div>
						
					<!-- ADD NEW BUTTON -->
					<div class="flex justify-center mt-2">
						<button @click="addNewSpecialCard()" type="button" class="text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-300 dark:text-green-300 dark:hover:text-white dark:hover:bg-green-400 dark:focus:ring-green-900">Add new card</button>
					</div>

				</div>

      </div>
    </vue-final-modal>
	</div>
</template>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
	color: black;
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.modal__content{
	color: black;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>