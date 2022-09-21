import { ActionContext } from "vuex";
import { getStoreAccessors } from "typesafe-vuex";

import { UserState } from "./userState";
import { State as RootState } from "../state";

// Use this for actions
type UserContext = ActionContext<UserState, RootState>;

export const user = {
  namespaced: true,

  state: {
    authKey: "",
  },

  getters: {
    getAuthKey(state: UserState) {
      return state.authKey;
    },
  },

  mutations: {
    reset(state: UserState) {
      state.authKey = "";
    },

    setAuthKey(state: UserState, authKey: string) {
      state.authKey = authKey;
    },
  },

  actions: {},
};

const { commit, read } = getStoreAccessors<UserState, RootState>("user");

const getters = user.getters;
const mutations = user.mutations;

export const readAuthKey = read(getters.getAuthKey);

export const commitUserReset = commit(mutations.reset);
export const commitSetAuthKey = commit(mutations.setAuthKey);
