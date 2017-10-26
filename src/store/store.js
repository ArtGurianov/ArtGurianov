import Vue from 'vue';
import Vuex from 'vuex';
import { Categories } from './categories';
import Api from '../services/Api';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isAdmin: 0,
        sessionToken: null,
        levels: 1,
        chainEl: ['home'],
        clickedEl: 'home',
        chosenPhotos: [],
        browserHeight: null,
        browserWidth: null,
        mobileVersion: false,
        db_book: [],
        db_videos: [],
        db_snapshots: [],
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
        },
        setMediaData: function (state, data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].type == 'book') {
                        state.db_book.push(data[i]);
                    } else if (data[i].type == 'video') {
                        state.db_videos.push(data[i]);
                    } else if (data[i].type == 'snapshot') {
                        state.db_snapshots.push(data[i]);
                    }
                };
            }

    },

  actions: {
        requestMediaData: function ({ commit }) {
          Api().get('get_media_data').then(function (res) {
                commit('setMediaData', res.data);
            });

        }
  }
});