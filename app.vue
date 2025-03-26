<template>
  <div>
    <div v-for="recipe in recipes" class="recipe">
      {{ recipe }}
      <div>{{ recipe.created_time }}</div>
      <div>{{ recipe.last_edited_time }}</div>
      <div>{{ recipe.properties.Name.title[0].text.content }}</div>
    </div>
  </div>
</template>

<script setup>
let recipes = ref([]);

onMounted(async () => {
  const response = await $fetch("/api/notion");

  recipes.value = response;
});

</script>

<style>
.recipe {
  border: 1px solid lightblue;
}
</style>
