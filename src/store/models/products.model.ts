
export interface ProductsStoreState {
    cart: CartProduct[];
    categories: Category[];
    products: Product[];
}


export interface Product {
    img: string;
    id: Number,
    name: String,
    price: Number,
    description: String,
    category: Category['name'],
};

export interface CartProduct extends Product {
    productRecurrence: number;
}

export interface Category {
    name: string;
    imgSrc: string;
    products: Product[];
}
