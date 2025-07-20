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


<style scoped>
.comment{
width:600px;
height:600px;
margin:45px auto;
padding:25px;
background-color:white;
color:black;
border-radius:15px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.comment-form{
  display:flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 22px;
}

.comment-form input {
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 15px;
}

.comment-form button {
  align-self: flex-start;
  padding: 14px 16px;
  background-color: aqua;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.comment-form button:hover {
  background-color: #218838;
}

.comment-list {
  list-style: none;
  padding: 0;
}

.comment-list li {
  list-style: none;
  background-color: #fff;
  padding: 12px 14px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 16px;
}
</style>

