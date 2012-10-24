/* 
    SAMPLE 2 - Types
    -----------------

-   how to declare types
        string
        number
        bool
        arrays
        any

-   type inference

-   no enforcement in JavaScript
    
*/

function greeter2(person:string) {
    return "Hello, " + person;
}

document.body.innerHTML = greeter2("DevEvening");








/*
    note: you may notice I called these greeter2 and user2 
    
    if I didn't the TypeScript complier would tell me that
    the names already existing in the global namespace elsewhere -
    they were already declared in the Sample 1 code. 

    This is why we need Modules ...
*/