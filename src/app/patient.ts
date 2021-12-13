
import { appt } from "./appt";

export interface Patient {
    appts: appt[],
    pID: number,
    fname: string,
    lname: string,
    address: string,
    phone: string,
    DOB: string,
}

