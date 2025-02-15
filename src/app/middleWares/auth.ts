import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TUserRole } from '../../module/user/user.interface';
import catchAsync from '../../utils/catchAsync';
import { User } from '../../module/user/user.model';
import dotenv from 'dotenv';

dotenv.config();

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload & { role: string };
    }
  }
}

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]; // 'Bearer token' থেকে টোকেন কাটা

    if (!token) {
      throw new Error('You are not authorized!');
    }

    // checking if the given token is valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    if (!decoded || !decoded.email || !decoded.role) {
      throw new Error('Invalid token!');
    }

    const { role, email } = decoded;

    // checking if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('This user is not found!');
    }

    // checking role authorization
    if (requiredRoles.length > 0 && !requiredRoles.includes(role as TUserRole)) {
      throw new Error('You are not authorized!');
    }

    req.user = decoded as JwtPayload & { role: string };// Setting the decoded user data in req
    next();
  });
};

export default auth;


// const auth = (...requiredRoles: TUserRole[]) => {
//     return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//       const token = req.headers.authorization;
  
//       // checking if the token is missing
//       if (!token) {
//         throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
//       }
  
//       // checking if the given token is valid
  
//       let decoded;
  
//       try {
//         decoded = jwt.verify(
//           token,
//           config.jwt_access_secret as string,
//         ) as JwtPayload;
  
//       } catch (err) {
//         throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized')
//       }
  
//   console.log(decoded);
  
//       // if(!decoded){
//       //   throw new AppError(httpStatus.UNAUTHORIZED,'You are not authorized')
//       // }
  
//       const { role, userId, iat } = decoded;
  
//       // checking if the user is exist
//       const user = await User.isUserExistsByCustomId(userId);
  
//       if (!user) {
//         throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
//       }
//       // checking if the user is already deleted
  
//       const isDeleted = user?.isDeleted;
  
//       if (isDeleted) {
//         throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
//       }
  
//       // checking if the user is blocked
//       const userStatus = user?.status;
  
//       if (userStatus === 'blocked') {
//         throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
//       }
  
//       if (
//         user.passwordChangedAt &&
//         User.isJWTIssuedBeforePasswordChanged(
//           user.passwordChangedAt,
//           iat as number,
//         )
//       ) {
//         throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
//       }
  
//       if (requiredRoles && !requiredRoles.includes(role)) {
//         throw new AppError(
//           httpStatus.UNAUTHORIZED,
//           'You are not authorized  hi!',
//         );
//       }
  
//       req.user = decoded as JwtPayload & { role: string };
//       next();
//     });
//   };

//   export default auth;