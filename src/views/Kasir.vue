<template>
    <div class="flex flex-wrap mt-4">
      
      <div class="grid grid-cols-3 gap-4">

        <div class="col-span-2">

          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <h6 class="text-blueGray-400 text-sm mt-3 mb-1 font-bold uppercase">Tambah Barang</h6>
              <div class="flex flex-wrap">
                
                            
                  <div class="w-full lg:w-8/12 px-4">
                    <div class="relative w-full mb-3">
                      
                      <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                  </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." v-model="caribarang" @input="Cari_Barang" required>
                        
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  @click="toggleModal" >Search</button>

                      </div>

                      <!-- <div class="relative w-full">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                      </svg>
                      </div>
                      <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required>
                      </div>
                      <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                      <span class="sr-only">Search</span>
                      </button> -->


                      
                    </div>
                  </div>
                   <!-- class="border-0 px-3 py-[0.25rem] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  -->

                  <input 
                  type="hidden" 
                 :class="{ 'border-red-500': !isUsernameValid }"
                  v-model="idbarng"
                  id="idbarng"
                                  />
                  <p v-if="!isBarangIdValid" class="text-red-500">Username is invalid.</p>
 
                  <!-- <div class="w-full lg:w-4/12 px-4">
                              <div class="relative w-full mb-3">
                               
                                <button @click="toggleModal" class="text-white absolute end-2.5 bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List Barang</button>
                              </div>
                            </div> -->
                
              </div>
              
              <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detail Barang</label>
              <ListboxLabel class="block text-lg font-bold leading-6 text-blue-900 mb-2">{{ nm_brg }}</ListboxLabel>

              <div class="flex flex-wrap">
                <div class="w-full lg:w-4/12 px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">Harga</label>
                    <input
                                type="number"
                                v-model="harga_brg"
                                @input="jml_barang"
                                class="border-0 px-3 py-[0.25rem] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                              <!-- <label class="block uppercase text-blueGray-600 text-xs font-semibold mb-2" htmlFor="grid-password" >{{ formatToRupiah(harga_brg) }}</label> -->

                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Jumlah
                    </label>
                    <input
                      type="number"
                      v-model="jml_brg"
                      @input="jml_barang"
                      class="border-0 px-3 py-[0.25rem] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Total
                    </label>
                    <label class="block uppercase text-blueGray-600 text-xs font-semibold mb-2" htmlFor="grid-password" >{{ formatToRupiah(ttl_brg) }}</label>
                    <!-- <input
                      type="text"
                      class="border-0 px-3 py-[0.25rem] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value=""
                    /> -->
                  </div>
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />
              </div>

              <div class="mt-4 flex justify-end">
                <button @click="addBarangAction" class="px-4 py-[0.25rem] bg-blue-500 text-white rounded-md">Add</button>
                
              </div>
              
              <hr class="mt-6 border-b-1 border-blueGray-300" />
              <kasir-table :barang="barang" :totalbrg="totalbrg" @tampil-chang="toggleModal" />
            </div>

          </div>

        </div>

        <div class="...">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-xl bg-blueGray-100 border-0" >
              
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form>

                  <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Information
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        > No Pembelian : </label>
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-0">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-blueGray-600 text-xs  mb-2"
                          htmlFor="grid-password"
                        >
                      {{ this.nodok }}
                        </label>
                      
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        > Total : </label>
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-0">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-semibold mb-2" htmlFor="grid-password" >
                            {{ formatToRupiah(totalpem) }}
                        </label>
                      
                      </div>
                    </div>
                    
                  </div>

                  <hr class="mt-6 border-b-1 border-blueGray-300" />              
                  <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Bayar
                  </h6>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >  {{ kuranglebih }} </label>
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-0">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-semibold mb-2" htmlFor="grid-password" >
                            {{ formatToRupiah(dikembalikan) }}
                        </label>
                      
                      </div>
                    </div>
                    
                  </div>

                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        > Bayar : </label>
                      </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-0">
                      <div class="relative w-full mb-3">
                        <input v-model="dibayar" type="number" 
                        placeholder="Di bayar"  class="border-0 px-3 py-[0.25rem] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150s" 
                        @input="bayar_barang"
                        />
                      
                      </div>
                    </div>
                    
                  </div>

                  <div class="flex flex-wrap justify-end">
                    <!-- <div class="w-full lg:w-6/12 px-4">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      >
                          Kembali
                        </label>
                        <input
                          type="text"
                          class="border-0 px-3 py-[0.25rem] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150s"
                          v-model="dikembalikan"
                          readonly
                        />
                      
                      </div>
                    </div> -->
                    
                    <!-- <div class="w-full lg:w-12/12 px-4">
                      <div class="relative w-full mb-3">
                        <label
                          class="block  text-blueGray-600 text-xs font-bold mb-2"
                        >
                          Bayar
                        </label>
                      
                        <input v-model="dibayar" type="number" 
                        placeholder="Enter value to subtract"  class="border-0 px-3 py-[0.25rem] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150s" 
                        @input="bayar_barang"
                        />

                      </div>
                    </div> -->
                    
                    <button disabled="true" class="bg-red-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Bayar </button>

                  </div>

                  <hr class="mt-6 border-b-1 border-blueGray-300" />

                  
                </form>
              </div>

          </div>
        </div>

      </div>
    </div>

      <!-- <button @click="toggleModal">Open Modal</button> -->
      <!-- <ModalDialog :open.sync="open" @closeModal="closeModal" @confirmAction="handleConfirmAction" /> -->
    
    <div>
      <!-- Main modal -->
      <TransitionRoot as="template" :show="open">
          <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
              <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                  <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">


                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                      <div class="flex flex-wrap items-center">
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                          <h3
                            class="font-semibold text-lg"
                            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
                          >
                            Data Barang
                          </h3>
                        </div>
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                          <input
                                                  type="text"
                                                  v-model="search_brg"
                                                  @input="List_barang"
                                                  placeholder="Search..."
                                                  class="border-0 px-3 py-[0.25rem] placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                />
                        </div>
                      

                      </div>
                    </div>

                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div class="sm:flex sm:items-start">
                        <!-- <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div> -->
                        <!-- <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Deactivate account</DialogTitle>
                          
                        </div> -->

                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="items-center w-full bg-transparent border-collapse">
                              <thead>
                                <tr>
                                  <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    :class="[
                                      color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]"
                                  >
                                    Nama Barang
                                  </th>
                                  
                                  <th
                                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    :class="[
                                      color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]"
                                  >
                                  Harga 
                                  </th>
                                  <th
                                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    :class="[
                                      color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]"
                                  >
                                  Stok
                                  </th>
                                  <th
                                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    :class="[
                                      color === 'light'
                                        ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                                        : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                                    ]"
                                  >
                                    Order
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="barang in listbarang" :key="barang.id" style="cursor: pointer"  >
                                    <th
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                                  >
                                    
                                    <span
                                      class="ml-3 font-bold"
                                      :class="[
                                        color === 'light' ? 'text-blueGray-600' : 'text-white',
                                      ]"
                                    >
                                    {{ barang.name }}
                                    </span>
                                  </th>
                                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {{ formatToRupiah(barang.harga_jual) }}
                                  </td>
                                  <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" 
                                  >
                                    <i class="fas fa-circle text-orange-500 mr-2"></i> {{ barang.stock_awal }}
                                  </td>
                                 <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                  <button href="#" class="px-4 py-[0.25rem] bg-red-950 text-white rounded-md" @click="openSelect(barang)"><span>Order</span></button>
                                  </td>
                                
                                   <!--<td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                                  >
                                    <table-dropdown />
                                  </td> -->
                                  
                                </tr>
                              </tbody>
                            </table>
                        </div>

                      </div>
                    </div>
                    
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <!-- <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="open = false">Deactivate</button> -->
                      <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="open = false" ref="cancelButtonRef">Cancel</button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
      </TransitionRoot>

    </div>
     
  </template>
  <script>
  import KasirTable from "@/components/Kasir/KasirTable.vue";
 // import ModalDialog from "@/components/Kasir/ModalDialog.vue";
  import UserService from "@/services/user.service";
  import { Dialog, TransitionRoot, TransitionChild } from '@headlessui/vue';

  export default {
    name: "dashboard-page",
    data: () => ({
      files: [],
      namauser:'',
      userid:'',
      barang: [],
      totalbrg: [],
      tokenjwt:'',
      idtransaksi:'',
      nodok:'',
      totalpem:'',
      //tambang Barang
      caribarang:'',
      idbarng:'',
      nm_brg:'',
      harga_brg:0,
      //formattedHargaBrg: this.formatToRupiah(this.harga_brg),
      jml_brg:0,
      ttl_brg:0,
      statusadd:'',

      open: false,
      //list brg
      listbarang: [],
      color:'light',
      search_brg:'',
      

      dibayar:'',
      dikembalikan:0,
      kuranglebih :'',

      //validation
      isBarangIdValid: true,

    }),

    components: {
      KasirTable,
     // ModalDialog,
      Dialog,
      TransitionRoot,
      TransitionChild,
    },
    methods: {

      fetchData() {
        UserService.getKasirView(this.tokenjwt, this.userid)
          .then(response => {
            this.barang = response.data.result;
            this.totalbrg = response.data.data;
            this.idtransaksi = response.data.data.iddata;
            this.nodok = response.data.data.nodok;
            this.totalpem = response.data.data.total;
            this.dikembalikan = this.dibayar - response.data.data.total;
            if(this.dikembalikan >=0){
              this.kuranglebih ='Kembali :';
            }else{
              this.kuranglebih ='Kurang Bayar :';
            }
            this.isLoading = false;
          })
          .catch(error => {
            this.handleError(error);
          });
      },

      handleError(error) {
        this.plant = (error.response && error.response.data && error.response.data.message) ||
          error.message || error.toString();
        this.isLoading = false;
      },

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

      Cari_Barang() {  
        this.tokenjwt   = this.$store.state.auth.user['token'];
        UserService.getCariBarang(this.tokenjwt, this.caribarang).then(
        (response) => {
          this.idbarng    = response.data.data[0].id;
          this.nm_brg= response.data.data[0].nama;
          this.harga_brg  = response.data.data[0].harga_jual;
          this.jml_brg = response.data.jml;
          this.ttl_brg = response.data.data[0].harga_jual;
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

      List_barang(){
        this.namauser   = this.$store.state.auth.user['name'];
        this.tokenjwt   = this.$store.state.auth.user['token'];
        
        UserService.getBarang(this.tokenjwt, this.search_brg).then(
        (response) => {
          this.listbarang = response.data.result;
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
     
      jml_barang(){
        this.ttl_brg = this.harga_brg * this.jml_brg
      },
      onClickTampil(){
      this.$emit('tampil-chang')
      },
      handleFileChange(event) {
        this.files = Array.from(event.target.files);
      },
      removeFile(index) {
        this.files.splice(index, 1);
      },
      bayar_barang(){
          this.dikembalikan = this.totalpem - this.dibayar
          if(this.dikembalikan >=0){
            this.kuranglebih ='Kurang Bayar :';
            }else{
              this.kuranglebih ='Kembali :';
              
            }
      },
      
      toggleModal() {
        this.List_barang();
        this.open = !this.open; // Toggle the modal state
        
      },

      updateOpen(value) {
        this.open = value; // Update the 'open' property
      },
     
      openSelect(barang) {
        this.idbarng = barang.id;
        this.nm_brg = barang.name;
        this.harga_brg = barang.harga_jual;
        this.jml_brg = 1;
        this.ttl_brg = this.harga_brg * this.jml_brg;
        this.open = false;
      },
      validateBarangId() {
          this.isBarangIdValid = this.idbarng.length >= 1;
      },
      addBarangAction(){
        this.validateBarangId();
        if (!this.isBarangIdValid) {
          return;
        }
        //alert(this.tokenjwt);
        UserService.postAddBarangKeluarg(this.tokenjwt, this.idtransaksi, this.idbarng, this.harga_brg, this.jml_brg, this.userid).then(
      (response) => {
        this.statusadd = response.data;
        this.fetchData(); // Assuming you want to refresh data after adding barang
        this.isBarangIdValid= true;
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


    },

    mounted () {
      // this.userid   = this.$store.state.auth.user['userid'];
      // this.tokenjwt   = this.$store.state.auth.user['token'];
      // UserService.getKasirView(this.tokenjwt, this.userid).then(
      // (response) => {
      //   this.barang = response.data.result;
      //   this.totalbrg = response.data.data;

      //   this.idtransaksi = response.data.data.iddata;
      //   this.nodok =  response.data.data.nodok;
      //   this.totalpem = response.data.data.total;

      //   this.dikembalikan =  this.dibayar - response.data.data.total;
      //   this.isLoading = false;
        
      // },
      // (error) => {
      //   this.plant =
      //     (error.response &&
      //       error.response.data &&
      //       error.response.data.message) ||
      //     error.message ||
      //     error.toString();
      //     this.isLoading = false;
      // }
      // );
      this.userid = this.$store.state.auth.user.userid;
      this.tokenjwt = this.$store.state.auth.user.token;
      this.fetchData();
    }
  };
  </script>
  