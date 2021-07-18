<template>
    <div>
        <ul class="lista">
            <li class="lista__item" v-for="categoria in listaCategorias" :key="categoria.id">
                <a class="lista__item__link" href="">{{ categoria.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import apiCategoria from '../../api/categorias.js'

export default {
  name: 'TheListaCategorias',
  data () {
    return {
        listaCategorias: []
    }
  },
  methods: {
    CargarCategorias: function () {
        apiCategoria.listarCategorias().then(
            (response) => {
                this.listaCategorias = response.data
            }
        )
    }
  },
  beforeMount () {
    this.CargarCategorias()
  }
}   
</script>

<style lang="scss" scoped>
    .lista {
        list-style: none;
        padding: 0;
        margin: 0;

        &__item {
            display: block;

            &__link {
                display: block;
                padding: 10px;
                text-decoration: none;
                color: $colorSecond;
                font-family: $fontSubtitulo;

                &:hover {
                    background: $colorWhite;
                }
            }
        }
    }
</style>
