export abstract class AbstractUser {
    private id: string;
    private username: string;
    private password: string;
    private email: string;

    constructor(id: string, username: string, password: string, email: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public getUserId(): string {
        return this.id;
    }

    public setUserId(value: string) {
        this.id = value;
    }

    public getUserName(): string {
        return this.username;
    }

    public setUserName(value: string) {
        this.username = value;
    }

    public getUserEmail(): string {
        return this.email;
    }

    public setUserEmail(value: string) {
        this.email = value;
    }

    public getUserPassword(): string {
        return this.password;
    }

    public setUserPassword(value: string) {
        this.password = value;
    }

}
