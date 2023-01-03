<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer.drawer" color="indigo">
      <v-list density="compact" class="py-0">
        <v-list-item
          :key="i"
          class="mb-2"
          :value="item"
          :to="item.to"
          active-color="white"
          v-for="(item, i) in items"
        >
          <template v-slot:prepend>
            <i :class="item.icon" class="icon"></i>
          </template>

          <v-list-item-title
            v-text="item.text"
            class="ml-4 mt-2"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="white" class="px-4" flat>
      <v-app-bar-nav-icon
        @click="drawer.drawer = !drawer.drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h5"
        >Bluezon <span class="text-indigo">Admin</span></v-toolbar-title
      >
      <v-spacer />
      <v-chip color="indigo" size="large">
        <v-avatar>
          <v-icon>mdi-account</v-icon>
        </v-avatar>
        {{ getProfile.name }}
      </v-chip>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    items: [
      { text: "Dashboard", icon: "las la-chart-pie", to: "/app" },
      {
        text: "Copy Trader",
        icon: "las la-exchange-alt",
        to: "/app/copytrade",
      },
    ],
  }),

  mounted() {
    this.getUserProfile();
  },

  methods: {
    ...mapActions(["getUserProfile"]),
  },

  computed: {
    ...mapState(["getProfile", "drawer"]),
  },
};
</script>

<style scoped>
.icon {
  font-size: 1.5rem;
}
</style>