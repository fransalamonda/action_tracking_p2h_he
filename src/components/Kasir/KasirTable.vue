<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
  

    <div class="flex flex-wrap">
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-1">
       

        <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3
                      class="font-semibold text-lg"
                      :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
                    >
                     Kasir List 
                    </h3>
                  </div>
                  
                </div>
        </div>
        <div class="block w-full overflow-x-auto">
          <!-- Projects table -->
          <!-- <table class="items-center w-full bg-transparent border-collapse"> -->
            <table class="border-separate border border-slate-400 table-fixed">
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
              <tr v-for="item in barang" :key="item.id" @click="openEditForm(item              
                  )" style="cursor: pointer">
                  <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                >
                  
                  <span
                    class="ml-3 font-bold"
                    :class="[
                      color === 'light' ? 'text-blueGray-600' : 'text-white',
                    ]"
                  >
                  {{ item.name }}
                  </span>
                </th>
                  
                      
                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {{ formatToRupiah(item.hrg_b) }}
                </td>
                <td
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
                </td>
                
              </tr>
            
            </tbody>
          </table>
        </div>

      </div>
      <!-- <div class="w-full xl:w-5/12 px-4">
        
        <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
          >
         
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
                      htmlFor="grid-password"
                    > No Pembelian : </label>
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-0">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs  mb-2"
                      htmlFor="grid-password"
                    >
                    {{ totalbrg.nodok }}
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
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-semibold mb-2"
                      htmlFor="grid-password"
                    >
                    {{ formatToRupiah(totalbrg.total) }}
                    </label>
                   
                  </div>
                </div>
                
              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300" />

              
              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
>
                      Kembali
                    </label>
                    <input
                      type="email"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value=""
                    />
                  </div>
                </div>
                
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block  text-blueGray-600 text-xs font-bold mb-2"
                    >
                      Bayar
                    </label>
                    <input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value=""
                    />
                  </div>
                </div>
                
              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300" />

              
            </form>
          </div>
        </div>

      </div> -->
    </div>


    
  </div>
</template>
<script>
 import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";

// import bootstrap from "@/assets/img/bootstrap.jpg";
// import angular from "@/assets/img/angular.jpg";
// import sketch from "@/assets/img/sketch.jpg";
// import react from "@/assets/img/react.jpg";
// import vue from "@/assets/img/react.jpg";

// import team1 from "@/assets/img/team-1-800x800.jpg";
// import team2 from "@/assets/img/team-2-800x800.jpg";
// import team3 from "@/assets/img/team-3-800x800.jpg";
// import team4 from "@/assets/img/team-4-470x470.png";

export default {
  data:() => ({
      // bootstrap,
      // angular,
      // sketch,
      // react,
      // vue,
      // team1,
      // team2,
      // team3,
      // team4,
      tampil_data:false,
   
  }),
  
  components: {
    TableDropdown,
  },
  props: {
    barang: {
    // Define the type or other validation if needed
    type: String,
    // You can also define a default value if applicable
    default: '', // Replace 'exampleValue' with your default value
    },
   
    totalbrg: {
      type: String,
      default: '', 
    },
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
    tampilbrg: {
      type: String,
      default: '', 
    },
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
