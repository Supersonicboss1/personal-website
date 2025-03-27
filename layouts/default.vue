<script setup lang="ts">
import { LucideDot, LucidePlus } from 'lucide-vue-next';

const isSquare = ref(false)

</script>

<template>
    <html class="bg-[#1a1a1a] text-white scheme-dark transition-all duration-200 h-[100vh]" :class="{'background-crosses': isSquare, 'background-dots': !isSquare}">
    <header>
        <nav class=" text-white">
            <div class="container mx-auto flex justify-between items-center p-4">
                <div>
                    <UnderlinedNuxtLink text="Leo's Portfolio" link="/" class="text-xl font-bold"/>
                </div>
                <div class="flex items-center">
                    <UnderlinedNuxtLink text="About" link="/about"/>
                    <UnderlinedNuxtLink text="Projects" link="/projects" class="ml-4"/>
                    <UnderlinedNuxtLink text="Contact" link="/contact" class="ml-4"/>
                    <button aria-label="Switch background" v-on:click="isSquare = !isSquare" class="ml-4 cursor-pointer outline-1 rounded-md outline-[#494242] p-0.5 hover:outline-[#777070] transition-all">
                        <LucideDot v-if="isSquare == true"/>
                        <LucidePlus v-if="isSquare == false"/>
                    </button>
                </div>
            </div>
        </nav>
    </header>
    <div class="text-center">
        <slot/>
    </div>
    
</html>
</template>
