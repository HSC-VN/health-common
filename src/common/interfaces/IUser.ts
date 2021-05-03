export interface IUser {
    id: string;
    username: string;
    password: string;
    lastName: string;
    firstName: string;
    status: string;
    email: string;
    age: number;
    address: string;
    active: boolean;
    createdBy: string;
    modifiedBy: string;
    createdDate: Date;
    modifiedDate: Date;

    getUserId(): string;

    getUserName(): string;

    getUserEmail(): string;

    getUserPassword(): string;

    getAge(): number;

    getAddress(): string;

    isActive(): boolean;

    getLastName(): string;

    getFirstName(): string;

    getStatus(): string;

    getCreatedDate(): Date;

    getModifiedDate(): Date;

    setUserName(username: string): void;

    setUserEmail(email: string): void;

    setUserPassword(password: string): void;

    setAge(age: number): void;

    setAddress(address: string): void;

    setFirstName(firstName: string): void;

    setLastName(lastName: string): void;

    enableUser(active: boolean): void;
}
