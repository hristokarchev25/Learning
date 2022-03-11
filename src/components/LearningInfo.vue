<template>
  <div class="learning__info">
    <h1>{{ msg }}</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nam,
      reiciendis nostrum molestiae quasi quos voluptatibus aperiam numquam
      facere beatae cumque ducimus recusandae eius non dignissimos voluptate
      laborum consequatur? Magni. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Quidem, ipsum et non corporis, possimus nemo quia in sit
      perspiciatis quam nulla cum. Aliquid rem exercitationem eius! Nihil
      deserunt officia hic.
    </p>
  </div>
</template>

<script>
export default {
  name: "LearningInfo",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.learning__info > h1 {
  text-decoration: underline;
  font-size: 65px;
  letter-spacing: 1.4px;
}
.learning__info > p {
  color: #459fec;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
}
</style>
