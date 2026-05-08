import { api } from "@/lib/api";
import { EmployeePayload, VerifiedEmployeeResponse } from "./types";


export const verifyEmployee = async ( payload: EmployeePayload ): Promise<VerifiedEmployeeResponse> => {
    const res = await api.post<VerifiedEmployeeResponse>("/employees/verify", payload);
    return res.data;
};