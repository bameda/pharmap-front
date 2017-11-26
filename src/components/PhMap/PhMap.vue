<template src='./PhMap.html'></template>
<style src='./PhMap.css'></style>

<script>
import Vue2Leaflet from 'vue2-leaflet'

export default {
  name: 'HfMap',
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker
  },
  data: () => ({
    zoom: 13,
    center: [47.413220, -1.219482],
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  })
}
</script>
