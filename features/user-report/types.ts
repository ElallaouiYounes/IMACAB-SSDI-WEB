export interface VerifiedEmployee {
    fullname: string,
    matricule: string,
}

export interface VerifiedEmployeeResponse {
    exists: boolean,
    allowed: boolean,
    message: string,
    verification_token?: string,
    employee?: VerifiedEmployee
}

export interface EmployeePayload {
    matricule: string,
}