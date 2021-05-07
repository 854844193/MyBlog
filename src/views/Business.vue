<template>
  <div class="business">
    <HeaderNav />
    <h1>This is a page of business!!!</h1>
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav";
export default {
  components: {
    HeaderNav,
  },
};
</script>

<style scoped>
.business {
  background-color: wheat;
  width: 100%;
  height: 100vh;
}
</style>