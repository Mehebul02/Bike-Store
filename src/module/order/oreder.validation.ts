

import { z } from "zod";

const orderSchema = z.object({
  email: z.string().email("Invalid email address"),
  product: z.string().min(1, "Product ID is required"),
  quantity: z.number().int().min(1, "Quantity must be at least 1"),
  totalPrice: z.number().min(0, "Total price must be a positive number"),
});

export default orderSchema;
