<template>
    <select v-model="selectedOption" class="">
      <option v-for="(option, index) in dataplant" 
      :key="index"
      :value="option.id"
      :data-ou="option.attributes.kode_ou"
      
      >
        {{ option.attributes.plant_name }}
      </option>
    </select>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: String, // Adjust the type according to your use case
        default: '',
      },
      dataplant: {
        type: Array,
        default: () => [],
      },
      
    },
    data() {
      return {
        selectedOption: this.value,
        //oudata: '',
      };
    },
    methods: {
      //  handleInputChange(event) {
      //   const u = event.target.ou;
      //   console.log(u)
      //   this.$emit('oudata', u);
      // },
    },
  };
  </script>
  