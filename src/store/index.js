import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Mock product data
export const products = [
    {
        id: 1,
        name: "WindMaster Pro 5000W",
        description: "High-performance residential wind generator with advanced blade technology",
        price: 2499.99,
        originalPrice: 2999.99,
        image: "/images/WindMaster Pro 5000W.jpg",
        category: "residential",
        wattage: 5000,
        features: ["Smart monitoring", "Weather resistant", "Low noise", "Easy installation"],
        specs: {
            powerOutput: "5000W",
            rotorDiameter: "4.2m",
            startWindSpeed: "3 m/s",
            ratedWindSpeed: "12 m/s",
            maxWindSpeed: "25 m/s",
            weight: "85kg",
            height: "12m"
        },
        inStock: true,
        rating: 4.8,
        reviews: 127
    },
    {
        id: 2,
        name: "EcoWind Home 3000W",
        description: "Compact residential wind turbine perfect for small properties",
        price: 1599.99,
        originalPrice: 1899.99,
        image: "/images/EcoWind Home 3000W.jpg",
        category: "residential",
        wattage: 3000,
        features: ["Compact design", "Plug & play", "Mobile app control", "5-year warranty"],
        specs: {
            powerOutput: "3000W",
            rotorDiameter: "3.1m",
            startWindSpeed: "2.5 m/s",
            ratedWindSpeed: "10 m/s",
            maxWindSpeed: "20 m/s",
            weight: "65kg",
            height: "9m"
        },
        inStock: true,
        rating: 4.6,
        reviews: 89
    },
    {
        id: 3,
        name: "Industrial WindForce 10000W",
        description: "Commercial-grade wind generator for farms and businesses",
        price: 5499.99,
        originalPrice: 6499.99,
        image: "/images/Industrial WindForce 10000W.jpg",
        category: "commercial",
        wattage: 10000,
        features: ["Industrial grade", "High efficiency", "Remote monitoring", "Extended warranty"],
        specs: {
            powerOutput: "10000W",
            rotorDiameter: "6.8m",
            startWindSpeed: "2.8 m/s",
            ratedWindSpeed: "14 m/s",
            maxWindSpeed: "30 m/s",
            weight: "180kg",
            height: "18m"
        },
        inStock: true,
        rating: 4.9,
        reviews: 203
    },
    {
        id: 4,
        name: "Portable WindMini 1000W",
        description: "Portable wind generator for camping and emergency power",
        price: 799.99,
        originalPrice: 999.99,
        image: "/images/Portable WindMini 1000W.jpg",
        category: "portable",
        wattage: 1000,
        features: ["Portable", "Quick setup", "USB charging", "Lightweight"],
        specs: {
            powerOutput: "1000W",
            rotorDiameter: "1.8m",
            startWindSpeed: "4 m/s",
            ratedWindSpeed: "8 m/s",
            maxWindSpeed: "15 m/s",
            weight: "25kg",
            height: "4m"
        },
        inStock: true,
        rating: 4.4,
        reviews: 156
    },
    {
        id: 5,
        name: "WindFarm Pro 15000W",
        description: "Large-scale wind generator for wind farms and utilities",
        price: 8999.99,
        originalPrice: 10999.99,
        image: "/images/WindFarm Pro 15000W.jpg",
        category: "commercial",
        wattage: 15000,
        features: ["Grid integration", "Advanced analytics", "Predictive maintenance", "Scalable"],
        specs: {
            powerOutput: "15000W",
            rotorDiameter: "8.5m",
            startWindSpeed: "3.2 m/s",
            ratedWindSpeed: "16 m/s",
            maxWindSpeed: "35 m/s",
            weight: "280kg",
            height: "24m"
        },
        inStock: false,
        rating: 4.7,
        reviews: 67
    },
    {
        id: 6,
        name: "SmartWind Connect 7500W",
        description: "IoT-enabled wind generator with smart home integration",
        price: 3499.99,
        originalPrice: 3999.99,
        image: "/images/SmartWind Connect 7500W.jpg",
        category: "residential",
        wattage: 7500,
        features: ["IoT enabled", "Smart home integration", "AI optimization", "Cloud monitoring"],
        specs: {
            powerOutput: "7500W",
            rotorDiameter: "5.2m",
            startWindSpeed: "2.8 m/s",
            ratedWindSpeed: "13 m/s",
            maxWindSpeed: "28 m/s",
            weight: "120kg",
            height: "15m"
        },
        inStock: true,
        rating: 4.8,
        reviews: 94
    }
];

// Cart store
export const useCartStore = create(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product, quantity = 1) => {
                set((state) => {
                    const existingItem = state.items.find(item => item.id === product.id);
                    if (existingItem) {
                        return {
                            items: state.items.map(item =>
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + quantity }
                                    : item
                            )
                        };
                    }
                    return {
                        items: [...state.items, { ...product, quantity }]
                    };
                });
            },
            removeItem: (productId) => {
                set((state) => ({
                    items: state.items.filter(item => item.id !== productId)
                }));
            },
            updateQuantity: (productId, quantity) => {
                set((state) => ({
                    items: state.items.map(item =>
                        item.id === productId
                            ? { ...item, quantity: Math.max(0, quantity) }
                            : item
                    ).filter(item => item.quantity > 0)
                }));
            },
            clearCart: () => set({ items: [] }),
            getTotal: () => {
                const { items } = get();
                return items.reduce((total, item) => total + (item.price * item.quantity), 0);
            },
            getItemCount: () => {
                const { items } = get();
                return items.reduce((count, item) => count + item.quantity, 0);
            }
        }),
        {
            name: 'wind-electric-cart',
        }
    )
);

// Auth store
export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: (userData) => {
                // Simulate API call
                setTimeout(() => {
                    set({
                        user: userData,
                        isAuthenticated: true
                    });
                }, 1000);
            },
            logout: () => {
                set({
                    user: null,
                    isAuthenticated: false
                });
            },
            register: (userData) => {
                // Simulate API call
                setTimeout(() => {
                    set({
                        user: userData,
                        isAuthenticated: true
                    });
                }, 1000);
            }
        }),
        {
            name: 'wind-electric-auth',
        }
    )
);

// Theme store
export const useThemeStore = create(
    persist(
        (set) => ({
            isDark: false,
            toggleTheme: () => {
                set((state) => {
                    const newTheme = !state.isDark;
                    // Update DOM class
                    if (newTheme) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                    return { isDark: newTheme };
                });
            },
            setTheme: (isDark) => {
                set({ isDark });
                if (isDark) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
        }),
        {
            name: 'wind-electric-theme',
        }
    )
);

// Filter store
export const useFilterStore = create((set) => ({
    filters: {
        category: 'all',
        minPrice: 0,
        maxPrice: 10000,
        minWattage: 0,
        maxWattage: 20000,
        inStock: false,
        rating: 0
    },
    sortBy: 'featured',
    setFilters: (newFilters) => set((state) => ({
        filters: { ...state.filters, ...newFilters }
    })),
    setSortBy: (sortBy) => set({ sortBy }),
    resetFilters: () => set({
        filters: {
            category: 'all',
            minPrice: 0,
            maxPrice: 10000,
            minWattage: 0,
            maxWattage: 20000,
            inStock: false,
            rating: 0
        },
        sortBy: 'featured'
    })
})); 