<template>
  <div>
    <h1 class="text-center">Create Task</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                placeholder="Title"
                v-model="task.title"
        />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea
                cols="30"
                rows="10"
                name="body"
                class="form-control"
                id="body"
                placeholder="Body"
                v-model="task.body"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="due-date">Due Date</label>
        <input
                type="date"
                class="form-control"
                id="due-date"
                name="due-date"
                placeholder="Due Date"
                v-model="task.dueDate"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-secondary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
  import * as taskService  from "@/services/TaskService";
  export default {
    name: "TaskCreate",
    data: function() {
      return {
        task: {
          title: "",
          body: "",
          dueDate: ""
        }
      };
    },
    methods: {
      onSubmit: async function() {

        const task = {
          task: this.task
        };
        await taskService.createTask(task);
        this.$router.push({ name: "TaskList" });
      }
    }
  };
</script>

<style scoped></style>
