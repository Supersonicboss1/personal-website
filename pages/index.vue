<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ProgressIndicator, ProgressRoot } from "radix-vue";

const progressValue = ref(10);
const tweened = reactive({
    number: 0,
});
function tweenToFinalValue(finalValue: number, duration: number) {
    const startValue = tweened.number;
    let startTime: number;
    function update() {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= duration * 1000) {
            tweened.number = finalValue;
            return;
        }
        const progress = elapsedTime / (duration * 1000);
        tweened.number = startValue + (finalValue - startValue) * progress;
        requestAnimationFrame(update);
    }
    startTime = Date.now();
    update();
}
function getColourBasedOnProgress(progress: number) {
    //Red (0 to 50): Transition from Red (255, 0, 0) to Yellow (255, 255, 0).
    //Yellow (50 to 100): Transition from Yellow (255, 255, 0) to Green (0, 255, 0).
}

watch(
    () => progressValue.value,
    (newValue) => {
        tweenToFinalValue(newValue, 0.65);
    }
);
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
            {{ Math.floor(tweened.number) }}% complete
        </h1>
    </body>
</template>
