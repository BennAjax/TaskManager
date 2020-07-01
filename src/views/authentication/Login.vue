<template>
  <div>
    <h1 class="text-center">Login</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="username">Email address</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as auth  from "@/services/AuthService";
export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit: async function() {

      const user = {
        username: this.username,
        password: this.password
      };
      await auth.login(user);
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped></style>
