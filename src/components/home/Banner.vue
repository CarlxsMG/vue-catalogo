<template>
    <div class="banner">
        <img src="../../assets/banner.png" class="banner__img">

        <h1 class="banner__title">Bienvenido a mi tienda de practicas</h1>

        <div class="banner__copy">
            <p class="banner__copy__text">Es basicamente un catalogo</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style lang="scss" scoped>
    .banner {
        border: 1px solid red;
        text-align: center;

        &__img {
            width: 100%;
            height: 200px;
            @include desde($mediumScreen) {
                height: 400px;
            }
        }

        &__title {
            font-family: $fontTitulo;
            color: $colorFirst;
        }

        &__copy {
            padding: 1em;
            background: $colorThird;

            &__text {
                font-size: 12px;
                font-family: $fontTextos;
        }
        }
    }
</style>