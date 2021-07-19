<template>
    <div style="width: 100%; heigth: 400px;">
        <producto-detail />
    </div>
</template>

<script>

import ProductoDetail from '../../components/productos/ProductosDetail.vue'

export default {
  name: 'ProductosDetailPage',
  components: {
    ProductoDetail
  }
}
</script>

<style lang="scss" scoped>

</style>