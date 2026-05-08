import {z} from "zod"

export const employeeVerificationSchema = z.object({
    matricule: z.string().trim().min(10, "Veuillez entrer votre matricule.")
})

export type EmployeeVerificationFormData = z.infer<
    typeof employeeVerificationSchema
>;