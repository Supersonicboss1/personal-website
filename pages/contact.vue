<template>
  <h1 class="text-5xl text-center font-bold mt-3">
    Contact me!
  </h1>
  <div class="mt-5 p-1 w-full flex justify-center">
    <div class="outline outline-[#464646] rounded-md w-[40%] bg-[#1c1c1c43] p-4">
    <label for="email" class="block text-gray-500 font-bold pl-3">Email</label>
    <a href="mailto:leodalgado@gmail.com" class="font-mono px-2 p-1 m-1 hover:bg-[#232323] rounded-md transition-all duration-300">leodalgado@gmail.com<span class="animate-blink -translate-x-[2px] absolute">|</span></a>
    <div class="flex grid-cols-10 gap-4 mt-5">
  <SocialPill name="GitHub" icon="github.svg" link="https://github.com/Supersonicboss1" color="#ffffff"/>
  <SocialPill name="Bluesky" icon="bluesky.svg" link="https://bsky.app/profile/supersonicboss1.co.uk" invert-color/>
  <SocialPill name="Supersonicboss1" icon="discord.svg" link="" invert-color/>
</div>
  </div>
  </div>
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