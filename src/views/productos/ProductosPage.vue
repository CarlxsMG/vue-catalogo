<template>
    <div class="grid-10x10">
        <div class="products">
            <h1 class="products__title">Lista de productos</h1>
            <productos-populares />
        </div>
    </div>
</template>

<script>
import ProductosPopulares from '../../components/productos/ProductosPopulares.vue'

export default {
  components: { ProductosPopulares },
  name: 'ProductosPage'
}
</script>

<style lang="scss" scoped>
    .products {
        grid-row: 1;
        grid-column: 1 / -1;
    }
</style>