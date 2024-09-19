export const categories = [
    {
        name: 'Pizzas',
    },
    {
        name: "Breakfast"
    },
    {
        name: "Snacks"
    },
    {
        name: "Cocktails"
    },
    {
        name: "Drinks"
    }
];

export const ingridients = [
    {
        "name": "Cheese Stuffed Crust",
        "price": 4,
        "imageUrl": '/assets/images/ingredients/cheese-stuffed-crust.png',
    },
    {
        "name": "Creamy Mozzarella",
        "price": 4,
        "imageUrl": "/assets/images/ingredients/creamy-mozzarella.png"
    },
    {
        "name": "Cheddar and Parmesan Cheeses",
        "price": 6,
        "imageUrl": "/assets/images/ingredients/cheddar-and-parmesan-cheeses.png"
    },
    {
        "name": "Spicy Jalapeno Pepper",
        "price": 7,
        "imageUrl": "/assets/images/ingredients/spicy-jalapeno-pepper.png"
    },
    {
        "name": "Tender Chicken",
        "price": 10,
        "imageUrl": "/assets/images/ingredients/tender-chicken.png"
    },
    {
        "name": "Mushrooms",
        "price": 5,
        "imageUrl": "/assets/images/ingredients/mushrooms.png"
    },
    {
        "name": "Bacon",
        "price": 8,
        "imageUrl": "/assets/images/ingredients/bacon.png"
    },
    {
        "name": "Ham",
        "price": 8,
        "imageUrl": "/assets/images/ingredients/ham.png"
    },
    {
        "name": "Spicy Pepperoni",
        "price": 2,
        "imageUrl": "/assets/images/ingredients/spicy-pepperoni.png"
    },
    {
        "name": "Spicy Chorizo",
        "price": 4,
        "imageUrl": "/assets/images/ingredients/spicy-chorizo.png"
    },
    {
        "name": "Pickles",
        "price": 4,
        "imageUrl": "/assets/images/ingredients/pickles.png"
    },
    {
        "name": "Fresh Tomatoes",
        "price": 3,
        "imageUrl": "/assets/images/ingredients/fresh-tomatoes.png"
    },
    {
        "name": "Red Onion",
        "price": 2,
        "imageUrl": "/assets/images/ingredients/red-onion.png"
    },
    {
        "name": "Juicy Pineapples",
        "price": 5,
        "imageUrl": "/assets/images/ingredients/juicy-pineapples.png"
    },
    {
        "name": "Italian Herbs",
        "price": 4,
        "imageUrl": "/assets/images/ingredients/italian-herbs.png"
    },
    {
        "name": "Sweet Pepper",
        "price": 3,
        "imageUrl": "/assets/images/ingredients/sweet-pepper.png"
    },
    {
        "name": "Feta Cheese Cubes",
        "price": 6,
        "imageUrl": "/assets/images/ingredients/feta-cheese-cubes.png"
    },
    {
        "name": "Meatballs",
        "price": 9,
        "imageUrl": "/assets/images/ingredients/meatballs.png"
    }
].map((obj, index) => ({ id: index + 1, ...obj }));


export const products = [
    {
        "name": "Omelette with Ham and Mushrooms",
        "imageUrl": "/assets/images/products/omelette-with-ham-and-mushrooms.webp",
        "categoryId": 2
    },
    {
        "name": "Omelette with Pepperoni",
        "imageUrl": "/assets/images/products/omelette-with-pepperoni.webp",
        "categoryId": 2
    },
    {
        "name": "Latte Coffee",
        "imageUrl": "/assets/images/products/latte-coffee.webp",
        "categoryId": 2
    },
    {
        "name": "Sanwich with Ham and Cheese",
        "imageUrl": "/assets/images/products/sandwich-with-ham-and-cheese.webp",
        "categoryId": 3
    },
    {
        "name": "Chicken Nuggets",
        "imageUrl": "/assets/images/products/chicken-nuggets.webp",
        "categoryId": 3
    },
    {
        "name": "Oven Potatoes with Sauce 🌱",
        "imageUrl": "/assets/images/products/oven-potatoes-with-sauce.webp",
        "categoryId": 3
    },
    {
        "name": "Dodster",
        "imageUrl": "/assets/images/products/dodster.webp",
        "categoryId": 3
    },
    {
        "name": "Spicy Dodster 🌶️🌶️",
        "imageUrl": "/assets/images/products/spicy-dodster.webp",
        "categoryId": 3
    },
    {
        "name": "Banana Milkshake",
        "imageUrl": "/assets/images/products/banana-milkshake.webp",
        "categoryId": 4
    },
    {
        "name": "Caramel Apple Milkshake",
        "imageUrl": "/assets/images/products/caramel-apple-milkshake.webp",
        "categoryId": 4
    },
    {
        "name": "Oreo Cookie Milkshake",
        "imageUrl": "/assets/images/products/oreo-cookie-milkshake.webp",
        "categoryId": 4
    },
    {
        "name": "Classic Milkshake 👶",
        "imageUrl": "/assets/images/products/classic-milkshake.webp",
        "categoryId": 4
    },
    {
        "name": "Irish Cappuccino",
        "imageUrl": "/assets/images/products/irish-cappuccino.webp",
        "categoryId": 5
    },
    {
        "name": "Caramel Cappuccino",
        "imageUrl": "/assets/images/products/caramel-cappuccino.webp",
        "categoryId": 5
    },
    {
        "name": "Coconut Latte",
        "imageUrl": "/assets/images/products/coconut-latte.webp",
        "categoryId": 5
    },
    {
        "name": "Americano Coffee",
        "imageUrl": "/assets/images/products/americano-coffee.webp",
        "categoryId": 5
    },
    {
        "name": "Latte Coffee",
        "imageUrl": "/assets/images/products/latte-coffee.webp",
        "categoryId": 5
    }
];
