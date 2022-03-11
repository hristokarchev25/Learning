<template>
  <TheHeader />
  <CourseCreate />
  <TheFooter />
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import CourseCreate from "@/components/CourseCreate.vue";

export default {
  name: "LearningView",
  components: {
    TheFooter,
    TheHeader,
    CourseCreate,
  },
};
</script>
