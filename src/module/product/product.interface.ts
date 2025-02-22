interface IProduct {
    name: string;
    brand: string;
    price: number;
    discountPrice:number | null | undefined;
    category: string;
    description: string;
    quantity: number;
    isDeleted:boolean;
    inStock: boolean;
} 

export default IProduct
