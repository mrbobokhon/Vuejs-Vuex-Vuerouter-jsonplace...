<template>
  <div v-for="user in users" :key="user.id">
    <h1 v-if="user.id == id">
      Name:{{ user.name }} Username:{{ user.username }} Email:{{ user.email }}
    </h1>
    <!-- <h1 v-if="$route.params.id === user.id">{{ user }}</h1> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "postInfo",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>

<style lang="scss" scoped>
</style>