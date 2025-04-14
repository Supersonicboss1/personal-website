<template>
  <div
      @mouseover="showUsername = true; showUsernameDelayed = true"
      @mouseleave="setShowUsernameAfterDelay"
  >
    <a
      
      :href="link"
      target="_blank"
      class="flex items-center justify-center bg-[#232323] hover:bg-[#464646] rounded-md p-2 px-5 m-1 transition-all duration-300 w-14"
      :class="{ 'w-max': showUsernameDelayed, 'pointer-events-none': !link }"
    >
      <div class="flex items-center">
        <img
          v-if="typeof icon === 'string'"
          :src="icon"
          alt="Icon"
          class="flex w-4 translate-y-[2px] fill-color"
        />
        <span v-else>{{ icon }}</span>
        <span 
          class="text-gray-300 font-semibold overflow-hidden transition-all duration-300 whitespace-nowrap"
          :class="{ 'ml-2 max-w-[150px]': showUsername, 'max-w-0 ml-0': !showUsername }"
        >{{ name }}</span>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import type { VueElement } from 'vue'; 

const props = defineProps<{
  name: string;
  icon: VueElement | string;
  link?: string;
  color?: string; // hex color
}>();
const showUsername = ref(false);
const showUsernameDelayed = ref(false);
function setShowUsernameAfterDelay() {
  showUsername.value = false;
  setTimeout(() => {
    showUsernameDelayed.value = false;
  }, 300);
}
</script>

<style>
.fill-color {
  fill: color !important;
}
</style>