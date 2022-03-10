<template>
  <div class="home">
    <LearningInfo msg="Learning" />
  </div>
</template>

<script>
import LearningInfo from "@/components/LearningInfo.vue";

export default {
  name: "HomeView",
  components: {
    LearningInfo,
  },
};
</script>
