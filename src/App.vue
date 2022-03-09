<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>

    <h1>Random Definition Generator</h1>

    <h2>from Urban Dictionary</h2>

  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #EEEEEE;
  font-family: 'Lora', serif;
}

header {
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  padding: 20px 0px;
}

h1 {
  font-size: 48px;
  line-height: 61px;
  text-align: center;
  color: #FFFFFF;
}

h2{
  font-size: 24px;
  line-height: 31px;
  color: #EFFF00;
}

</style>
