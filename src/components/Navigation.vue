<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import Modal from "../components/Modal.vue";
import { ref } from "vue";

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<template>
  <header
    class="sticky top-0 bg-gradient-to-l from-linear-primary-black to-linear-secondary-black shadow-lg"
  >
    <nav class="container flex flex-col sm:flex-row gap-4 text-white py-4">
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3">
        <img
          src="@/assets/icons/icon.svg"
          alt="icon "
          width="32"
          @click="toggleModal"
        />
        <p class="font-poppins">The Open Weather</p>
      </RouterLink>
      <div class="flex flex-row gap-3 flex-1 justify-end">
        <Icon
          class="hover:text-gray-300 duration-150 cursor-pointer"
          icon="fluent:info-24-regular"
          color="white"
          width="21"
          height="21"
          @click="toggleModal"
        />
      </div>
      <Modal :modalActive="modalActive" @close-modal="toggleModal">
        <div class="text-gray-700 text-sm">
          <h1 class="text-md mb-1 font-semibold">About</h1>
          <p class="mb-4">
            We provide for each point on the globe, we provide historical,
            current and forecasted weather data
          </p>
        </div>
      </Modal>
    </nav>
  </header>
</template>
