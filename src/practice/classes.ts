/**
 * ----------------------------------------------------------------
 * Challenge 1: Classes
 * ----------------------------------------------------------------
 * 1. Create a User class.
 * 2. Add a firstName, lastName, and email property 
 * 3. Add a get to return fullname 
 * 4. Add a method to check if your email param matches the user's current email. 
 * 
 * 
 */

class User {
    fistName: string;
    lastName: string;
    email: string;  
     
    get fullname(): string {
        return `${this.fistName} ${this.lastName}`;
    }

    doesEmailMatch(email: string): boolean {
        return this. email === email; 
    }
}