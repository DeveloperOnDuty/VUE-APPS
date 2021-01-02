import Vue from "vue";

//MAKE UPPERCASE FILTER
Vue.filter("uppercase", function(v) {
  return v.toUpperCase();
});
// Make Reverse
Vue.filter("reversing", function(v) {
  return v
    .split("")
    .reverse()
    .join("");
});

//SHORTEN TEXT
Vue.filter("shorten", function(v, textLength) {
  return v.substring(0, textLength) + " ...";
});
