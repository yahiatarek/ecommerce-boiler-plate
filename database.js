// Sample data for categories and products
const categories = [
    {
        name: "Sofas",
        imgSrc: '/categories/sofas.webp',
        products: [
            { id: 1, name: "Modern Sofa", description: "A comfortable modern sofa", price: 499.99, category: "Sofas", img: '/products/sofa-modern.webp' },
            { id: 2, name: "Classic Sofa", description: "A timeless classic sofa", price: 399.99, category: "Sofas",img: '/products/sofa.webp' },
        ],
    },
    {
        name: 'Bedrooms',
        imgSrc: '/categories/bedrooms.webp',
        products: [
            { id: 3, name: 'King Size Bed', description: 'Spacious and comfortable king size bed.', category: 'Bedrooms', price: 3000,img: '/products/king-size-bed.webp' },
            { id: 4, name: 'King Size Bed 1', description: 'Spacious and comfortable king size bed.', category: 'Bedrooms', price: 4000,img: '/products/king-size-bed.webp' },
        ],
    },
    {
        name: "Living rooms",
        imgSrc: '/categories/living.webp',
        products: [
            { id: 5, name: "Tv Set", description: "Tv set", price: 49.99, category: "Living rooms",img: '/products/tv.webp' },
            { id: 6, name: "Table", description: "Durable non-stick Table", price: 24.99, category: "Living rooms", img: '/products/table.webp' },
        ],
    },
];

module.exports = { categories };
