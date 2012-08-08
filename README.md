kis-requirejs-demo
==================

Keep It Simple RequireJS Demo.  Shows simple demo of how to use require.js.

##Overview
This demo contains 2 separate html files, each with their own scripts folder. One example demonstrates how to write the code without require.js. The other shows how to add require.js. The purpose is to explain how to use require.js for dependency resolution. 


##Without RequireJS
The first example (index1.html) has 3 JavaScript files using the Revealing Module Pattern (Module Pattern works fine too). The dependencies are as follows:

- main.js depends on alerter.js
- alerter.js depends on daataservice.js

Load order is important here, and can easily be broken.

##With RequireJS
The second example (index2.html) uses require.js to load the scripts. It solves the problem and has these roles:

- starts with a kickoff script (main.js)
- loads therest of the scripts as they are needed (when dependencies call on them)


##More
Related topics: Dependency Injection (DI), Revealing Module Pattern, Module Pattern, Immediately Invoked Function Execution (IIFE), and Service Locator Pattern