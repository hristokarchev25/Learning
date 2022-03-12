<template>
  <div class="card card-body mt-4">
    <h3>Edit courses</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Lessons</label>
        <input
          v-model="form.lessons"
          class="form-control"
          type="number"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input v-model="form.description" class="form-control" />
      </div>

      <div class="form-group mt-3">
        <label>Date</label>
        <input v-model="form.date" class="form-control" type="date" required />
      </div>

      <div class="form-group mt-3">
        <label>Image</label>
        <input v-model="form.image" class="form-control" />
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

    const form = reactive({
      name: "",
      lessons: "",
      description: "",
      date: "",
      image: "",
    });
    onMounted(async () => {
      const course = await getCourse(courseId.value);
      form.name = course.name;
      form.lessons = course.lessons;
      form.description = course.description;
      form.date = course.date;
      form.image = course.image;
    });

    const update = async () => {
      await updateCourse(courseId.value, { ...form });
      router.push("/learning");
      form.name = "";
      form.lessons = "";
      form.description = "";
      form.date = "";
      form.image = "";
    };

    return { form, update };
  },
};
</script>
