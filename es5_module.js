// code from Kyle Simpsons' (YDKJS) series

var MyModules = (function Manager() {
    var modules = {};

    function define(name, dependencies, implementation) {
        for(var i = 0; i < dependencies.length; i++) {
            dependencies[i] = modules[dependencies[i]];
        }
        modules[name] = implementation.apply(implementation, dependencies); // dependencies is array, use apply() not call()
        /*
        hmmm... not really sure why implementation gets applied to itself, apply() and call() are
        typically added to different methods. 
        */
    }

    function get(name) {
        return modules[name];
    }

    return { // create the public API, like 'export' in ESM and CommonJS
        define: define,
        get: get
    }
})(); //IFEE pattern executes the function immediately and assigns the return value to MyModules

/*
     I wonder, if you have two modules with the same dependencies, do they both get compiled? Is there
     a possibility of having the code for "bar" added to the code base multiple times, although protected
     by local scope? So is it truly modular if that's the case?
*/

//usage
MyModules.define("bar",[], function() { // no dependency or param
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return { // create the public API
        hello: hello // only hello function public
    };
});

MyModules.define("foo",["bar"], function(bar) { // 'import' bar as a dependency, with param
    var hungry = "hippo"; // just incase no bar

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return { // create the public API
        awesome: awesome // open the method
    };
});

var bar = MyModules.get("bar"); 
var foo = MyModules.get("foo");

console.log(bar.hello("hippo")); // let me introduce hippo
foo.awesome(); // LET ME INTRODUCE: HIPPO

/*
I am currently very interested in getting into depth with the module pattern, this is an ES5
implementation and somewhat out of favour? But it is always good to understand what came before.
I use a variation of this from AngularJS services, filters etc. pretty heavily in the Pivot project,
but it was kind of a 'get it to work' project and restricted to ES5, so I just learned what I 
needed at that point. Thinking eventually I will be able to move to Angular2 or Dart.

In my experience with ES5JS, I have always found it difficult to work with truly reusable code. Being
on an island (only JS programmer in my last job), I have tried multiple patterns and using components
ended up being my favourite. Now, ES6 has added so much new stuff I am like a kid again, super excited
to get up to speed! 
*/