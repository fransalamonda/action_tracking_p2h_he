<template>
  <div>
    <!-- <Sidebar /> -->
    <div class="relative  bg-blueGray-100">
      <admin-navbar :nmuser="nmuser" :data_ou="data_ou" :expires_token="expires_token" @data-dikirim="handleDataFromChild"/>
      <header-stats />
      <!-- w-full -->
      <div class="px-4 md:px-12 mx-auto w-9/12 -m-24">
        
        
        <router-view :customProp="receivedData" />
        
        <!-- <footer-admin /> -->
        <!-- <div :class="{ invisible: isActive }"><ButtonNavigation /></div> -->
        
      </div>
    </div>
    
  </div>
</template>
<script>

import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
//import Sidebar from "@/components/Sidebar/Sidebar.vue"
import HeaderStats from "@/components/Headers/HeaderStats.vue";
//import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
//import ButtonNavigation from "@/components/Footers/ButtonNavigation.vue";
export default {
  name: "dashboard-page",
  components: {
    AdminNavbar,
    HeaderStats,
    //ButtonNavigation,
    //Sidebar,
   //FooterAdmin,
  },
  data: () => ({
    nmuser:'',
    data_ou:'',
    expires_token:'',
    receivedData: '',
    //isActive: false
  }),
  computed: {
    currentUser() {
       return this.$store.state.auth.user;
      //return this.$store.state;
    },
    
  },
  mounted () {
    if (!this.currentUser) {
    this.$router.push('/');
    }else{
      this.nmuser = this.$store.state.auth.user.result.fullname;
      this.data_ou = this.$store.state.auth.user.result.kode_ou;
      this.expires_token = this.$store.state.auth.user.expires_in;
    }

  },
  methods: {
    handleDataFromChild(data) {
      this.receivedData = data;
    }
  }
};
</script>
