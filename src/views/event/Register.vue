<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(["event"])
const router = useRouter()
const register = () => {
  // if registration api call succeeds, push back to event details
  router.push({ name: 'EventDetails' })
}
</script>

<template>
  <p>Register for event here</p>
  <button @click="register">Register Me!</button>
</template>