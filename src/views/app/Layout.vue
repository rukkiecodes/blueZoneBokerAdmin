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
            class="ml-4 mt-2 text-body-2 font-weight-regular"
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
      <v-chip color="indigo" size="large" class="pl-1">
        <v-avatar class="mr-2">
          <v-icon>mdi-account</v-icon>
        </v-avatar>
        Hello, {{ getProfile.name }}
      </v-chip>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import { useDisplay } from "vuetify";
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
      {
        text: "All Transactions",
        icon: "las la-exchange-alt",
        to: "/app/transactions",
      },
      {
        text: "Withdraw requests",
        icon: "las la-arrow-right",
        to: "/app/withdrawRequest",
      },
      {
        text: "Pending Transactions",
        icon: "las la-credit-card",
        to: "/app/pendingTransactions",
      },
    ],
  }),

  mounted() {
    this.getUserProfile();
    this.drawerVisibility();
  },

  methods: {
    ...mapActions(["getUserProfile"]),

    drawerVisibility() {
      switch (useDisplay().name.value) {
        case "xs":
          return (this.drawer.drawer = false);
        case "sm":
          return (this.drawer.drawer = false);
        case "md":
          return (this.drawer.drawer = false);
        case "lg":
          return (this.drawer.drawer = true);
        case "xl":
          return (this.drawer.drawer = true);
        case "xxl":
          return (this.drawer.drawer = true);
      }
    },
  },

  computed: {
    ...mapState(["getProfile", "drawer"]),
  },
};
</script>

<style scoped>
.icon {
  font-size: 1rem;
}
</style>