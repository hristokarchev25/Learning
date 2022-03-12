<template>
  <TheHeader />
  <AddBtn />
  <CourseList />
  <TheFooter />
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import CourseList from "@/components/CourseList.vue";
import AddBtn from "@/components/AddBtn.vue";

export default {
  name: "LearningView",
  components: {
    TheFooter,
    TheHeader,
    CourseList,
    AddBtn,
  },
};
</script>
