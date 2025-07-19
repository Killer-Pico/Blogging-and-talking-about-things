<template>
  <div class="comment">
    <h1>Коментарі</h1>
    <form @submit.prevent="addComment" class="comment-form">
      <label>Напишіть свої думки насчет сайта</label>
        <input v-model="newComment" type="text" placeholder="Напишить свої коментарії." required/>
        <button type="submit">Додати коментар</button>
    </form>
        <div v-if="comments.length > 0" class="comment-list">
      <h2>Ваші коментарі:</h2>
      <ul>
        <li v-for="(comment, index) in comments" :key="index">
          {{ comment }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentComponent",
  data() {
    return {
      newComment: "",
      comments: []
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push(this.newComment.trim());
        this.newComment = "";
        this.saveComments();
      }
    },
    saveComments() {
      localStorage.setItem("vue_comments", JSON.stringify(this.comments));
    },
    loadComments() {
      const saved = localStorage.getItem("vue_comments");
      if (saved) {
        try {
          this.comments = JSON.parse(saved);
        } catch (e) {
          console.error("Не вдалося зчитати localStorage:", e);
        }
      }
    }
  },
  mounted() {
    this.loadComments();
  }
};
</script>


<style>

</style>