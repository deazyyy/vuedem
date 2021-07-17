<template>
<h2>Orders</h2>
  <div v-for="n in 10" :key="n">
    <OrderComp :num="n" />
  </div>
</template>

<script>
// @ is an alias to /src
import OrderComp from "@/components/Orderc.vue";
export default {
  name: "Order",
  components: {
    OrderComp,
  },
};
</script>