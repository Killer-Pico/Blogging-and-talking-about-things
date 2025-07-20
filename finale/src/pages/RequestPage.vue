<template>
  <div class="requestBlog">
    <h2>Запропонуй нові теми для блогу!</h2>
    <form @submit.prevent="submitRequest">
      <input v-model="addRequest" type="text" placeholder="Напишіть свої запити!" required/>
      <button type="submit">Надіслати</button>
    </form>

       <div v-if="requests.length > 0" class="requests-list">
      <h3>Запропоновані теми:</h3>
      <ul>
        <li v-for="(request, index) in requests" :key="index">
          {{ request }}
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  name: "RequestPage",
  data() {
    return {
      newRequests: "",
      requests: []
    };
  },
  methods: {
    addRequest() {
      if (this.addRequest.trim()) {
        this.requests.push(this.addRequest.trim());
        localStorage.setItem("blogRequests", JSON.stringify(this.requests));
        this.addRequest = "";
      }
    },
},
  mounted() {
    const saved = localStorage.getItem("blogRequests");
    if (saved) {
      this.requests = JSON.parse(saved);
    }
  },
};
</script>

<style>

</style>