

<script setup>

import  MenuBar from '../components/MenuBar.vue'
import Footer from "../components/Footer.vue";

</script>

<template>

  <!-- HEADER -->

  <!-- HEADER ENDS -->
    <el-affix :offset="0.00001">
      <menu-bar/>
    </el-affix>

    <router-view />
    <Footer />


  <div>

  </div>


</template>


<style scoped>

</style>