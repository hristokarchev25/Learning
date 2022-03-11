<template>
  <TheHeader />
  <div class="learning">
    <h1>This is the Learning page</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente nisi
      atque officia, voluptate explicabo suscipit voluptas laborum distinctio
      ipsum eos quos magni accusamus ex cum odio minus, mollitia ducimus sed?
    </p>
  </div>
  <TheFooter />
</template>

<script>
import TheFooter from "@/components/TheFooter.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "LearningView",
  components: {
    TheFooter,
    TheHeader,
  },
};
</script>
