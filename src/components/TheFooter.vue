<template>
  <footer class="footer__container">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/learning">Learning</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style>
nav {
  padding: 48px 24px;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #459fec;
}
.footer__container {
  background-color: #101522;
}
</style>
