export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
   
}
// child of parent
export class Cat extends Animal {
    constructor(data: {age: number, legs: number, name: string}) {
        super(data.age, data.legs, data.name);
    }
    meow(): string {
        return 'Meow HISS! HISS!';
    }
}
// shape of parent
export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

        woof(): string {
            return 'Woof WOOF!';
        }

}

const dog = new Dog();
const cat = new Cat({age: 2, legs: 4, name: 'Mittens'});

console.log(dog instanceof Animal)


// Generics

export class User <T> {
    name: string;
    age: number;
    email: string;
    isMale: boolean;
    
    public classicUserData: T;
    
    public mergeClassicUser(params: T): void {
        const { name, isMale, age, email } = this;
        this.classicUserData = { name, isMale, age, email, ...params};
    }
}

interface ClassicUser {
    name: { first: string, last: string };
}

interface ClassicUser2 {
    name: { first: string, middle: string, last:string };
}
const user1 = new User<ClassicUser>();
user1.mergeClassicUser({ name: { first: 'John', last: 'Doe' } });

