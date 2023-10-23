<template>
  <div
    class="card CardPokemonSelected"
    :class="loading ? '' : 'animate__animated animate__flipInY'"
  >
    <img :src="pokemon.img" height="200" class="card-img-top pt-2" alt="..." />
    <div class="card-body">
      <h5 class="card-title text-center text-names">{{ pokemon.name }}</h5>
      <hr />
      <div class="row">
        <section class="col">
          <Strong>XP:</Strong>
          <span>{{ pokemon.xp }}</span>
        </section>
        <section class="col">
          <strong>Altura:</strong>
          <span>{{ pokemon.height }}</span>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const pokemon = defineProps(["name", "xp", "height", "img"]);
</script>
<style scoped>
.CardPokemonSelected {
  height: 40vh; /* 75vh; */
  background: rgb(72, 63, 251);
  background: radial-gradient(
    circle,
    rgba(220, 194, 106, 0.8) 0%,
    rgba(244, 0, 0, 0.8) 100%
  );
}

.text-names {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
