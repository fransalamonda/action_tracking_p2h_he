<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
  
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-12 px-4"
    >
      <!-- Brand -->
      
       <!-- <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Select Plant</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select> -->

      <div class="pl-36  w-2/12">
        
      </div>

      <!-- Form -->
      <form
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
      >
      <div class="relative flex w-full flex-wrap items-stretch">
        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="selected" @change="PlantChange">
          <!-- <option disabled value="">Select Plant</option> -->
          <option v-for="option in options" :value="option.dept" :key="option.id" :selected="index === 0">
            {{ option.plant_name }}
          </option>
        </select>

      </div>
        <div class="relative flex w-full flex-wrap items-stretch">
          
          <span
            class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
          >
            <i class="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search here"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
          />
          
        </div>
      </form>
      <!-- User -->
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <!-- <span class="d-sm-inline d-none">{{ nmuser }}</span> -->
        <user-dropdown />
      </ul>
    </div>

  </nav>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import UserService from "@/services/user.service"; 

export default {
  components: {
    UserDropdown,
  },
  data: () => ({
    options: [],
    selected: null // Initialize selected value
    //selected: this.options.length > 0 ? this.options[0].dept : null,
  }),
  props: ["minNav", "textWhite", "nmuser"],
  computed: {
    currentOU() {
       return this.$store.state.auth.user.user.kode_ou;
      //return this.$store.state;
    },
  },
  methods: {
    initializeOptions() {
      UserService.plant_api(this.currentOU).then(
      (response) => {
        //console.log('data2', response.data.result);
        this.myOptions = response.data.result;
        if(this.myOptions.length > 0){
           this.options = response.data.result;
           this.selected = this.myOptions[0].dept;
         }
        
        this.isLoading = false;
      },
      (error) => {
        this.plant =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          this.isLoading = false;
      }
    );
    },
    PlantChange() {
      this.$emit('data-dikirim', this.selected);
      //console.log('Selected value:', this.selected);
      // You can perform any additional actions here based on the selected value
    }
  },
  mounted () {
this.initializeOptions();
    
  }
};
</script>
