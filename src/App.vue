<script setup>
import { TresCanvas } from "@tresjs/core"
import { OrbitControls, Levioso } from '@tresjs/cientos'
import { store } from './store.js'
import { ref } from "vue";


const clicked = ref(false)

</script>

<template>
  <TresCanvas window-size clear-color="white">
    <TresPerspectiveCamera />
    <TresDirectionalLight :rotation="[0, 60, 0]" intensity="2" />
    <TresAmbientLight />

    <Levioso :rotationFactor="store.earthquake ? 0.5 : 0" :speed="store.earthquake ? 10 : 0"
      :float-factor="store.earthquake ? 1 : 0" v-for="(cube, index) in store.cubes" :key="index">
      <TresMesh :position="[cube.coordinates.x, cube.coordinates.y, cube.coordinates.z]"
        :scale="[cube.scale.x, cube.scale.y, cube.scale.z]">
        <TresBoxGeometry />
        <TresMeshStandardMaterial color='#4373F7' />
      </TresMesh>
    </Levioso>

    <Levioso :rotationFactor="store.earthquake ? 0.5 : 0" :speed="store.earthquake ? 10 : 0"
      :float-factor="store.earthquake ? 1 : 0" v-for="(base, index) in store.base" :key="index">
      <TresMesh :position="[base.coordinates.x, -0.125, base.coordinates.z]" :scale="[1, 0.25, 1]">
        <TresBoxGeometry />
        <TresMeshStandardMaterial color="white" />
      </TresMesh>
    </Levioso>

    <TresGridHelper />
    <OrbitControls make-default />
  </TresCanvas>

  <div class="fixed w-72 top-5 right-5 bg-slate-900 text-white p-5 rounded-md">
    <form class="w-full" action="">
      <h1 class="text-lg font-bold">Total Floors {{ store.cubes.length }}</h1>


      <div class="flex flex-col mt-4">
        <label>Base Plot Location</label>
        <div class="flex gap-2 mt-1 text-black">
          <input v-model="store.form.x" class="px-2 w-1/2 rounded" placeholder="x" type="number" name="" id="">
          <input v-model="store.form.z" class="px-2 w-1/2 rounded" placeholder="z" type="number" name="" id="">
        </div>
      </div>


      <input @click="store.insertBase" class="cursor-pointer w-full bg-[#4373F7] text-white mt-5 py-2 rounded"
        type="submit" value="Add Base">
      <input @click="store.insertFloor" class="cursor-pointer w-full bg-[#4373F7] text-white mt-5 py-2 rounded"
        type="submit" value="Add Floor">

      <input class="cursor-pointer w-full bg-[#f743d9] text-white mt-5 py-2 rounded"
        @click="store.earthquake = !store.earthquake" type="button" :value="store.earthquake ? 'Stop' : 'Earthquake 🤯'">

    </form>
  </div>
</template>