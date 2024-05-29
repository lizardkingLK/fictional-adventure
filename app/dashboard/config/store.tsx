import { create } from "zustand";

type SliderState = { slider: boolean; setSlider: (state: boolean) => void };

const useStore = create<SliderState>(
  (
    set: (arg0: (state: { slider: boolean }) => { slider: boolean }) => any,
  ) => ({
    slider: true,
    setSlider: () =>
      set((state: { slider: boolean }) => ({ slider: state.slider })),
  }),
);

export default useStore;
