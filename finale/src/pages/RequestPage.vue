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
        this.newRequest = "";
      }
    }
  }
};
</script>

<style scoped>
.request-page{
  color:black;
  font-size:20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
input{
color:aqua;
width:600px;
margin:40px auto;
padding:20px;
font-size:20px;
border-radius:20px;
}

</style>