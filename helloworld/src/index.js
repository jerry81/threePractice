import * as THREE from 'three';

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas }); // uses WebGL to render 3d onto canvas

    // create camera 
    const fov = 75; //field of vision
    const aspect = 2;  // the canvas default - aspect ratio?
    const near = 0.1; // near (anything closer not rendered)
    const far = 5; // far limit (anything futher not rendered)
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2

    // scene
    const scene = new THREE.Scene()

    // geometry
    const boxWidth = 1
    const boxHeight = 1
    const boxDepth = 1
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    //material
    // no lighting effect
    // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
    // with lighting effect 
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

    //mesh 
    // const cube = new THREE.Mesh(geometry, material);
    const cubes = [
        makeInstance(geometry, 0x44aa88, 0),
        makeInstance(geometry, 0x8844aa, -2),
        makeInstance(geometry, 0xaa8844, 2),
    ];

    // add mesh to scene 
    //  scene.add(cube);

    // lighting 

    const color = 0xFFFFFF // 0x in js is hexadecimal (type number?), white light
    const intensity = 1
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(-1, 2, 4); // x, y, z, light coming from upper-left-back?
    scene.add(light)

    // animation 
    function render(time) {
        time *= 0.001;  // convert time to seconds

        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;  // vary the speeds
            const rot = time * speed
            cube.rotation.x = rot; // rotations are in radians
            cube.rotation.y = rot;
        })


        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({ color });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
    }

    // add scene and caamera to renderer
    requestAnimationFrame(render);
}
main()