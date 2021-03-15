# threePractice

## architecture 

<img src="https://threejsfundamentals.org/threejs/lessons/resources/images/threejs-structure.svg">

### renderer

the main object in three.js
scene and camera passed in and draws 3D scene in frustrum of camera as 2D image to Canvas

### Scene 

root of scenegraph 

### camera 

outside of scenegraph 

### mesh 

represent drawing specific geometry with a material 
can reuse geometries and materials 

### geometry 

represent vertex data of a piece of geometry
can create or can load from a file 

### materiaal 

surface properties - shininess and color 
can referen ce texture objects - could wrap image to surface of geometry 

### definitions

frustrum - part of solid between two parallel planes cutting the solid

scenegraph - tree structure containing scene, meshes, light, group, object#d, camera 
children in graph positioned relative to parents 

jsconfig.json - used by VSCode

## basic hello world 

<img src="https://threejsfundamentals.org/threejs/lessons/resources/images/threejs-1cube-no-light-scene.svg">

### preqrequisites

es6 modules - allow us to use import and export 
<!-- <script type="module"> must be used in script tag -->

document.querySelector for accessing DOM with css selector

defer - <!-- <element defer> --> equivalent to using onload event

closure - function inside of function - the function is created every time it is called, variables inside are closed on, making a class variable type of thing

never use var

never use for in, use for of (newer)
iterate keys/values of object with for (const [key, value] of Object.entries(obj))

### troubleshooting 

issue: TypeError: Module specifier does not start with "/", "./", or "../".

javascript modules not working

[Webpack with node_modules](https://www.toptal.com/javascript/a-guide-to-managing-webpack-dependencies)

[Beginners guide to Webpack](https://www.sitepoint.com/webpack-beginner-guide/)

### webpack 

entry - the module that wp uses to start building depenency graph (default ./src/index.js)
output - where to emit bundles (./dist/main.js)
loaders - allow webpack to convert non js and json files to be packaged

