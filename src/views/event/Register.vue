<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const { event } = defineProps(["event"])
const router = useRouter()
const GStore = inject('GStore')

const register = () => {
  // Call API
  // if registered then redirect to details
  GStore.flashMessage = `You are successfully registered for ${event.title}`
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({
    name: 'EventDetails'
  })
}
</script>

<template>
  <p>Register for event here</p>
  <button @click="register">Register Me!</button>
</template>