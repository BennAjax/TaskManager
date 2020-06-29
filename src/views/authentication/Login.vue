<template>
  <div>
    <h1 class="text-center">Login</h1>
    <form class="custom-form" v-on:submit="onSubmit">
      <div class="form-group">
        <label for="username">Email address</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from "@/services/AuthService";
export default {
  name: "Login",
  methods: {
    onSubmit: function(event) {
      event.preventDefault();
      login();
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped></style>
