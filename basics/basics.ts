// Typing variables
let x = 1; 
let y: number = 1;

// Functions with types
function f(a: number, b: number[]): number[] {
    b.unshift(a);
    return b;
}

// The type of a function
let fn: (arg: number, anotherArg: number) => string;

fn = function(arg: number, anotherArg: number) {
    return arg.toString();
}

console.log(fn(1,2));

// Union types
let z: number | string;
z = 1;
z = "Lmao";
// z = [1,2,3]; - Not allowed!


// Value types
type Bit = 0 | 1;
let bit: Bit = 1;

type Family  = "Emmet" | "Evan" | "Hana" | "Mum" | "Dad"; 
type Friends = "Hana"  | "Evan" | "Nick" | "Ollie";


// Intersection types
type FamilyAndFriend = Family & Friends;

let f1: FamilyAndFriend = "Hana";
// let f2: FamilyAndFriend = "Mum"; - this won't compile!

// This type has no inhabitants - there's nothing that's 
// both a string and a number!
type IntsAndStrings = number & string;