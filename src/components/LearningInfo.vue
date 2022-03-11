<template>
  <div class="learning__info">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to Learning, the app where knowledge is found! Learning is
      single-page application where users can get news about the newest courses
      on the internet. They can see the description about the course, the date,
      the count of lessons and is it still active. User can create courses also
      edit and delete them!
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
.learning__info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.learning__info > h1 {
  text-decoration: underline;
  font-size: 65px;
  letter-spacing: 1.4px;
  margin: 50px;
}
.learning__info > p {
  color: #459fec;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin: 30px;
}
</style>
