<template>
  <div class="header">
    <div class="container">
      <div class="logo"> Vue Apps</div>
      <ul class="text-right">
        <router-link to="/" tag="li" exact> <a>Home</a></router-link>
        <router-link to="/about" tag="li"> <a>About</a></router-link>
        <router-link to="/blog" tag="li"> <a>Blog</a></router-link>
        <router-link to="/todo" tag="li"> <a>Todo</a></router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader"
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  list-style: none;
  .logo {
    font-size: 24px;
    padding: 10px;
    display: inline-block;
    min-width: 200px;
  }
  ul {
    float: right;
    width: calc(100% - 200px);
    margin: 0;
    li {
      padding: 20px;
      display: inline-block;
      font-size: 12px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
