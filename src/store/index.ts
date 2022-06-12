import { InjectionKey } from "vue";
import {createStore, useStore as baseUseSotre, Store} from 'vuex';
import { ITable } from "./type";
export interface State{
    count: number,
    collapse: boolean,
    tabsList: Array<ITable>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0,
        collapse: false,
        tabsList: []
    },
    mutations: {
        setCount: (state: State, count: number) => state.count = count,
        setCollapse: (state: State, collapse: boolean) => state.collapse = collapse,
        setTabsList: (state: State, tabsList: Array<ITable>) => state.tabsList = tabsList,
        addTab: (state: State, tab: ITable) => {
            if (state.tabsList.some(item => item.path === tab.path)) return;
            state.tabsList.push(tab)
        }
    },
    getters: {
        getCount: (state: State) => state.count,
        getCollapse: (state: State) => state.collapse,
        getTabsList: (state: State) => state.tabsList
    }
})

export function useStore() {
    return baseUseSotre(key)
}