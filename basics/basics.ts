// Typing variables
let x = 1; 
let y: number = 1;

// Function types
function f(a: number, b: number[]): number[] {
    return b.unshift(a) && b;
}

// Sum types

let z: number | string = 1;
z = "Lmao";
// z = [1,2,3]; - Not allowed!

// Any
function log(input: any) {
    console.log(input.name);
}

let obj = {
    name: "Hello!"
};
log(obj);

// never
function willDefinitelyFail(message: string): never {
    // do some stuff
    throw "Fail!";
}

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