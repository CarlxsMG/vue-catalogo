<template>
    <div class="grid-1x1">        
        <div v-for="n in 8" :key="n">
            <v-card-producto image=".." name="papapa" :price="parseFloat('300')" />
        </div>
    </div>
</template>

<script>

import VCardProducto from '../base/VCardProducto.vue'

export default {
  name: 'ProductosPorCategoria',
  components: {
    VCardProducto
  }
}
</script>

<style lang="scss" scoped>

</style>