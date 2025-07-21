<template>
  <div class="topics">
    <h2>Інші блоги</h2>
        <input v-model="filter" type="text" placeholder="Пошук за темою.." />
            <ul>
      <li
        v-for="(topic, index) in filteredTopics"
        :key="index"
      >
        {{ topic }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogTopics",
  data() {
    return {
      filter: "",
      topics: [
        "Чудові країни",
        "Штучний інтелект у повсякденному житті",
        "Огляди ігор",
        "Меми та інтернет-культура",
      ]
    };
  },
  computed: {
    filteredTopics() {
      const query = this.filter.toLowerCase();
      return this.topics.filter(topic =>
        topic.toLowerCase().includes(query)
      );
    }
  }
};
</script>


<style scoped>
.topics {
  max-width: 600px;
  margin: 25px auto;
}

input {
  width: 100%;
  padding: 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color:aqua;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f1f1f1;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  color:aqua;
}
</style>