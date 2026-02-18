import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, Order } from '../types';

interface StoreState {
    // Cart
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;

    // Orders (Admin)
    orders: Order[];
    addOrder: (order: Order) => void;
    updateOrderStatus: (orderId: string, status: Order['status']) => void;

    // Admin Auth
    isAdminLoggedIn: boolean;
    loginAdmin: () => void;
    logoutAdmin: () => void;
}

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            // Cart Logic
            cart: [],
            addToCart: (product) =>
                set((state) => {
                    const existingItem = state.cart.find((item) => item.id === product.id);
                    if (existingItem) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    return { cart: [...state.cart, { ...product, quantity: 1 }] };
                }),
            removeFromCart: (productId) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== productId),
                })),
            updateQuantity: (productId, quantity) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
                    ).filter(item => item.quantity > 0), // Remove if quantity becomes 0
                })),
            clearCart: () => set({ cart: [] }),

            // Order Logic
            orders: [],
            addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
            updateOrderStatus: (orderId, status) =>
                set((state) => ({
                    orders: state.orders.map((order) =>
                        order.id === orderId ? { ...order, status } : order
                    ),
                })),

            // Admin Auth Logic
            isAdminLoggedIn: false,
            loginAdmin: () => set({ isAdminLoggedIn: true }),
            logoutAdmin: () => set({ isAdminLoggedIn: false }),
        }),
        {
            name: 'feduzzi-store', // key in localStorage
        }
    )
);
