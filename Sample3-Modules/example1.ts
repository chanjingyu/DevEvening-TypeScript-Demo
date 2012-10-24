/* 
    SAMPLE 3 - Modules
    ------------------

- want to avoid using global 
    -- name conflicts

- modules uses '{} ||' JavaScript pattern
  (internal modules)

- similar to .net namespaces

*/

module DevEvening {

    var message = "Hello World";
   
/*
    export function HelloWorld() {
        alert(message);
    }
*/

}

// DevEvening.HelloWorld();

// Multiple levels:

/*

module DevEvening.Example2 {

    export function HelloWorld() {
        alert("Hello from class Example2!");
    }
}

DevEvening.Example2.HelloWorld();

*/