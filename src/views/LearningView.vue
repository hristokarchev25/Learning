<template>
  <TheHeader />
  <CourseCreate />
  <CourseList />
  <TheFooter />
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import CourseCreate from "@/components/CourseCreate.vue";
import CourseList from "@/components/CourseList.vue";

export default {
  name: "LearningView",
  components: {
    TheFooter,
    TheHeader,
    CourseCreate,
    CourseList,
  },
};
</script>
