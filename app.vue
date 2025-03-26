<template>
  <div>
    <div v-for="recipe in recipes" class="recipe">
      <div>{{ recipe.created_time }}</div>
      <div>{{ recipe.last_edited_time }}</div>
      <div>{{ recipe.properties }}</div>
    </div>
  </div>
</template>

<script setup>
let recipes = ref([]);

onMounted(async () => {
  const response = await $fetch("/api/notion");
  console.log('-', response);

  recipes.value = response;
});

</script>

<style>
.recipe {
  border: 1px solid lightblue;
}
</style>
