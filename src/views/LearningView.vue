<template>
  <TheHeader />
  <div class="add__courseLink">
    <router-link to="/addCourse">Add course</router-link>
  </div>
  <CourseList />
  <TheFooter />
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";
import CourseList from "@/components/CourseList.vue";

export default {
  name: "LearningView",
  components: {
    TheFooter,
    TheHeader,
    CourseList,
  },
};
</script>

<style>
.add__courseLink {
  margin: 25px;
}
.add__courseLink > a {
  text-decoration: none;
  background: #101522;
  color: #fff;
  padding: 15px;
  border-radius: 25px;
}
.add__courseLink > a:hover {
  color: #459fec;
}
</style>
