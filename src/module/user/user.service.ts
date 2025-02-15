import httpStatus from 'http-status';
import { IUser } from './user.interface'
import { User } from './user.model';
import AppError from '../../app/errors/AppError';
import IAdmin from '../product/admin/admin.interface';
import config from '../../config';
import mongoose from 'mongoose';
import { generateAdminId } from './user.constants';
import { Admin } from '../product/admin/admin.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  payload.role = 'admin';
  const result = await User.create(payload)
  return result
}



const getUser = async () => {
  const result = await User.find()
  return result
}

const getSingleUser = async (id: string) => {
  //   const result = await User.findOne({name:"habi jabi"})
  const result = await User.findById(id)
  return result
}

const updateUser = async (id: string, data: IUser) => {
  const result = await User.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id)
  return result
}

const createAdminIntoDB = async (
  file: any,
  password: string,
  payload: IAdmin,
) => {
  // create a user object
  const userData: Partial<IUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'admin';
  //set admin email
  userData.email = payload.email;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    // if (file) {
    //   const imageName = `${userData.id}${payload?.name?.firstName}`;
    //   const path = file?.path;
    //   //send image to cloudinary
    //   const { secure_url } = await sendImageToCloudinary(imageName, path);
    //   payload.profileImg = secure_url as string;
    // }

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    //create a admin
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a admin (transaction-2)
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const userService = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
  createAdminIntoDB
}