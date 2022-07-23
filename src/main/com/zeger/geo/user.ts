class User {

    private _firstName: String;
    private _lastname: string;
    private _age: number;
    private _position: Position

    constructor(firstName: string, lastName: string, age: number, position: Position) {

    }

    get firstName(): String {
        return this._firstName;
    }

    set firstName(value: String) {
        this._firstName = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get position(): Position {
        return this._position;
    }

    set position(value: Position) {
        this._position = value;
    }

}

const enum Position {
    BACKEND = "Backend Developer",
    FRONTEND = "Frontend developer",
    FULLSTACK = "Fullstack developer"
}

function createDefaultUser(position: Position): User {
    const user = new User(
        "Pavel",
        "Zeger",
        41,
        null
    );
    setUserPosition(position, user);
    return user;
}

function setUserPosition(position: Position, user: User) {
    switch (position) {
        case Position.BACKEND:
            user.position = position;
            break;
        case Position.FRONTEND:
            user.position = position;
            break;
        case Position.FULLSTACK:
            user.position = position;
            break;
        default:
            user.position = Position.BACKEND;
            break;
    }
}
