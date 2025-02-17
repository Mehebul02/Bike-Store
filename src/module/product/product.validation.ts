import { z } from "zod";

const productValidationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    brand: z.string().min(1, "Brand is required"),
    price: z.number().min(0, "Price must be a positive number"),
    discountPrice: z.number().optional(),
    // .refine((val, ctx) => {
    //     if (val !== undefined && ctx.parent.price !== undefined && val >= ctx.parent.price) {
    //         return false;
    //     }
    //     return true;
    // }, { message: "Discount price must be lower than actual price" }),
    category: z.enum(["Mountain", "Road", "Hybrid", "Electric"]),
    description: z.string().min(1, "Description is required"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    inStock: z.boolean(),
    images: z.array(z.string()).default([]),
    // ratings: z.number().min(0, "Rating must be at least 0").max(5, "Rating must be at most 5").default(0),
    // reviews: z.array(z.object({
    //     user: z.string(),
    //     comment: z.string().optional(),
    //     rating: z.number().min(0).max(5),
    //     createdAt: z.date().default(new Date()),
    // })).default([]),
    slug: z.string().min(1, "Slug is required"),
    tags: z.array(z.string()).default([]),
    createdAt: z.date().default(new Date()),
    updatedAt: z.date().default(new Date()),
});

export default productValidationSchema;
