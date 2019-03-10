export const firstLetterCapitalized = string => {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
};

export const formatPrice = num => {
    return parseFloat(num.toFixed(2));
};

// Calculates pizza price including the default selected toppings
export const getInitialPrice = (basePrice, toppings) => {
    return formatPrice(basePrice + toppings.reduce((total, topping) => total + topping.price, 0));
};

export const calculateTotal = cartItems => {
    return formatPrice(cartItems.reduce((total, item) => total + item.total, 0));
};

export const getDefaultToppings = toppings => {
    return toppings.reduce((selected, toppingData) => {
        const { defaultSelected, topping } = toppingData;

        if (defaultSelected) {
            selected.push(topping);
        }

        return selected;
    }, []);
};

export const toppingIsSelected = (selectedToppings, toppingName) => {
    return selectedToppings.some(({ name }) => name === toppingName);
};
