<template>
  <h1 class="text-5xl text-center font-bold mt-3">
    Contact me!
  </h1>
  <div class="mt-5 p-1 w-full flex justify-center">
    <div class="outline outline-[#464646] rounded-md w-min bg-[#00000043] p-4">
    <label for="email" class="block ">Email:</label>
    <a href="mailto:leodalgado@gmail.com" class="font-mono p-1">leodalgado@gmail.com<span class="animate-blink -translate-x-[2px] absolute">|</span></a>
  </div></div>
</template>

<script lang="ts" setup>

</script>

<style>
 .animate-blink {
  animation: cursor-blink 1.5s steps(2) infinite;
 }
 @keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}

</style>