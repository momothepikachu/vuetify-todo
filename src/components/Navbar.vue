<template>
  <nav>
    <v-snackbar v-model="snackbar" color="success" :timeout="6000" top>
      You have successfully added a new project.
      <v-btn dark text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-toolbar flat>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Momo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            Menu
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            router
            link
            :to="link.route"
            v-for="link in items"
            :key="link.title"
          >
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-layout column align="center">
        <v-flex class="text-center mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="avatar" />
          </v-avatar>
          <p class="grey--text subheading mt-1">
            This is an avatar
          </p>
        </v-flex>
        <v-flex>
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list flat nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  components: {
    Popup
  },
  data: () => ({
    drawer: false,
    snackbar: false,
    items: [
      { title: "Dashboard", icon: "dashboard", route: "/" },
      { title: "Projects", icon: "folder", route: "/projects" },
      { title: "Team", icon: "person", route: "/team" }
    ]
  })
};
</script>
