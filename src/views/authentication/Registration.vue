<template>
  <div>
    <h1 class="text-center">Registration</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="first">First Name</label>
        <input
          type="text"
          class="form-control"
          id="first"
          placeholder="FirstName"
          v-model="first"
        />
      </div>
      <div class="form-group">
        <label for="last">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="last"
          placeholder="LastName"
          v-model="last"
        />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
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
        <button type="submit" class="btn btn-secondary">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as auth from "@/services/AuthService";
export default {
  name: "Registration",
  data: function() {
    return {
      first: "",
      last: "",
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit: async function() {
      const user = {
        username: this.username,
        password: this.password,
        first: this.first,
        last: this.last
      };
      const registerPromise = auth.register(user);
      const loginPromise = auth.login(user);
      await Promise.all([registerPromise, loginPromise]);
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped></style>
