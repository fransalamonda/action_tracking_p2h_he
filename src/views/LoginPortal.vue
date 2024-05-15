<script>
import UserService from "@/services/user.service";
// import * as yup from "yup";
import { Base64 } from 'js-base64';

export default {
    //name: "loginportal",
  components: {
    
      // Form,
      // Field,
      // ErrorMessage,
    },
  data() {
    return {
      datarespon: null,
      dataAppUser: [],
      deviceInfo: {
        platform: '',
        version: ''
      },
      browserInfo: {
        name: '',
        version: ''
      },
      loading: true,
    };
  },
  
  computed: {
    appkey() {
      return this.$route.params.appKey;
    },
     userNk() {
      return  Base64.decode(this.$route.params.nik); 
    },
    email() {
      return  Base64.decode(this.$route.params.email); 
    },
    name() {
      return  Base64.decode(this.$route.params.name); 
    },
    appName() {
      return  Base64.decode(this.$route.params.appName); 
    },
    roleDisplayName() {
      return  Base64.decode(this.$route.params.roleDisplayName); 
    },
    roleName() {
      return  Base64.decode(this.$route.params.roleName); 
    },
    ou() {
      return  Base64.decode(this.$route.params.ou); 
    },
    dept() {
      return  Base64.decode(this.$route.params.dept); 
    },
    nmperusahaan() {
      return  Base64.decode(this.$route.params.nmper); 
    },
    nmou() {
      return  Base64.decode(this.$route.params.nmou); 
    },
    
   
  },

  methods: {
    // getDeviceInfo() {
    //   this.deviceInfo.platform = navigator.platform;
    //   this.deviceInfo.version = navigator.appVersion;
    // },
    // getBrowserInfo() {
    //   this.browserInfo.name = navigator.appName;
    //   this.browserInfo.version = navigator.userAgent;
    // },
    // encodeString() {
    //   this.encodeString = Base64.decode(this.$route.params.nik);
    // },
   
    // tokenData() {
    //   UserService.getToken().then(
    //   (response) => {
    //     //console.log(response);
    //     localStorage.setItem('tokenJWT', response);
    //     this.isLoading = false;
    //     //this.$router.push("/dom");
    //     this.domData();
    //   },
    //   (error) => {
    //     this.$router.push('/');
    //     this.plant =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //       this.isLoading = false;
    //   }
    // );
    // },
    
    //  domData() {
    //      this.$router.push("/unassigned");
  
    //  },

  },
  mounted () {
    //console.log(this.ou);
    //this.getDeviceInfo();
    // this.getBrowserInfo();
    UserService.getAppNik(this.userNk,this.name,this.email,this.appkey, this.ou, this.roleDisplayName,this.roleName,this.dept,this.browserInfo.version).then(
      (response) => {
        if (response.data.status == false) {
          this.$router.push("/");
        }
        this.datarespon = response.result;
        this.$router.push("/unassigned");
        // console.log(response.data.status);
        // Output data hasil panggilan API
        //console.log(response['status']);
        //this.$store.commit('increment', this.ou);
        //this.dataAppUser = response.data.user;
      },
      (error) => {
        this.plant =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );

  },

};
</script>

<template>
<loader v-show="loading" object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
       
<div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <!-- <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(' + LoginFigma + ')"> -->
              <div class="hidden bg-cover lg:block lg:w-2/3" :style="{ backgroundImage: 'url(' + LoginFigma + ')' }">
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-4xl font-bold text-white">Action Tracking P2H HE</h2>
                        
                        <p class="max-w-xl mt-3 text-gray-300"></p>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <!-- <h4 class="text-5xl font-bold text-center text-gray-700 dark:text-white">Action Tracking P2H HE</h4> -->
                        <p
                class="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
              Action Tracking P2H HE
                <img alt="..." class="w-5 mr-1" :src="github" />
                
              </p>
                       
              <p class="mt-3 font-bold text-gray-500 dark:text-gray-300">Welcome back!</p>
                        <p class="mt-3 text-gray-500 dark:text-gray-300">Login with your portal account </p>
                    </div>

                    <div class="mt-8">
                      

                      
                    </div>
                </div>
            </div>
        </div>
  </div>

</template>
@/services/user.service_dev@/services/user.service_p@/services/user.service_d@/services/user.service_D@/services/user.service_d@/services/user.service_P@/services/user.service_D