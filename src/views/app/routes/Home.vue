<template>
  <v-container>
    <v-row justify="start">
      <v-col
        v-for="(card, i) in cards"
        :key="i"
        cols="6"
        sm="3"
        class="d-flex flex-column align-center"
      >
        <v-card
          :color="card.color"
          :to="card.to"
          theme="dark"
          class="rounded-xl d-flex justify-center align-center"
          width="80"
          height="80"
          flat
        >
          <v-card-text class="d-flex justify-center align-center">
            <i :class="card.icon" class="home-icon"></i>
          </v-card-text>
        </v-card>
        <span class="text-body-2 font-weight-bold mt-2">Copy Trade</span>
      </v-col>
    </v-row>
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
</style>