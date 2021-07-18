<template>
    <div class='grid-2x2 categoria'>
        <div class="categoria__filters">
            <the-lista-categorias />
        </div>
        <div class="categoria__colors">Colors</div>
        <div class="categoria__content">Contenido</div>
    </div>
</template>

<script>
    import TheListaCategorias from '../../components/categorias/TheListarCategorias.vue'

    export default {
      name: 'CategoriasPage',
      components: {
        TheListaCategorias
      }
    }
</script>

<style lang="scss" scoped>
    .categoria{
        &__filters {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
        }

        &__colors {
            grid-row: 1;
            grid-column: 2 / -1;
        }

        &__content {
            grid-row: 2;
            grid-column: 2 / -1;
        }
    }
</style>
