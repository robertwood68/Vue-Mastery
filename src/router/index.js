import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import AboutView from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventList,
      props: route => ({ page: parseInt(route.query.page) || 1})
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: "",
          name: "EventDetails",
          component: EventDetails
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit
        }
      ]
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: to => {
        return { path: `/events/${to.params.afterEvent}` }
      }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    },
    {
      path: '/:catchAll(/*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
