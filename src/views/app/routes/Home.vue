<template>
  <v-container>
    <v-card class="rounded-xl px-0" color="indigo">
      <v-toolbar class="rounded-lg my-5 mx-5" color="indigo-darken-4">
        <v-toolbar-title>No of Users (0)</v-toolbar-title>

        <v-spacer />
        <v-btn icon class="bg-white" size="small">
          <i class="las la-sign-out-alt logout-icon"></i>
        </v-btn>
      </v-toolbar>
      <v-card-text class="px-0">
        <v-row justify="start">
          <v-col
            v-for="(card, i) in cards"
            :key="i"
            cols="6"
            sm="3"
            md="2"
            class="d-flex flex-column align-center"
          >
            <v-card
              :color="card.color"
              :to="card.to"
              theme="dark"
              class="rounded-lg d-flex justify-center align-center"
              width="60"
              height="60"
              flat
            >
              <v-card-text class="d-flex justify-center align-center">
                <i :class="card.icon" class="home-icon"></i>
              </v-card-text>
            </v-card>
            <span class="text-caption font-weight-regular mt-2">{{
              card.title
            }}</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        color: "#FF396F",
        icon: "las la-star-half-alt",
        title: "Copy Trade",
        to: "/app/copytrade",
      },
      {
        color: "#26A7CB ",
        icon: "las la-arrow-right",
        title: "Withdraw Request",
        to: "/app/withdrawRequest",
      },
      {
        color: "#1DCC70",
        icon: "las la-credit-card",
        title: "Pending Transactions",
      },
      {
        color: "#FFB400",
        icon: "las la-exchange-alt",
        title: "All Transactions",
        to: "/app/transactions",
      },
      {
        color: "#1DCC70",
        icon: "las la-users",
        title: "Users",
      },
      {
        color: "#26A7CB ",
        icon: "las la-arrow-right",
        title: "Trade List",
      },
      {
        color: "#1DCC70",
        icon: "las la-credit-card",
        title: "Trade Monitor",
      },
    ],
  }),
};
</script>

<style scoped>
.home-icon {
  font-size: 2rem;
}

.logout-icon {
  font-size: 1.5em;
}
</style>