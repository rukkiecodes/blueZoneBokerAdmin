<template>
  <v-container class="d-flex flex-column align-center justify-start">
    <v-card
      flat
      width="500"
      max-width="100%"
      :key="trader?.id"
      class="rounded-lg mb-4"
      color="indigo-lighten-5"
      v-for="trader in allTradeList"
      :disabled="trader?.isDeleted"
    >
      <v-card-text class="d-flex justify-space-between align-center">
        <div class="d-flex">
          <v-avatar size="60">
            <v-img
              cover
              :src="
                trader?.image != undefined
                  ? trader?.image
                  : 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
              "
              :alt="trader?.name"
            />
          </v-avatar>
          <div class="d-flex flex-column align-start justify-start">
            <span class="ml-4 text-h6">{{ trader?.name }}</span>
            <span class="ml-4 text-body-1 mt-n1"
              >EURUSD, <span class="text-red">{{ trader?.rate }}</span></span
            >
            <span class="ml-4 text-body-1 mt-3"
              >{{ trader?.losses }} <i class="las la-arrow-right"></i>
              {{ trader?.wins }}</span
            >
          </div>
        </div>

        <v-btn
          @click="openDialog(trader)"
          class="bg-indigo text-capitalize"
          flat
        >
          View
        </v-btn>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" width="400" persistent>
      <v-card>
        <v-card-text class="text-center">
          <v-avatar size="100">
            <v-img
              cover
              :src="
                activeDialog?.image != undefined
                  ? activeDialog?.image
                  : 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
              "
              :alt="activeDialog?.name"
            />
          </v-avatar>
        </v-card-text>
        <v-card-text>
          <v-select
            label="BUY/SELL"
            v-model="buySell"
            density="compact"
            variant="outlined"
            :items="['BUY', 'SELL']"
          />
          <v-select
            density="compact"
            variant="outlined"
            label="PROFIT/LOSS"
            v-model="profitLoss"
            :items="['PROFIT', 'LOSS']"
          />
          <v-text-field
            label="From"
            type="number"
            v-model="from"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            label="To"
            v-model="to"
            type="number"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            clearable
            label="Currency"
            v-model="currency"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            clearable
            type="number"
            v-model="amount"
            density="compact"
            variant="outlined"
            label="Enter Amount"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="text-capitalize bg-grey-darken-4"
            style="flex: 1"
            @click="dialog = false"
            >Close</v-btn
          >
          <v-btn
            style="flex: 1"
            :loading="loading"
            @click="updateTrader"
            class="text-capitalize bg-indigo"
            >Update</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { db } from "@/plugins/firebase";
import { doc, updateDoc } from "@firebase/firestore";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data: () => ({
    dialog: false,
    activeDialog: null,
    loading: false,
    // credentials
    buySell: null,
    profitLoss: null,
    from: null,
    to: null,
    currency: null,
    amount: null,
  }),

  methods: {
    openDialog(trader) {
      this.activeDialog = trader;
      this.dialog = true;
    },

    updateTrader() {
      this.loading = true;
      updateDoc(doc(db, "copyTrades", this.activeDialog.id), {
        buySell: this.buySell,
        profitLoss: this.profitLoss,
        from: this.from,
        to: this.to,
        currency: this.currency,
        amount: this.amount,
      });

      this.loading = false;
      this.dialog = false;
      this.snackbar.active = true;
      this.snackbar.text = "Trader Updated Successfully";
      this.snackbar.color = "success";
    },
  },

  computed: {
    ...mapGetters(["allTradeList"]),

    ...mapState(["snackbar"]),
  },
};
</script>

<style>
</style>