<script setup>
import { defineAsyncComponent, Suspense } from "vue";
const CityView = defineAsyncComponent(() =>
  import("../components/CityView.vue")
);
</script>

<template>
  <div>
    <Suspense>
      <CityView />
    </Suspense>
  </div>
</template>
