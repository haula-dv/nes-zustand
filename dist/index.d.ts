import { StoreApi, UseBoundStore } from 'zustand';
interface ZustandState<T> {
    key: string;
    value: T;
    setValue: (newValue: T) => void;
    getValue: () => T;
}
export declare const createZustandStore: <T>({ key, default: defaultValue, }: {
    key: string;
    default: T;
}) => UseBoundStore<StoreApi<ZustandState<T>>>;
export declare const setZustandValue: <T>(store: UseBoundStore<StoreApi<ZustandState<T>>>, newValue: T) => void;
export declare const getZustandValue: <T>(store: UseBoundStore<StoreApi<ZustandState<T>>>) => T;
export {};
//# sourceMappingURL=index.d.ts.map