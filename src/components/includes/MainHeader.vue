<template>
    <div class="header">
        <a href="" class="header__logo">Mi catalogo</a>

        <ul class="header__menu">
            <li class="header__menu__item">
                <router-link :to="{ name: 'productos' }" class="header__menu__item__link">Productos</router-link>
            </li>
            <li class="header__menu__item">
                <router-link :to="{ name: 'categorias', params: {'category': ' '} }" class="header__menu__item__link">Categorias</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "MainHeader"
}
</script>

<style lang="scss" scoped>
    .header {
        background: $colorFirst;
        display: flex;
        justify-content: center;
        align-items: center;

        @include desde ($mediumScreen) {
            justify-content: space-between;
        }

        @include desde ($largeScreen) {
            justify-content: space-between;
            padding: 1em;
        }

        &__logo {
            color: $colorSecond;
            font-family: $fontSubtitulo;
            font-size: 24px;
            text-decoration: none;

            @include desde ($largeScreen) {
                font-size: 30px;
            }
        }

        &__menu {
            display: none;

            @include desde ($mediumScreen) {
                display: flex;
                list-style: none;
                padding: 0px;
                margin: 0px;

                &__item {
                    margin: 5px;

                    &__link {
                        display: block;
                        padding: 5px 10px;
                        text-decoration: none;
                        color: $colorSecond;
                        font-family: $fontSubtitulo;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>