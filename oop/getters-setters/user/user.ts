class User {
    private _firstName: string = null;
    private _surname: string = null;

    setFirstName(name: string): void {
        this._firstName = name;
    }

    setSurname(surname: string): void {
        this._surname = surname;
    }

    getFullName(name: string): string {
        return this._firstName + ' ' + this._surname;
    }

}
