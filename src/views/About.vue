<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
    <div class="alert alert-warning alert-dismissible" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>Warning!</strong> Better check yourself, you're not looking too
      good.
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data: function() {
    return {
      pageName: "About",
      pageDesc: "this Is About page!"
    };
  }
};
</script>
