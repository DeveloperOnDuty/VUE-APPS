<template>
  <div class="help">
    <h2>{{ pageName }}</h2>
    <p>{{ pageDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "help",
  data: function() {
    return {
      pageName: "Help",
      pageDesc: "this Is Help page!"
    };
  }
};
</script>
