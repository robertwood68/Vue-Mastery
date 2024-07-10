<script setup>
import { ref, onMounted, computed } from 'vue'
import EventService from '@/services/EventService.js'

// bring in props for api call
const props = defineProps(["id"])
const event = ref("")
const id = computed(() => props.id)

// call getEvent method in EventService with retrieved props to get event from api
onMounted(() => {
  // fetch event by id and set data for template
  EventService.getEvent(id.value)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }"
        >Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }"
        >Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }"
        >Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>