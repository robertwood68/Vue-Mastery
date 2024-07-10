<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService.js'
import EventCard from '@/components/EventCard.vue'

const props = defineProps(['page'])

const events = ref("")

const page = computed(() => props.page)

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(2, page.value)
      .then((response) => {
        events.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <router-link
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >
      Prev Page
    </router-link>

    <router-link
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page
    </router-link>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>