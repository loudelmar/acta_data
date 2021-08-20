import { Role } from "./role";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    dni: string;
    role: Role;
    token?: string;
}