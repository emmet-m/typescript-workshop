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