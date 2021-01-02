<template>
  <div class="help">
    <h2>{{ pageName }}</h2>
    <p>{{ pageDesc }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "../json/blog_posts.json";
export default {
  name: "Blog",
  data: function() {
    return {
      pageName: "Blog",
      pageDesc: "this Is Blog page!",
      posts: JsonPosts
    };
  },
  components: {
    BlogPosts,
    BlogSidebar
  }
};
</script>
