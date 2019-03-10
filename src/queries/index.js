import gql from 'graphql-tag';

export const PIZZA_SIZES_QUERY = gql`
    query pizzaSizesQuery {
        pizzaSizes {
            name
            basePrice
            maxToppings
        }
    }
`;

export function pizzaSizeByName(pizzaSize) {
    const PIZZA_SIZES_BY_NAME_QUERY = gql`
        query pizzaSizeByNameQuery {
            pizzaSizeByName(name: ${pizzaSize}) {
                basePrice,
                name,
                maxToppings,
                toppings {
                    defaultSelected
                    topping {
                        name
                        price
                    }
                }
            }
        }
    `;

    return PIZZA_SIZES_BY_NAME_QUERY;
}
