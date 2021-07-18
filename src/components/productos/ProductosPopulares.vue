<template>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; grid">
        <div v-for="producto in productos" :key="producto.id">
            <v-card-producto :image="producto.main_image" :name="producto.name" :price="parseFloat(producto.price)" />
        </div>
    </div>
</template>

<script>
import apiProductos from '../../api/productos.js'

import VCardProducto from '../base/VCardProducto.vue'

export default {
  name: 'ProductosPopulares',
  components: {
    VCardProducto
  },
  data () {
    return {
      productos: []
    }
  },
  methods: {
    cargarProductos: function () {
      apiProductos.productosPopulares().then(
        (response) => {
            this.productos = response.data.results
        }
      )
    }
  },
  mounted () {
    this.cargarProductos()
  }
}   
</script>

<style lang="scss" scoped>
</style>
