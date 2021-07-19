<template>
    <div class="producto">
        <img class="producto__img" :src="producto.main_image" alt="">
        <div class="producto__imgs" style="display:flex;">
            <img class="producto__imgs__img" :src="producto.second_image" alt="">
            <img class="producto__imgs__img" :src="producto.third_image" alt="">
        </div>
        <div>
            <h3 class="producto__title">{{ producto.name }}</h3>
            <p class="producto__categorias">
                <span 
                    v-for="categoria in producto.category"
                    :key="categoria.id" 
                    class="producto__categorias__categoria">{{ categoria.name }}</span>
            </p>
            <p class="producto__colores">
                <span 
                class="producto__colores__color"
                v-for="color in producto.colors"
                :key="color.id"
                :style="{ background: color.value }">
                    
                </span>
            </p>
            <p class="producto__price">
                $ {{ producto.price }}
            </p>
            <div>
                <p class="producto__description">
                {{ producto.description }}    
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import apiProductos from '../../api/productos.js'

export default {
  name: 'ProductoDetail',
  data () {
    return {
      producto: [] 
    }
  },
  methods: {
    recuperarProducto: function () {
      apiProductos.recuperarProductos(this.$route.params.id).then(
        ( response ) => {
          this.producto = response.data
        }
      )
    }
  },
  beforeMount () {
    this.recuperarProducto()
  }
}
</script>

<style lang="scss" scoped>

</style>