<template>
    <div>
        <nuxt-link
            :to="props.link"
            class="transition-all duration-300 text-white group hover:text-green-300"
        >
            <span
                class="bg-left-bottom bg-gradient-to-r from-green-600 to-green-600 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-700 ease-out"
            >
                {{ props.text }}
            </span>
        </nuxt-link>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    text: string;
    link: string; // i.e. "/about"
}>();
</script>
