import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"; 

interface EmployeeReportState {
    hasHydrated: boolean;

    isVerified: boolean;
    isAllowed: boolean;
    verificationToken: string | null;
    employee: string | null;

    riskTypeId: number | null;
    incidentItemId: number | null;
    zoneId: number | null;

    setHasHydrated: (value: boolean) => void;

    setVerifiedEmployee: (data: {
        verificationToken: string;
        employee: string;
    }) => void;

    setRiskTypeId: (id: number) => void;
    setIncidentItemId: (id: number) => void;
    setZoneId: (id: number) => void;
    resetReport: () => void;
}

/**  THIS ZUSTAND STORE HANDLE ALL STATE OF (SSDI) STARTING FROM EMPLOYEE VALIDATION TO SUCCESSFULL INCIDENT REPORT  */
export const useEmployeeReportStore = create<EmployeeReportState>()(
    persist(
        (set) => ({
            hasHydrated: false,
            isVerified: false,
            isAllowed: false,
            verificationToken: null,
            employee: null,

            riskTypeId: null,
            incidentItemId: null,
            zoneId: null,

            setHasHydrated: (value) => set({ hasHydrated: value }),

            setVerifiedEmployee: ({verificationToken, employee}) => set({
                isVerified: true,
                isAllowed: true,
                verificationToken,
                employee, 
            }),

            setRiskTypeId: (id: number) => set({riskTypeId: id}),

            setIncidentItemId: (id: number) => set({incidentItemId: id}),

            setZoneId: (id: number) => set({zoneId: id}),

            resetReport: () => set({
                riskTypeId: null,
                incidentItemId: null,
                zoneId: null
            })
        }),
        {
            name: 'ssdi-employee-report',
            storage: createJSONStorage(() => sessionStorage),

            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
)