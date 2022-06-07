<template>
  <div class="about">
    <div class="main-container">
      <div  v-for="user in users" :key="user">
        <h2>ID{{ user.id }}</h2>
        <div class="card">
          <img src="../assets/index.png" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4>
              <b>{{ user.name }}</b>
            </h4>
            <router-link :to="{name:'postInfo', params:{id:user.id}}">Click me to see Info about User</router-link>
            <p>{{ user.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "About",
  data() {
    return {};
  },
  computed: {
    ...mapState(["users"]),
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 17rem;
  margin: 0 1rem;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
