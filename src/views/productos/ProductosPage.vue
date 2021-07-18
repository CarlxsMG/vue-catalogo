<template>
    <div class="grid-10x10">
        <div class="products grid-2x2">
            <h1 class="products__title">Lista de productos</h1>
            <productos-populares class="products__popular" />
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

        &__title {
            font-family: $fontTitulo;
            font-size: 20px;
            text-align: center;
            grid-row: 1 / 2;
            grid-column: 1 / -1;
        }

        &__popular {
            grid-row: 2 / 10;
            grid-column: 1 / -1;
        }
    }
</style>