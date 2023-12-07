<style scoped></style>

<script lang="ts" setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, Levioso } from '@tresjs/cientos';
import { store } from './store';
// import {ref} from 'vue';
</script>
<template>
  <div>
    <TresCanvas window-size clear-color="#1c2226">
      <TresPerspectiveCamera />
      <TresDirectionalLight :rotation="[0, 60, 0]" intensity="2" />
      <TresAmbientLight />

      <TresMesh v-for="(cube, index) in store.cubes" :key="index"
        :position="[cube.coordinates.x, cube.coordinates.y, cube.coordinates.z]"
        :scale="[cube.scale.x, cube.scale.y, cube.scale.z]">
        <TresBoxGeometry />
        <TresMeshStandardMaterial opacity=0.15 transparent=true color="#4f9fdd" />
      </TresMesh>

      <TresGridHelper />
      <OrbitControls make-default />
    </TresCanvas>
    <div class="fixed-element">
      <form class="fullLength" action="">
        <h1 class="headingText">Total Floors {{ store.cubes.length }}</h1>
        <input @click="store.insertFloor" class="addBaseButton" type="submit" value="Add Floor" />
      </form>
    </div>
  </div>
</template>


<style>
.fixed-element {
  position: fixed;
  width: 18rem;
  /* w-72 */
  top: 1.25rem;
  /* top-5 */
  right: 1.25rem;
  /* right-5 */
  background-color: #1e293b;
  /* bg-slate-900 */
  color: white;
  /* text-white */
  padding: 1.25rem;
  /* p-5 */
  border-radius: 0.375rem;
  /* rounded-md */
  margin-top: 30px;
}

.fullLength {
  width: 100%;
}

.headingText {
  font-size: 1.125rem;
  /* Equivalent to Tailwind's text-lg */
  font-weight: 700;
  /* Equivalent to Tailwind's font-bold */
}

.basePlot {
  display: flex;
  /* Equivalent to Tailwind's flex */
  flex-direction: column;
  /* Equivalent to Tailwind's flex-col */
  margin-top: 1rem;
}

.baseInput {
  display: flex;
  /* Equivalent to Tailwind's flex */
  gap: 0.5rem;
  /* Equivalent to Tailwind's gap-2 */
  margin-top: 0.25rem;
  /* Equivalent to Tailwind's mt-1 */
  color: black;
}

.InputNumber {
  padding-left: 0.5rem;
  /* Equivalent to Tailwind's px-2 */
  padding-right: 0.5rem;
  /* Equivalent to Tailwind's px-2 */
  width: 50%;
  /* Equivalent to Tailwind's w-1/2 */
  border-radius: 0.25rem;
  /* Equivalent to Tailwind's rounded */
}

.addBaseButton {
  cursor: pointer;
  /* Equivalent to Tailwind's cursor-pointer */
  width: 100%;
  /* Equivalent to Tailwind's w-full */
  background-color: #4373f7;
  /* Equivalent to Tailwind's bg-[#4373F7] */
  color: white;
  /* Equivalent to Tailwind's text-white */
  margin-top: 1.25rem;
  /* Equivalent to Tailwind's mt-5 */
  padding-top: 0.5rem;
  /* Equivalent to Tailwind's py-2 */
  padding-bottom: 0.5rem;
  /* Equivalent to Tailwind's py-2 */
  border-radius: 0.25rem;
  /* Equivalent to Tailwind's rounded */
}

.addFloor {
  cursor: pointer;
  /* Tailwind: cursor-pointer */
  width: 100%;
  /* Tailwind: w-full */
  background-color: #4373f7;
  /* Tailwind: bg-[#4373F7] */
  color: white;
  /* Tailwind: text-white */
  margin-top: 1.25rem;
  /* Tailwind: mt-5 */
  padding-top: 0.5rem;
  /* Tailwind: py-2 */
  padding-bottom: 0.5rem;
  /* Tailwind: py-2 */
  border-radius: 0.25rem;
  /* Tailwind: rounded */
}

.earthButton {
  cursor: pointer;
  /* Equivalent to Tailwind's cursor-pointer */
  width: 100%;
  /* Equivalent to Tailwind's w-full */
  background-color: #f743d9;
  /* Equivalent to Tailwind's bg-[#f743d9] */
  color: white;
  /* Equivalent to Tailwind's text-white */
  margin-top: 1.25rem;
  /* Equivalent to Tailwind's mt-5 */
  padding-top: 0.5rem;
  /* Equivalent to Tailwind's py-2 */
  padding-bottom: 0.5rem;
  /* Equivalent to Tailwind's py-2 */
  border-radius: 0.25rem;
  /* Equivalent to Tailwind's rounded */
}

input[type='submit'] {
  padding: 10px !important;
}

input[type='button'] {
  padding: 10px !important;
}
</style>