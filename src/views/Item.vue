<template>
  <h2>Order {{ $route.params.id }}</h2>
  <div v-for="n in 5" :key="n">
    <ItemComp :num="n" />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemComp from "@/components/Itemc.vue";
export default {
  name: "Item",
  components: {
    ItemComp,
  },
  props: {
    itemno: Number,
  },
};
</script>