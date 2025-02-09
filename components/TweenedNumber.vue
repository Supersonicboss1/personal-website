<template>
    {{ Math.floor(displayValue) }}
</template>

<script lang="ts" setup>
const props = defineProps<{
    progressValue: number;
    animationDuration: number;
}>();
const displayValue = ref(0);
function tweenToFinalValue(finalValue: number, duration: number) { //TODO: Allow different easing functions (who tf knows how to do that)
    const startValue = displayValue.value;
    let startTime: number;
    function update() {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= duration * 1000) {
            displayValue.value = finalValue;
            return;
        }
        const progress = elapsedTime / (duration * 1000);
        displayValue.value = startValue + (finalValue - startValue) * progress;
        requestAnimationFrame(update);
    }
    startTime = Date.now();
    update();
}
watch(
    () => props.progressValue,
    (newValue) => {
        tweenToFinalValue(newValue, props.animationDuration);
    }
);
</script>