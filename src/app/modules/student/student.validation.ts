import { z } from "zod";

const userNameValidationSchema = z.object({
    firstName: z.string().nonempty({ message: "First name is required" }),
    middleName: z.string().optional(),
    lastName: z.string().nonempty({ message: "Last name is required" }),
});

const guardianValidationSchema = z.object({
    fatherName: z.string().nonempty({ message: "Father's name is required" }),
    fatherOccupation: z.string().nonempty({ message: "Father's occupation is required" }),
    fatherContactNo: z.string().nonempty({ message: "Father's contact number is required" }),
    motherName: z.string().nonempty({ message: "Mother's name is required" }),
    motherOccupation: z.string().nonempty({ message: "Mother's occupation is required" }),
    motherContactNo: z.string().nonempty({ message: "Mother's contact number is required" }),
});

const localGuardianValidationSchema = z.object({
    name: z.string().nonempty({ message: "Local guardian's name is required" }),
    occupation: z.string().nonempty({ message: "Local guardian's occupation is required" }),
    contactNo: z.string().nonempty({ message: "Local guardian's contact number is required" }),
    address: z.string().nonempty({ message: "Local guardian's address is required" }),
});

const studentValidationSchema = z.object({
    id: z.string().optional(),
    name: userNameValidationSchema,
    gender: z.enum(['male', 'female'], { message: "Gender must be either 'male' or 'female'" }),
    dateOfBirth: z.string().nonempty({ message: "Date of Birth is required" }),
    email: z.string().nonempty({ message: "Email is required" }).email({ message: "Invalid email format" }),
    contactNo: z.string().nonempty({ message: "Contact number is required" }),
    emergencyContactNo: z.string().nonempty({ message: "Emergency contact number is required" }),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], { message: "Invalid blood group" }),
    presentAddress: z.string().nonempty({ message: "Present address is required" }),
    permanentAddress: z.string().nonempty({ message: "Permanent address is required" }),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema.optional(),
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'blocked'], { message: "Status must be either 'active' or 'blocked'" }),
});


export default studentValidationSchema;