<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
      <TransitionChild as="template" enter="transition-opacity ease-out duration-300" leave="transition-opacity ease-in duration-300">
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeModal">
        </div>
      </TransitionChild>

      <div class="bg-white rounded-lg overflow-hidden mx-auto z-50 
      relative p-4 w-full max-w-2xl max-h-full
      ">
        <h2 class="text-xl font-semibold mb-4">Add Barang</h2>
        
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <!-- <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
              <tr>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
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
                Jumlah
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                >
                  Sub Total
                </th>
                
              
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in barang" :key="item.id" @click="openEditForm(item)" style="cursor: pointer">
                  <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span
                    class="ml-3 font-bold"
                    :class="[
                      color === 'light' ? 'text-blueGray-600' : 'text-white',
                    ]"
                  >
                  {{ item.name }}
                  </span>
                </th>
                  
                      
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> Test</td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <i class="fas fa-circle text-orange-500 mr-2"></i> {{ item.qty }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                >
               
                </td>
              
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                >
                  <table-dropdown />
                </td>
                
              </tr>
            
            </tbody>
          </table> -->
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
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
                Jumlah
                </th>
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                >
                  Sub Total
                </th>
                
              
                <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  :class="[
                    color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                  ]"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="barang in listbarang" :key="barang.id" style="cursor: pointer">
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
                  {{ formatToRupiah(barang.hrg_b) }}
                </td>
                <!--<td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                >
                  <i class="fas fa-circle text-orange-500 mr-2"></i> {{ item.qty }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                >
                {{ formatToRupiah(item.subtotal) }}
                </td>
              
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                >
                  <table-dropdown />
                </td> -->
                
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 flex justify-end">
          <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded-md mr-4">Close</button>
          <button @click="confirmAction" class="px-4 py-2 bg-blue-500 text-white rounded-md">Confirm</button>
        </div>
      </div>
      
  

    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, watch } from 'vue';
import { Dialog, TransitionRoot, TransitionChild } from '@headlessui/vue';

export default {
  components: {
    Dialog,
    TransitionRoot,
    TransitionChild,
  },
  props: {
    open: {
      type: Boolean,
      required: true
    },
    listbarang: {
      type: String,
      default: '', 
    },
    // other props if needed
  },
  setup(props, { emit }) {
    // const internalOpen = ref(props.open);
    const isOpen = ref(props.open);
    watch(() => props.open, (newVal) => {
      isOpen.value = newVal;
    });


    const closeModal = () => {
      isOpen.value = false; // Update isOpen to close the modal
      emit('update:open', false); // Emit the updated state to the parent component
    };
    // Other modal logic/functions if needed

     return {
       isOpen,
       closeModal
      };
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
   onClickTampil(){
     this.$emit('tampil-chang')
   }
 }
  
};
</script>

<style>
/* Tailwind CSS classes can be added here if needed */
</style>
