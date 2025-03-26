<template>
  <div>
    <ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/asd">Broken link</a></li>
    </ul>

    <div>
      <component :is="currentView"></component>
    </div>
  </div>

</template>


<script setup>
import { computed, ref } from 'vue';
import About from './Pages/About.vue';
import Home from './Pages/Home.vue';
import NotFound from './Pages/NotFound.vue';


const routes = {
  '/':Home,
  '/about':About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashChange', () => {
  currentPath.value =window.location.hash
});

const currentView = computed(() => {
  return routes [currentPath.value.slice(1) || '/'] || NotFound;
});

</script>