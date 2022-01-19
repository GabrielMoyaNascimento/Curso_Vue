<template>
  <v-app>
    <Menu />

    <Toolbar />

    <v-content>
      <Carrosel />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/template/Footer.vue";
import Carrosel from "@/components/widgets/Carrosel.vue";
import Toolbar from "@/components/template/Toolbar.vue";
import Menu from "@/components/template/Menu.vue";

export default {
  components: {
    Footer,
    Carrosel,
    Toolbar,
    Menu,
  },
};
</script>
