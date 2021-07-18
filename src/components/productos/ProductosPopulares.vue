<template>
    <div class="grid-10x10">
        <div v-for="n in 12" :key="n">
            <v-card-producto />
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