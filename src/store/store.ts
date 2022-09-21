import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import { user } from "./user";
import { State } from "./state";

const vuexLocal = new VuexPersistence<State>({
  storage: window.localStorage,
  reducer: ({ user }) => ({
    user,
  }),
});

export const store = new Vuex.Store<State>({
  modules: {
    user,
  },
  plugins: [vuexLocal.plugin],
});
