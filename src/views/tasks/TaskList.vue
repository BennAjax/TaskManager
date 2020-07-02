<template>
  <div>
    <h1>Task List Route</h1>
    <router-link to="/tasks/new" class="btn btn-success">Create Task</router-link>
  </div>
</template>

<script>
import * as taskService from "@/services/TaskService";
export default {
  name: "TaskList",
  beforeRouteEnter(to, from, next) {
    taskService.getAllTask().then(res => {
      console.log(res);
      next();
    });
  }
};
</script>

<style scoped></style>
