<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const previewCity = (searchResult) => {
  const [city, state] = searchResult.place_name.split(",");
  router.push({
    name: "City",
    params: { state: state.replaceAll(" ", ""), city: city },
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    },
  });
};
const mapboxAPIKey =
  "pk.eyJ1IjoiYWxtaXJhbSIsImEiOiJja2JnajV1cWYxNjNiMnBtcjB5eGVkdHdlIn0.uYh62cjQkDZ89Z3C1QbA0A";
const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxResult = ref(null);
const searchError = ref(null);
const getSearchResult = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        mapboxResult.value = result.data.features;
      } catch {
        searchError.value = true;
      }
      return;
    }
    mapboxResult.value = null;
  }, 300);
};
</script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        @input="getSearchResult"
        v-model="searchQuery"
        placeholder="Search for a city"
        class="font-jakarta text-sm py-2 px-1 w-full bg-transparent border-b focus:border-linear-primary-black focus:outline-none focus:shadow-[0px_1px_0_#0B1223]"
      />
      <ul
        class="absolute text-gray-100 w-full shadow-md rounded-lg py-4 px-6 top-[66px]"
        v-if="mapboxResult"
      >
        <p v-if="searchError">Sorry, something went wrong, please try again</p>
        <p v-if="!searchError && mapboxResult.length === 0">No result match</p>
        <template v-else>
          <li
            v-for="searchResult in mapboxResult"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>
