"use client";

import { FaRegUser } from "react-icons/fa";
import { IdCard, ArrowBigRight, LockKeyhole } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEmployeeReportStore } from "@/features/user-report/store";

import {
  employeeVerificationSchema,
  type EmployeeVerificationFormData,
} from "@/features/user-report/schema";
import { verifyEmployee } from "@/features/user-report/api";
import { useVerifyEmployee } from "@/features/user-report/mutations";

export default function IdentificationForm() {

    const router = useRouter();
    const verifyEmployee = useVerifyEmployee();
    const setVerifiedEmployee = useEmployeeReportStore((state) => state.setVerifiedEmployee);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EmployeeVerificationFormData>({
    resolver: zodResolver(employeeVerificationSchema),
    defaultValues: {
      matricule: "",
    },
  });

  const onSubmit = (formData: EmployeeVerificationFormData) => {
    verifyEmployee.mutate(
        {matricule: formData.matricule},
        {
            onSuccess: (data) => {
                if (!data.exists) {
                    setError("matricule", {
                        message: "Matricule introuvable.",
                    });
                    return;
                }

                if (!data.allowed) {
                    setError("matricule", {
                        message: "Cet employé est inactif.",
                    });
                    return;
                }

                if (!data.verification_token || !data.employee) {
                    setError("matricule", {
                        message: "Réponse invalide du serveur.",
                    });
                    return;
                }

                setVerifiedEmployee({
                    verificationToken: data.verification_token,
                    employee: data.employee,
                });

                router.push("/risk-types");
            },

            onError: () => {
                setError("matricule", {
                    message: "Une erreur est survenue. Veuillez réessayer.",
                });
            },
        }
    )
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-2xl md:p-5"
    >
      <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-3 md:gap-4 md:rounded-xl md:p-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-200 md:h-14 md:w-14">
          <FaRegUser className="h-5 w-5 text-primary md:h-6 md:w-6" />
        </div>

        <div>
          <p className="font-inter text-base font-semibold text-primary md:text-lg">
            Identification requise
          </p>
          <p className="text-xs text-gray-500 md:text-sm">
            Entrez votre numéro de matricule pour accéder au système
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2 md:mt-6">
        <label
          htmlFor="matricule"
          className="text-sm font-medium text-gray-800 md:text-base"
        >
          N° de Matricule
        </label>

        <div
          className={`flex h-12 overflow-hidden rounded-lg border bg-white transition-all duration-200 focus-within:ring-4 md:h-14 ${
            errors.matricule
              ? "border-red-500 focus-within:ring-red-100"
              : "border-gray-300 focus-within:border-primary focus-within:ring-primary/10"
          }`}
        >
          <div className="flex h-full w-12 shrink-0 items-center justify-center bg-blue-50 md:w-14">
            <IdCard className="h-5 w-5 text-primary md:h-6 md:w-6" />
          </div>

          <input
            id="matricule"
            type="text"
            placeholder="Entrez votre numéro de matricule"
            className="h-full flex-1 border-none bg-transparent px-3 text-sm uppercase text-gray-800 outline-none placeholder:normal-case placeholder:text-gray-400 md:px-4 md:text-base"
            {...register("matricule", {
              setValueAs: (value) => value.trim().toUpperCase(),
            })}
          />
        </div>

        {errors.matricule && (
          <p className="text-sm font-medium text-red-500">
            {errors.matricule.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-base font-medium text-white transition-all duration-200 hover:bg-primary/90 active:scale-[0.98] md:mt-6 md:h-14 md:text-lg cursor-pointer"
      >
        S&apos;identifier
        <ArrowBigRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <div className="mt-3 flex items-center justify-center gap-2 text-center text-xs font-medium text-gray-500 md:mt-4 md:text-sm">
        <LockKeyhole className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
        <p>Vos informations sont sécurisées et confidentielles</p>
      </div>
    </form>
  );
}