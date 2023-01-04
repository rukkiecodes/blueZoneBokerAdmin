<template>
  <v-container>
    <v-row justify="start">
      <v-col
        v-for="user in allUsers"
        :key="user.id"
        cols="12"
        sm="6"
        md="4"
        lg="4"
      >
        <v-card class="rounded-lg">
          <v-card height="200" class="pa-0 ma-0" flat>
            <v-img :src="user?.avatar" cover />
          </v-card>

          <v-card-title>{{ user?.name }}</v-card-title>

          <v-card-title class="d-flex justify-space-between align-center">
            <span class="text-body-2 font-weight-bold">ID</span>
            <span class="text-body-2">{{ user?.id }}</span>
          </v-card-title>
          <v-card-title class="d-flex justify-space-between align-center pt-0">
            <span class="text-body-2 font-weight-bold">Name</span>
            <span class="text-body-2">{{ user?.name }}</span>
          </v-card-title>
          <v-card-title class="d-flex justify-space-between align-center pt-0">
            <span class="text-body-2 font-weight-bold">Email</span>
            <span class="text-body-2">{{ user?.email }}</span>
          </v-card-title>
          <v-card-title class="d-flex justify-space-between align-center pt-0">
            <span class="text-body-2 font-weight-bold">Phone</span>
            <span class="text-body-2">{{ user?.phone }}</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allUsers"]),
  },
};
</script>

<style>
</style>