<template>
  

<div class="flex bg-white py-24 sm:py-32 mt-4">
    
    <!-- <div class="flex flex-wrap mt-4"></div> -->

    <div class="mx-auto max-w-7xl px-6 lg:px-1 mt-4" v-show="divsatu">
      
      <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-1 lg:mx-0 lg:h-full lg:max-w-none">

        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <div class="p-4">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
              </div>

          </div>
          </div>
          <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" @click="addBarang"> New Data </button>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Doc No
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <!-- <span class="sr-only">Supplier</span> -->
                    Supplier
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total Harga
                  </th>
                  <th scope="col" class="px-6 py-3">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" v-for="item in barangmasuk" :key="item.id">
                  <td class="w-4 p-4">
                    {{ item.tgl }}
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {{ item.fakturno }}
                  </th>
                  <td class="px-6 py-4">
                    {{item.nmsupplier}}
                  </td>
                  <td class="px-6 py-4 text-right">
                    {{ formatToRupiah(item.jml_modal) }}
                  </td>
                  <!-- <td class="px-6 py-4">
                    {{item.qty}}
                  </td> -->
                  
                  <!-- <td class="px-6 py-4 text-right">
                    {{ formatToRupiah(item.harga_jual) }}
                  </td> -->
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detail</a>
                  </td>
                </tr>
                <!-- 
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">
                    White
                  </td>
                  <td class="px-6 py-4">
                    Laptop PC
                  </td>
                  <td class="px-6 py-4">
                    $1999
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">
                    Black
                  </td>
                  <td class="px-6 py-4">
                    Accessories
                  </td>
                  <td class="px-6 py-4">
                    $99
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr> -->
              </tbody>
            </table>

        </div>

      </div>

    </div>

</div>

    <div class="flex mb-4" v-show="divdua">

      <div class="w-1/2 h-12">

        <div class="w-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                
                <form class="max-w-md mx-auto">
                      <h5 class="text-xl font-medium text-gray-900 dark:text-white">Data </h5>
                    
                      <div class="grid md:grid-cols-1 md:gap-6 py-2 sm:py-2 mb-1">
                          <div class="relative z-0 w-full mb-5 group">

                              <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  readonly/>
                              <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No Doc</label>

                          </div>
                      </div>

                      <div class="grid md:grid-cols-1 md:gap-6 py-2 sm:py-2 mb-1">
                          <div class="relative z-0 w-full mb-5 group">

                            <!-- <div class="relative max-w-sm grid md:grid-cols-1 md:gap-6"> -->
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                        </div>
                        <input
                      v-model="selectedDate"
                      placeholder="Pilih tanggal"
                      class="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      data-input
                      />
                          </div>  
                      </div>

                      <div class="grid md:grid-cols-1 md:gap-6 py-1 sm:py-1">
                        <div class="relative z-0 w-full mb-5 group">
                        <select
                          id="selectInput"
                          v-model="selectedSupplier"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="" disabled>Select an Supplier</option>
                          <option v-for="option in options" :key="option.id" :value="option.id">{{ option.nmsupplier }}</option>
                        </select>
                      </div>
                      </div>
                      

                      <div class="grid md:grid-cols-1 md:gap-6">
                        <!-- <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier</label> -->
                            
                        
                        <!-- <p class="mt-2 text-sm text-gray-500">Selected option: {{ selectedOption }}</p> -->
                      </div>

                      <div class="grid md:grid-cols-1 md:gap-6 py-6 sm:py-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input 
                            v-model="nofaktur"
                            type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No faktur</label>
                        </div>
                        
                      </div>

                      
                      
                      <div class="grid md:grid-cols-2 md:gap-6  py-6 sm:py-6">
                        <div class="relative z-0 w-full mb-5 group">

                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="addDoc">Simpan</button>
                        </div>
                      </div>
                      
                </form>

        </div>

      </div>

      <div class="w-1/2 bg-gray-500 h-12">

        <div class="w-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-0 md:p-0 dark:bg-gray-800 dark:border-gray-700">

        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Harga Modal
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Qty
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Harga Jual
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
                
            </tbody>
        </table>

        </div>

      </div>

    </div>



    
    <ButtonNavigation />
  </template>
  <script>
//  import CardTable from "@/components/BarangTable.vue";
//import { Dialog, TransitionRoot, TransitionChild } from '@headlessui/vue';  
import UserService from "@/services/user.service";
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import ButtonNavigation from "@/components/Footers/ButtonNavigation.vue";

  export default {
    name: "dashboard-page",
    data: () => ({
      files: [],
      namauser:'',
      barangmasuk: [],
      tokenjwt:'',
      open: true,
      divsatu: true,
      divdua: false,
    
      selectedSupplier: '', // Initial selected value
      // options: [
      //   { value: 'option1', label: 'Option 1' },
      //   { value: 'option2', label: 'Option 2' },
      //   { value: 'option3', label: 'Option 3' },
      //   // Add more options as needed
      // ],
      options     : [ ],
      nofaktur    :'',
      selectedDate: null,
      isLoading:false,
    }),
    components: {
      ButtonNavigation,
    },
    methods: {
      formatToRupiah(number) {
      if (Array.isArray(this.totalbrg) && this.totalbrg.length > 0 && this.totalbrg[0] === 0) {
        return 'Rp 0';
      } else {
        const parsedNumber = parseFloat(number);
        if (!isNaN(parsedNumber)) {
          return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          }).format(parsedNumber);
        } else {
          return 'Rp 0';
        }
      }
      },
      addBarang(){
        this.List_supplier();
        this.divsatu = false;
        this.divdua = true;
        
      },
      initDatepicker() {
      flatpickr('[data-input]', {
        // Opsi Flatpickr di sini
        dateFormat: 'Y-m-d',
        // Anda dapat menyesuaikan opsi sesuai kebutuhan
      });
      },
      List_supplier(){
        this.namauser   = this.$store.state.auth.user['name'];
        this.tokenjwt   = this.$store.state.auth.user['token'];
        
        UserService.getSupplier(this.tokenjwt, this.search_brg).then(
        (response) => {
          this.options = response.data.result;
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
      addDoc(){
        this.selectedSupplier;
        this.nofaktur;
        this.selectedDate
// alert(this.selectedSupplier);
        UserService.postAddBarangMasuk(this.tokenjwt, this.selectedSupplier, this.nofaktur, this.selectedDate).then(
        (response) => {
          this.statusadd = response.data;
          //this.fetchData(); // Assuming you want to refresh data after adding barang
          //this.isBarangIdValid= true;
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
        }
    //   handleFileChange(event) {
    //   this.files = Array.from(event.target.files);
    // },
    // removeFile(index) {
    //   this.files.splice(index, 1);
    // },
      // sesion_barang(){
      //   console.log('plant');
      //   // UserService.getSesionPlant(this.tokenjwt).then(

      //   // );
      // }
    },
    mounted () {
      this.initDatepicker();
      this.namauser   = this.$store.state.auth.user['name'];
      this.tokenjwt   = this.$store.state.auth.user['token'];
      UserService.getBarangMasuk(this.$store.state.auth.user['token']).then(
      (response) => {
         //console.log('sesion', response.data);
        this.barangmasuk = response.data.result;
        //  if(this.myOptions.length > 0){
        //    this.mySelectedOption = this.myOptions[0];
        //  }
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
    }
  };
  </script>
  