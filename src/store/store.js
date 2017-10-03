import Vue from 'vue';
import Vuex from 'vuex';
import { Categories } from './categories';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        levels: 1,
        chainEl: ['home'],
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
        },
        setChainEl: function (state, destination) {
            if (destination) {
                state.chainEl = state.categories[destination].defaultChainEl;
                state.levels = state.chainEl.length;
            }
        },
        levelUp: function (state, component) {
            state.levels++;
            state.clickedEl = component;
            state.chainEl.push(component);
        },
        levelDown: function (state, component) {
            state.clickedEl = component;
            state.chainEl = state.chainEl.slice(0, state.chainEl.indexOf(state.clickedEl) + 1);
            state.levels = state.chainEl.length;
        }

    }
});