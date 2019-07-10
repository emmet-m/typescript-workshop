// Typing variables
let x = 1; 
let y: number = 1;
// int x = 1;

// Functions with types
function f(a: number, b: number[]): number[] {
    b.push(a);
    return b;
}

// The type of a function
let fn: (a: number, b: number[]) => number[];

fn = f;
console.log(fn(1,[]));


// Union types
let z: number | string;
z = 1;
z = "Lmao";

if (typeof z === "string") {
    // do string stuff
} else if (typeof z === "number") {
    // do number stuff
}

// z = [1,2,3]; - Not allowed!


// Value types
type Bit = 0 | 1;
let bit: Bit = 1;
type BitString = Bit[];

type Family  = "Emmet" | "Evan" | "Hana" | "Mum" | "Dad"; 
type Friends = "Hana"  | "Evan" | "Nick" | "Ollie";


// Intersection types
type FamilyAndFriend = Family & Friends;

let f1: FamilyAndFriend = "Hana";
// let f2: FamilyAndFriend = "Ollie"; - this won't compile!

// This type has no inhabitants - there's nothing that's 
// both a string and a number!
type IntsAndStrings = number & string;



// undefined and null
let undef: undefined = undefined;
let nul: null = null;

let falsy: undefined | null | false | 0 | "";
