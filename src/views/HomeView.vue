<template>
  <LearningInfo msg="Learning" />
  <TheFooter />
</template>

<script>
import LearningInfo from "@/components/LearningInfo.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "HomeView",
  components: {
    LearningInfo,
    TheFooter,
  },
};
</script>
