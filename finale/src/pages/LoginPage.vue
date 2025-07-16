<template>
  <div>
    <h2>Авторизація</h2>
    <input v-model="username" class="login" placeholder="Логін">
    <input v-model="password" class="login" type="password" placeholder="Пароль">
    <button v-on:click="login" id="loginbutton">Увійти</button>
    <p v-if="message" class="error">{{ message }}</p>
  </div>
</template>

<script>
export default {
    data() {
        return{
      username: "",
      password: "",
      message: "",
      users: []
        };
    },
     async mounted() {
        try {
            const response = await fetch("/admin.json")
            if (!response.ok) {
                throw new Error ("HTTP помилка: " + response.status);
            }
            this.users = await response.json();
        } catch (error) {
          console.error("Помилка завантаження JSON: " + error);
          this.message = "Помилка сервера! Попробуйте пізніше.";
        }},
         methods: {
            login: function () {
                if (!this.username || !this.password) {
                    this.message = "Введіть логін та пароль!";
                    return;
                }
                const user = this.users.find(function (u) {
                    return u.username === this.username && u.password === this.password
                }.bind(this));
            if (user) {
                localStorage.setItem("authUser", this.username);
                this.$router.push("/profile");
            } else{
                this.message = "Невірний логін або пароль!";
            }
            }
          }
        }
     
    

</script>

<style scoped>
#loginbutton{
  border: 4px solid black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 15px;
  border-radius: 18px;
  margin:20px;
}
.login{
  border: 4px solid black;
  border-radius: 20px;
  font-size:16px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin:20px;
}
p{
  cursor: pointer;
  color:red;
}
</style>