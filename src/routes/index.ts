import { Router } from "express";
import { productRoutes } from "../module/product/product.router";
import { orderRoutes } from "../module/order/order.router";
import { userRoutes } from "../module/user/user.router";
import { authRouter } from "../module/auth/auth.router";

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
  {
    path:'/users',
    route:userRoutes
  },
  {
    path:'/auths',
    route:authRouter
  }

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;