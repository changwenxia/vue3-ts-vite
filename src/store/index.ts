import { InjectionKey } from "vue";
import {createStore, useStore as baseUseSotre, Store} from 'vuex';

export interface State{
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0
    },
    mutations: {
        setCount: (state: State, count: number) => state.count = count,
    },
    getters: {
        getCount: (state: State) => state.count
    }
})

export function useStore() {
    return baseUseSotre(key)
}