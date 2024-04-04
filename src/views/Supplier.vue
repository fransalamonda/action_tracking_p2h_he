<template>
  <div class="bg-white py-24 sm:py-32">
  



    <div class="mx-auto max-w-7xl px-6 lg:px-1">
     
      <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-1 lg:mx-0 lg:flex lg:max-w-none">
        <div class="p-8 sm:p-10 lg:flex-auto">
          
              <table class=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">No</th>
                        <th scope="col" class="px-6 py-3">Nama Supplier</th>
                        <th scope="col" class="px-6 py-3">Phone number</th>
                        <th scope="col" class="px-6 py-3">Alamat</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="item in barang" :key="item.id">
                        <td class="px-6 py-4">{{ item.kode }}</td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ item.nmsupplier }}</th>
                        <td class="px-6 py-4">{{ item.alamat }}</td>
                        <td class="px-6 py-4">{{ item.telp }}</td>
                      </tr>
                      
                  </tbody>
              </table>
        </div>



        <div class="-mt-2 p-2 lg:mt-0 lg:w-auto lg:max-w-md lg:flex-shrink-0">
          <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div class="mx-auto max-w-xs px-8">
              <form>
                  <!-- <div class="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Supplier</label>
                          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                      </div>
                      <div>
                          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
                      </div>
                      <div>
                          <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                          <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required>
                      </div>  
                      <div>
                          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                          <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                      </div>
                      <div>
                          <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
                          <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required>
                      </div>
                      <div>
                          <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique visitors (per month)</label>
                          <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                      </div>
                  </div> -->

                  <div class="grid mb-6">
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Supplier</label>

                      <input type="text" id="nm_supplier" v-model="nm_supplier" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                  </div> 

                  <div class="mb-6">
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>

                  <div class="mb-6">
                      <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                      <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div> 
                
                  <button type="submit" @click="addSupplierAction" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>  
              
              
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>

    <div class="flex flex-wrap mt-4">
      
      <div class="w-full mb-12 px-4">
        <!-- <card-table :barang="barang" /> -->

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
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div>
                        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Deactivate account</DialogTitle>
                          <div class="mt-2">
                            <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="open = false">Deactivate</button>
                      <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="open = false" ref="cancelButtonRef">Cancel</button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>

        
        
      </div>
     
      
    </div>
  </template>
  <script>
  //import CardTable from "@/components/SupplierTable.vue";
  import UserService from "@/services/user.service";
  import { Dialog, TransitionRoot, TransitionChild } from '@headlessui/vue';

  export default {
    name: "dashboard-page",
    data: () => ({
      files: [],
      namauser:'',
      barang: [],
      tokenjwt:'',
      open: true,

      nm_supplier:'',
    }),
    components: {
      //CardTable,
      Dialog,
      TransitionRoot,
      TransitionChild,
    },
    methods: {
      handleFileChange(event) {
        this.files = Array.from(event.target.files);
      },
      removeFile(index) {
        this.files.splice(index, 1);
      },
      sesion_barang(){
        console.log('plant');
        // UserService.getSesionPlant(this.tokenjwt).then(

        // );
      },
      addSupplierAction(){

      }
    },
    mounted () {
      this.namauser   = this.$store.state.auth.user['name'];
      this.tokenjwt   = this.$store.state.auth.user['token'];
      UserService.getSupplier(this.$store.state.auth.user['token']).then(
      (response) => {
         //console.log('sesion', response.data);
        this.barang = response.data.result;
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
  