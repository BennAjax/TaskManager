<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div id="app-container">
      <router-view />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<style></style>
<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  components: { Footer, NavBar },
  beforeCreate: function() {
    this.$store.dispatch("authenticate");
  }
};
</script>
