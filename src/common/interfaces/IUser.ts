export interface IUser {
    id: string;
    username: string;
    password: string;
    lastName: string;
    firstName: string;
    status: string;
    email: string;
    age: string;
    address: string;
    active: boolean;
    createdBy: string;
    modifiedBy: string;
    createdDate: string;
    modifiedDate: string;

    getUserId(): string;

    getUserName(): string;

    getUserEmail(): string;

    getUserPassword(): string;

    getAge(): string;

    getAddress(): string;

    isActive(): boolean;

    getLastName(): string;

    getFirstName(): string;

    getStatus(): string;

    getCreatedDate(): string;

    getModifiedDate(): string;
    
    setUserName(username: string): void;

    setUserEmail(email: string): void;

    setUserPassword(password: string): void;

    setAge(age: string): void;

    setAddress(address: string): void;

    setFirstName(firstName: string): void;

    setLastName(lastName: string): void;

    enableUser(active: boolean): void;
}