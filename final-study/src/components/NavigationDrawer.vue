<template>
  <v-content>
    <v-navigation-drawer v-model="drawer" :expand-on-hover="expandOnHover" :mini-variant="miniVariant" :right="right" absolute>
      <v-list rounded nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="../image/iu.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>IU</v-list-item-title>
            <v-list-item-subtitle>가수</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider/>

        <v-list-item v-for="item in items" :key="item.title" :href="item.lnk">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
          <!--  각각의 리스트 하이퍼 링크 -->
          <a href="link"></a>
        </v-list-item>
      </v-list>
      <v-switch v-model="right" class="ma-2" label="right" />
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Deep Block</v-toolbar-title>
      <v-spacer />
      <v-btn icon href="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon href="/board">
        <v-icon>mdi-laptop</v-icon>
      </v-btn>
    </v-app-bar>
  </v-content>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", lnk: "/" },
        { title: "Board", lnk: "/board" },
      ],
      expandOnHover: true,
      miniVariant: true,
      right: false
    };
  },
};
</script>

<style scoped></style>
