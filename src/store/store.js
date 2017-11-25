import Vue from 'vue';
import Vuex from 'vuex';
import { Categories } from './categories';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isAdmin: 0,
        sessionToken: null,
        clickedEl: 'home',
        chosenPhotos: [],
        browserHeight: null,
        browserWidth: null,
        mobileVersion: false,
        categories: Categories
        },
    getters: {
        getCompositePictures: state => {
            return state.chosenPhotos;
        }
    },
    mutations: {
        setBrowserHeight: function (state, height) {
            state.browserHeight = height;
        },
        setBrowserWidth: function (state, width) {
            state.browserWidth = width;
        }

    }
});