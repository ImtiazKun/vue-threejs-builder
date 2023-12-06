import { reactive } from "vue";

export const store = reactive({
  cubes: [
    {
      coordinates: {
        x: 0,
        y: 0.5,
        z: 0,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
  ],

  base: [
    {
      coordinates: {
        x: 0.5,
        z: 0.5,
      },
    },
  ],

  form: {
    x: 0,
    z: 0,
  },

  earthquake: false,

  insertFloor(event) {
    event.preventDefault();

    const newCube = {
      coordinates: {
        x: 0,
        y: this.cubes.length + 1 - 0.5,
        z: 0,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
    };

    this.cubes.push(newCube);
  },

  insertBase(event) {
    event.preventDefault();

    const newBase = {
      coordinates: {
        x: this.form.x + 0.5,
        z: this.form.z + 0.5,
      },
    };

    this.base.push(newBase);
  },
});
