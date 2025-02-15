import { z } from "zod";

// const createUserNameValidationSchema = z.object({
//     firstName: z.string().min(1).max(20),
//     middleName: z.string().max(20),
//     lastName: z.string().max(20),
//   });
  

export const createAdminValidationSchema = z.object({
    body: z.object({
      password: z.string().max(20).optional(),
      admin: z.object({
        name:z.string(),
        email: z.string().email(),
        age: z.number({
            required_error: "Age must be provided and must be a number",
        }).int().positive(),
        photo: z.string({
            required_error: "Photo must be provided and must be a string",
        }).optional(),
        // profileImg: z.string(),
      }),
    }),
  });


  export const AdminValidations = {
    createAdminValidationSchema,
  
  };