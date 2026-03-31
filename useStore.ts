import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Car } from "@/data/cars";

export interface CartItem {
  car: Car;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  favorites: number[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: number) => void;
  updateQuantity: (carId: number, quantity: number) => void;
  clearCart: () => void;
  toggleFavorite: (carId: number) => void;
  isFavorite: (carId: number) => boolean;
  cartTotal: () => number;
  cartCount: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      favorites: [],

      addToCart: (car) =>
        set((state) => {
          const existing = state.cart.find((item) => item.car.id === car.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.car.id === car.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { car, quantity: 1 }] };
        }),

      removeFromCart: (carId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.car.id !== carId),
        })),

      updateQuantity: (carId, quantity) =>
        set((state) => ({
          cart:
            quantity <= 0
              ? state.cart.filter((item) => item.car.id !== carId)
              : state.cart.map((item) =>
                  item.car.id === carId ? { ...item, quantity } : item
                ),
        })),

      clearCart: () => set({ cart: [] }),

      toggleFavorite: (carId) =>
        set((state) => ({
          favorites: state.favorites.includes(carId)
            ? state.favorites.filter((id) => id !== carId)
            : [...state.favorites, carId],
        })),

      isFavorite: (carId) => get().favorites.includes(carId),

      cartTotal: () =>
        get().cart.reduce(
          (total, item) => total + item.car.price * item.quantity,
          0
        ),

      cartCount: () =>
        get().cart.reduce((count, item) => count + item.quantity, 0),
    }),
    { name: "elite-motors-store" }
  )
);
