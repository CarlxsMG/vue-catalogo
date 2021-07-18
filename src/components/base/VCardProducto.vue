<template>
    <div class="producto">
        <img :src="image" class="producto__img">
        <br>
        <a class="producto__name">{{ name }}</a>
        <p class="producto__price">{{ price }}</p>
    </div>
</template>

<script>
export default {
  name: 'VCardProducto',
  props: {
      image: String,
      name: String,
      price: Number
  }
}   
</script>

<style lang="scss" scoped>
    .producto {
        border: 1px solid red;
        margin: 5px;
        background: $colorWhite;
        min-width: 300px;
        max-width: 300px;

        &__img {
            width: 100%;
            height: 100px;
        }

        &__name {
            font-family: $fontSubtitulo;
            color: $colorThird;
            display: block;
            text-decoration: none;
            padding-left: 10px;
            padding-bottom: 10px;
            text-transform: capitalize;
        }

        &__price {
            font-size: 20x;
            font-weight: bold;
            padding-left: 10px;
            margin-bottom: 10px;
            color: $colorSecond;
        }
    }
</style>
