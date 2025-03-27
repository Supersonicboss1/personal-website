<template>
    {{ Math.floor(displayValue) }}
</template>

<script lang="ts" setup>
const props = defineProps<{
    value: number;
    animationDuration: number;
}>();
const displayValue = ref(0);
function tweenToFinalValue(finalValue: number, duration: number) {
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
    () => props.value,
    (newValue) => {
        tweenToFinalValue(newValue, props.animationDuration);
    }
);
</script>