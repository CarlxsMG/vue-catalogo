<template>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; grid">
        <div v-for="n in 12" :key="n">
            <v-card-producto image="" name="" :price="0" />
        </div>
    </div>
</template>

<script>
import VCardProducto from '../base/VCardProducto.vue'

export default {
  name: 'ProductosPopulares',
  components: {
      VCardProducto
  }
}   
</script>

<style lang="scss" scoped>
</style>