<template>
  <div class="card card-body mt-4">
    <h3>Edit courses</h3>
    <form @submit.prevent="update">
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
      <button type="submit" class="btn btn-primary mt-3">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getCourse, updateCourse } from "@/firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const courseId = computed(() => route.params.id);

    const form = reactive({ name: "", description: "", date: "" });
    onMounted(async () => {
      const course = await getCourse(courseId.value);
      form.name = course.name;
      form.description = course.description;
      form.date = course.date;
    });

    const update = async () => {
      await updateCourse(courseId.value, { ...form });
      router.push("/learning");
      form.name = "";
      form.description = "";
      form.date = "";
    };

    return { form, update };
  },
};
</script>
