// import { createStore } from 'vuex'
// import {auth} from ".\auth.module"

import { createStore } from "vuex";
import { auth } from "./auth.module";

const store = createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    apNav: true,
    token: null,

  },
  mutations: {
    // toggleConfigurator(state) {
    //   state.showConfig = !state.showConfig;
    // },
    // navbarMinimize(state) {
    //   const sidenav_show = document.querySelector(".g-sidenav-show");

    //   if (sidenav_show.classList.contains("g-sidenav-hidden")) {
    //     sidenav_show.classList.remove("g-sidenav-hidden");
    //     sidenav_show.classList.add("g-sidenav-pinned");
    //     state.isPinned = true;
    //   } else {
    //     sidenav_show.classList.add("g-sidenav-hidden");
    //     sidenav_show.classList.remove("g-sidenav-pinned");
    //     state.isPinned = false;
    //   }
    // },
    // sidebarType(state, payload) {
    //   state.sidebarType = payload;
    // },
    // navbarFixed(state) {
    //   if (state.isNavFixed === false) {
    //     state.isNavFixed = true;
    //   } else {
    //     state.isNavFixed = false;
    //   }
    // }
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    }
  },
  actions: {
    // toggleSidebarColor({ commit }, payload) {
    //   commit("sidebarType", payload);
    // }
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    clearToken({ commit }) {
      commit('clearToken');
    }
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    }
  },
  modules: {
    auth,
  },
});

export default store;

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
