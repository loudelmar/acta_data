import { Role } from "./role";

export class User {
    id: number;
    dni: string;
    role: Role;
    token?: string;
}