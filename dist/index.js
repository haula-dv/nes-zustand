"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getZustandValue = exports.setZustandValue = exports.createZustandStore = void 0;
const zustand_1 = require("zustand");
// Define a generic store creator function
const createZustandStore = ({ key, default: defaultValue, }) => {
    const store = (0, zustand_1.create)((set, get) => ({
        key,
        value: defaultValue,
        setValue: (newValue) => {
            set({ value: newValue });
        },
        getValue: () => get().value,
    }));
    return store;
};
exports.createZustandStore = createZustandStore;
// Generic setter function
const setZustandValue = (store, newValue) => {
    store.setState({ value: newValue });
};
exports.setZustandValue = setZustandValue;
// Generic getter function
const getZustandValue = (store) => {
    return store.getState().value;
};
exports.getZustandValue = getZustandValue;
