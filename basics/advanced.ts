// any
function log(input: any) {
    console.log(input.name);
}

type Name = { name: string };

let obj: Name = {
    name: "Hello!"
};
log(obj);


// unknown
let u: unknown = obj;

function hasName(arg: any): arg is Name {
    return !!arg && typeof arg === "object" && "name" in arg;
}

// this won't compile:
// console.log(u.name);

if (hasName(u)) {
    // inside here, we know u has the correct type!
    console.log(u.name);
}


// never
function willDefinitelyFail(message: string): never {
    // do some stuff
    throw "Fail!";
}

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

    let unreachable = (x : never): any => {
        throw "Unreachable";
    }

    // We'll get a compiler error here if we forgot a value above!
    throw unreachable(x);
}

sw(s);



// You can have conditional types
type IsFunction<T> = T extends Function ? T : never;

let num = () => 1;
let fun: IsFunction<typeof num> = num;

// You can infer types
// this exists as a definition in the stdlib
// type Return<T> = T extends ((...args: any[]) => infer R) ? R : T;

type NumReturnType = ReturnType<typeof num>;
// Not a function: 
// type NumberReturnType = ReturnType<number>;

// Get all the types of all the fields used in T
type TypesOfFields<T> = T extends { [K in keyof T]: infer U } ? U : never;

let myObj = {
    x: 123,
    y: "Hello",
    z: {
        zp: ["Whoa"]
    },
    a: []
};

// Get all the types of all the fields of an object
type FieldsOf = TypesOfFields<typeof myObj>;