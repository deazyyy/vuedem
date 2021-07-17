<template>
  <router-link :to="'/item/' + num" class="order" :itemno="num">
    Order {{ num }}</router-link
  >
</template>

<script>
export default {
  name: "OrderComp",
  props: {
    num: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order {
  padding: 10px 20px;
  background: gray;
  color: #fff;
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
  text-decoration: none;
}
</style>
