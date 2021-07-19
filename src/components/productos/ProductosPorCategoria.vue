<template>
    <div class="grid-1x1">        
        <div v-for="producto in productos" :key="producto.id">
            <v-card-producto 
              :image="producto.main_image" 
              :name="producto.name" 
              :price="parseFloat(producto.price)" 
              :ruta="{ name: 'detalle-producto', params: {id: producto.id } }" />
        </div>
    </div>
</template>

<script>

import apiProductos from '../../api/productos.js'
import VCardProducto from '../base/VCardProducto.vue'

export default {
  name: 'ProductosPorCategoria',
  components: {
    VCardProducto
  },
  data () {
    return {
      productos: []
    }
  },
  watch: {
    '$route.params.category': function () {
      this.filtrarProductos()
    }
  },
  methods: {
    filtrarProductos: function () {

      let filtros = 'category=' + this.$route.params.category

      apiProductos.filtrarProductos(filtros).then(
        (response) => {
          this.productos = response.data.results
        }
      )
    }
  },
  beforeMount () {
    this.filtrarProductos()
  }
}
</script>

<style lang="scss" scoped>

</style>