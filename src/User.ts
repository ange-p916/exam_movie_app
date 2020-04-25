import { Role } from './Role';

export class User {
    role: Role;
    name: string;

    constructor(role, name)
    {
        this.role = role;
        this.name = name;
    }

}