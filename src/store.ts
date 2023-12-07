import { reactive } from "vue";

export const store = reactive({
  cubes: [
  ],



  form: {
    x: 0,
    z: 0,
  },


  insertFloor(event) {
    event.preventDefault();

    const newCube = {
      coordinates: {
        x: 0,
        y: this.cubes.length + 0.5 + 0.25,
        z: 0,
      },
      scale: {
        x: 4,
        y: 1,
        z: 4,
      },
    };

    this.cubes.push(newCube);
  },
});
