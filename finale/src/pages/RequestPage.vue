<template>
  <div class="request-page">
    <h2>Запропонуй нові теми для блогу!</h2>
    
    <form @submit.prevent="submitRequest" class="request-form">
      <input
      id="request"
        v-model="addRequest"
        type="text"
        placeholder="Напишіть свою ідею"
        required
      />
      <button type="submit">Надіслати</button>
    </form>

    <ul class="request-list">
      <li v-for="(request, index) in requests" :key="index">
        {{ request }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RequestPage",
  data() {
    return {
      addRequest: "",
      requests: []
    };
  },
  methods: {
    submitRequest() {
      if (this.addRequest.trim()) {
        this.requests.push(this.addRequest.trim());
        this.saveRequests();
        this.newRequest = "";
      }
    },
     saveRequests() {
      localStorage.setItem("blogRequests", JSON.stringify(this.requests));
    },
    loadRequests() {
      const saved = localStorage.getItem("blogRequests");
      if (saved) {
        this.requests = JSON.parse(saved);
      }
    }
  },
  mounted() {
    this.loadRequests();
  }
}
</script>

<style scoped>
.request-page{
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border: none;
  border-radius: 15px;
  background: #fafafa;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
input{
color:aqua;
width:500px;
padding:20px;
font-size:20px;
border-radius:20px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.request-form button{
  margin:25px;
  align-self: flex-start;
  padding: 12px 16px;
  background-color: aqua;
  color:white;
  border: 6px solid white;
  border-radius: 18px;
  cursor: pointer;
}
.request-list{
  list-style:none;
  width: 300px;
  background-color: #fff;
  padding: 14px 16px;
  margin-bottom: 15px;
  border: 4px solid #ddd;
  border-radius: 18px;
}

</style>