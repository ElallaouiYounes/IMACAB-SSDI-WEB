import { useMutation } from "@tanstack/react-query";
import { verifyEmployee } from "./api";

export const useVerifyEmployee = () => {
    return useMutation({
        mutationFn: verifyEmployee,
    });
};