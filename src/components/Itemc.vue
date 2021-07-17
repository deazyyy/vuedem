<template>
  <div class="item">
    <h3>Item {{ num }}</h3>
    <div>Scan</div>
    <div>Scan</div>
    <input />
  </div>
</template>

<script>
export default {
  name: "ItemComp",
  props: {
    num: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  padding: 10px 20px;
  background: darkgray;
  align-items: center;
  display: flex;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
}
.item h3 {
  margin: 0;
  margin-right: 40px;
}
.item div {
  margin: 0 6px;
}
.item input {
  margin-left: 10px;
}
</style>
