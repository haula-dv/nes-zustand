// types/index.d.ts

// Import Zustand types if needed
import { StoreApi, UseBoundStore } from 'zustand';

// Define the types of your module
export type NesZustandValueType<T> = {
  key: string;
  value: T;
  setValue: (newValue: T) => void;
  getValue: () => T;
};

// Define the store creator function type
export function createNesZustandStore<T>(options: { key: string; default: T }): UseBoundStore<StoreApi<NesZustandValueType<T>>>;

// Define the setter function type
export function setNesZustand<T>(store: UseBoundStore<StoreApi<NesZustandValueType<T>>>, newValue: T): void;

// Define the getter function type
export function getNesZustand<T>(store: UseBoundStore<StoreApi<NesZustandValueType<T>>>): T;
