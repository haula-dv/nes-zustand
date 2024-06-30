import { StoreApi, UseBoundStore, create } from 'zustand'

interface ZustandState<T> {
  key: string
  value: T
  setValue: (newValue: T) => void
  getValue: () => T
}


// Define a generic store creator function
export const createZustandStore = <T,>({
  key,
  default: defaultValue,
}: {
  key: string
  default: T
}) => {
  const store: UseBoundStore<StoreApi<ZustandState<T>>> = create<ZustandState<T>>((set, get) => ({
    key,
    value: defaultValue,
    setValue: (newValue: T) => {
      set({ value: newValue })
    },
    getValue: () => get().value,
  }))

  return store
}

// Generic setter function
export const setZustandValue = <T,>(
  store: UseBoundStore<StoreApi<ZustandState<T>>>,
  newValue: T
) => {
  store.setState({ value: newValue})
}

// Generic getter function
export const getZustandValue = <T,>(store: UseBoundStore<StoreApi<ZustandState<T>>>): T => {
    return store.getState().value
}
