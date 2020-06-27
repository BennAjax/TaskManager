<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <a class="navbar-brand" href="#">
        <img alt="logo" style="max-height: 25px" src="../assets/logo.png" />
        Task Manager
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto text-center">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tasks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Benn</a>
          </li>

        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped></style>
