<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ProgressIndicator, ProgressRoot } from "radix-vue";
import TweenedNumber from "~/components/TweenedNumber.vue";

const progressValue = ref(10);

onMounted(() => {
    // Every 1 second, randomise the progress value
    setInterval(() => {
        // Technically you COULD get 100% progress, but the chances are extremely low (it would need to be exactly 100)
        progressValue.value = Math.floor(Math.random() * 100);
    }, 1000);
});
</script>

<template>
    <body class="bg-[#1a1a1a] text-white scheme-dark">
        <h1 class="text-5xl text-center mt-[20%]">Coming Soon™️</h1>
        <ProgressRoot
            v-model="progressValue"
            class="relative overflow-hidden bg-black rounded-full w-full sm:w-[300px] h-4 sm:h-5 mx-auto mt-8 -translate-x-6"
        >
            <ProgressIndicator
                class="rounded-full w-full h-full transition-all duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                :class="{
                    'bg-[#f1c40f]': progressValue < 70 && progressValue >= 30,
                    'bg-[#2ecc71]': progressValue >= 70,
                    'bg-[#e74c3c]': progressValue < 30,
                }"
                :style="`transform: translateX(-${100 - progressValue}%)`"
            />
        </ProgressRoot>
        <h1 class="text-3xl text-center mt-5 -translate-x-6">
            <TweenedNumber :progress-value="progressValue" :animation-duration="0.65"/>% complete
        </h1>
    </body>
</template>
