import {atom, selector} from "recoil"

export const todoAtom = atom({
    key: 'todoAtom',
    default: []
})
export const todoListState = atom({
    key: 'todoListState',
    default: ''
})

export const filtertodo = selector({
    key: 'filtertodo',
    get: ({get}) => {
        const todos = get(todoAtom);
        const list = get(todoListState);
        return todos.filter((todo) => todo.title.includes(list) || todo.description.includes(list))
    }
})