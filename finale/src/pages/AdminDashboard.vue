<template>
    <div>
        <nav>
         <router-link to="/">Головна</router-link>
      <router-link to="/requests">Запити</router-link>
      <router-link to="/dangerous-rides">Небезпечні атракціони</router-link>
        </nav>
        <main>
            <router-view />
      </main>
    </div>
   
</template>

<script>
export default{
    name: 'AdminDashboard',
};
</script>
<style scoped>
nav{
    background-color: white;
    padding: 25px;
    margin: 30px;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
}
nav a{
    text-decoration: none;
    color:black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
nav a:hover{
font-size: 17px;
}
</style>