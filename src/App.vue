<script setup>
import { inject } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const GStore = inject('GStore')
</script>

<template>
  <div id="layout">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <div id="nav">
      <RouterLink :to="{ name: 'EventList' }">Events</RouterLink> |
      <RouterLink :to="{ name: 'About' }">About</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style>
@keyframes yellowFade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowFade;
  animation-duration: 3s;
}
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
