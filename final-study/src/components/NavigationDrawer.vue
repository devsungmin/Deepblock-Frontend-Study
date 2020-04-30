<template>
  <v-content>
    <v-navigation-drawer
      v-model="drawer"
      :right="right"
      color="teal"
      app
      clipped
    >
      <v-list rounded nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="../image/iu.jpg" />
          </v-list-item-avatar>

          <v-list-item-content v-for="user in users" :key="user.name">
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.job }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />

        <v-list-item v-for="item in items" :key="item.title" :href="item.lnk">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-switch v-model="right" label="Right" />
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app clipped-left clipped-right color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Deep Block</v-toolbar-title>
      <v-spacer />
      <v-btn icon href="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon href="/dataset">
        <v-icon>mdi-database</v-icon>
      </v-btn>
      <v-btn icon href="/board">
        <v-icon>mdi-console</v-icon>
      </v-btn>
      <v-btn icon href="/settings">
        <v-icon>mdi-cog</v-icon>
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
      users: [{ name: "Sungmin", job: "Dobby" }],
      items: [
        { icon: "mdi-home", title: "Home", lnk: "/" },
        { icon: "mdi-console", title: "Board", lnk: "/board" },
      ],
      right: false,
      miniVariant: true
    };
  },
};
</script>

<style scoped></style>
