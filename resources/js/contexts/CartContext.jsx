import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const [cartItems, setCartItems] = useState(storedCart);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const updateQuantity = (itemId, type, delta) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === itemId && item.type === type
                        ? { ...item, quantity: item.quantity + delta }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const addToCart = (productOrMenu, type = "menu") => {
        const originalPrice = parseFloat(productOrMenu.price) || 0;
        const promotion = parseFloat(productOrMenu.promotion) || 0;

        const discountedPrice = promotion
            ? originalPrice - (originalPrice * promotion) / 100
            : originalPrice;

        setCartItems((prev) => {
            const existing = prev.find(
                (item) => item.id === productOrMenu.id && item.type === type
            );

            if (existing) {
                return prev.map((item) =>
                    item.id === productOrMenu.id && item.type === type
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prev,
                {
                    ...productOrMenu,
                    quantity: 1,
                    originalPrice,
                    finalPrice: parseFloat(discountedPrice.toFixed(2)),
                    type, // "menu" or "product"
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
