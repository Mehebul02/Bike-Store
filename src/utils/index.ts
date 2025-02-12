import { Router } from "express";
import { productRoutes } from "../module/product/product.router";
import { orderRoutes } from "../module/order/order.router";

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: productRoutes,
  },
  {
    path: '/orders',
    route: orderRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;