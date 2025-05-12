import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const [cartItems, setCartItems] = useState(storedCart);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const updateQuantity = (productId, delta) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const addToCart = (product) => {
        const originalPrice = parseFloat(product.price) || 0;
        const promotion = parseFloat(product.promotion) || 0;

        const discountedPrice = promotion
            ? originalPrice - (originalPrice * promotion) / 100
            : originalPrice;

        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1,
                    originalPrice,
                    finalPrice: parseFloat(discountedPrice.toFixed(2)),
                },
            ];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                updateQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
