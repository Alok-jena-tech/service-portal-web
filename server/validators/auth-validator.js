const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email" })
    .min(5, { message: "min 5 char in email" })
    .max(35, { message: "max 15 char in email" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(3, { message: "password  must be required in 3 cher" })
    .max(15, { message: "password can't be more then 15 char" }),
});
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(5, { message: "name must be at least 5 cher" })
    .max(15, { message: "name must not be more then 15 char" }),

  phone: z
    .string({ required_error: "phone no is invalid" })
    .trim()
    .min(10, { message: "min phone number is 10" })
    .max(15, { message: "max phone number is 15" }),
});

module.exports = {loginSchema,signupSchema};
