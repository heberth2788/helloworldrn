import { create } from 'zustand';

// 1. Define the state
type CounterState = {
    count: number;
    setCounter: (num: number) => void;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    name: string;
    putName: (newName: string) => void;
}

// 2. Create the store (hook-based)
export const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    setCounter: (num) => set((state) => ({ count: num })),
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })), 
    reset: () => set((state) => ({ count: 0 })),
    name: '',
    putName: (newName) => set((state) => ({ name: newName }))
}));
