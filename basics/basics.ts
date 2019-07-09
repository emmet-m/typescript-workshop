// Typing variables
let x = 1; 
let y: number = 1;

// Function types
function f(a: number, b: number[]): number[] {
    return b.unshift(a) && b;
}

// Union types
let z: number | string;
z = 1;
z = "Lmao";
// z = [1,2,3]; - Not allowed!

// Intersection types
type IntsAndStrings = number & string;


// any
function log(input: any) {
    console.log(input.name);
}

let obj = {
    name: "Hello!"
};
log(obj);


// unknown
let u: unknown = {
    name: "hello!"
};

function hasName(arg: any): arg is {name: string} {
    return !!arg && typeof arg === "object" && "name" in arg;
}

if (hasName(u)) {
    // inside here, we know u has the correct type!
    console.log(u.name);
}

// never
function willDefinitelyFail(message: string): never {
    // do some stuff
    throw "Fail!";
}

// value types
type SomeVals = "a" | "b" | "c" | 1;

let s: SomeVals;
s = "a";

let sw = (x: SomeVals): boolean => {
    switch (x){
        case "a":
            return true;
        case "b":
            return false;
        case "c":
            return true;
        case 1:
            return false;
    }

    let unreachable = (x : never): never => {
        throw "Unreachable";
    }

    // We'll get a compiler error here if we forgot a value above!
    throw unreachable(x);
}

sw(s);