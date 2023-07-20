<script setup>
import { Icon } from "@iconify/vue";
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="absolute bg-opacity-40 w-full sm:w-1/2 md:w-1/3 top-0 right-0 flex px-8"
      >
        <Transition name="modal-inner">
          <div
            class="p-4 bg-white bg-opacity-80 self-start mt-16 max-w-screen-md rounded-lg"
          >
            <div class="flex flex-row gap-3 justify-end">
              <Icon
                icon="carbon:close-filled"
                color="red"
                width="21"
                height="21"
                @click="$emit('close-modal')"
              />
            </div>
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0.2;
}

.modal-inner-enter-active {
  transition: all 0.5s cubic-bezier(0.7, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.5s cubic-bezier(0.7, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
