<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>VueFire Todo</h2>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <ToDoList />
    </v-content>
    <v-main> </v-main>
  </v-app>
</template>

<script>
import ToDoList from './components/ToDoList.vue';
export default {
  name: "App",

  components: {
    ToDoList
  },

  data: () => ({
    //
  }),
};
</script>
