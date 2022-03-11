<template>
  <div class="form__create">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input v-model="form.description" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Date</label>
        <input v-model="form.date" class="form-control" type="date" required />
      </div>

      <button type="submit" class="btn btn-success mt-3">Create Course</button>
    </form>
  </div>
</template>

<script>
import { createCourse } from "@/firebase";
import { reactive } from "vue";
/* import { useRouter } from "vue-router"; */

export default {
  setup() {
    /* const router = useRouter(); */
    const form = reactive({ name: "", description: "", date: "" });

    const onSubmit = async () => {
      await createCourse({ ...form });
      /* router.push("/"); */
      form.name = "";
      form.description = "";
      form.date = "";
    };

    return { form, onSubmit };
  },
};
</script>

<style scoped>
.form__create {
  margin: 25px;
  border: 1px solid black;
}
</style>
