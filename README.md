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

## basic hello world 

<img src="https://threejsfundamentals.org/threejs/lessons/resources/images/threejs-1cube-no-light-scene.svg">

### troubleshooting 

issue: TypeError: Module specifier does not start with "/", "./", or "../".

javascript modules not working

### eloquent js modules 

from [this link](https://eloquentjavascript.net/10_modules.html#h_hF2FmOVxw7)
