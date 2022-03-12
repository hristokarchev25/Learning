<template>
  <TheHeader />
  <CourseCreate />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import CourseCreate from "@/components/CourseCreate.vue";

export default {
  name: "LearningView",
  components: {
    TheHeader,
    CourseCreate,
  },
};
</script>
