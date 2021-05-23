// import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';

// Global variables
let scene, camera, renderer, cube, containerWidth, containerHeight, ring, controls;

init();
animate();

function init() {
  // Scenes allow you to set up what and where is to be rendered by Three.js such as objects and cameras.
  scene = new THREE.Scene();

  // Renderer
  renderer = new THREE.WebGLRenderer({
    threeContainer,
    antialias: true
  });

  // Place element in the container
  /* We will get the container width, and set the container height to be half of this value, so the aspect ratio will be 2:1. */
  container = document.getElementById('threeContainer');
  containerWidth = container.offsetWidth;
  containerHeight = containerWidth / 2;
  // Make the threejs canvas to be the size of above, and then add it to the container div element called threeContainer.
  renderer.setSize(containerWidth, containerHeight, false);
  container.appendChild(renderer.domElement);

  // renderer.setSize(window.innerWidth, window.innerHeight);

  // Camera = projective cameras or more flat cameras. Takes in field of view (in degrees), aspect ratio, near and far plane - bounding boxes - 0.1 and 1000 (distance from camera).
  camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
  // Repositioning the camera
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);

  // controls = new OrbitControls(camera, renderer.domElement);
  // controls.minDistance = 200;
  // controls.maxDistance = 500;
  // Lights §
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  // directionalLight.target.position.set(0, 0, 0);
  // directionalLight.position.set(10, 20, 0);
  scene.add(directionalLight);

  // Creating a box - need MeshLambertMaterial for the lights to cause shaows
  const geometry = new THREE.BoxGeometry(1, 0.5, 1);
  const material = new THREE.MeshLambertMaterial({
    color: 0xfb8e00
  });
  const northMag = new THREE.Mesh(geometry, material);
  northMag.position.set(-2, 0, 0);
  northMag.rotation.set(0.3, 0, 0);
  scene.add(northMag);

  const southMag = new THREE.Mesh(geometry, material);
  southMag.position.set(2, 0, 0);
  southMag.rotation.set(0.3, 0, 0);
  scene.add(southMag);

  // //create a blue LineBasicMaterial
  // const lineMaterial = new THREE.MeshBasicMaterial({
  //   color: 0xffffff
  // });
  //
  // const lineGeom = new THREE.BufferGeometry();
  // // // vertices because each vertex needs to appear once per triangle.
  // const vertices = new Float32Array([
  //   -1.0, -1.0, 1.0,
  //   1.0, -1.0, 1.0,
  //   1.0, 1.0, 1.0,
  //
  //   1.0, 1.0, 1.0,
  //   -1.0, 1.0, 1.0,
  //   -1.0, -1.0, 1.0
  // ]);
  // //
  // lineGeom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  // const square = new THREE.Mesh(lineGeom, lineMaterial);
  // scene.add(square)

  const closedSpline = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-60, -100, 60),
    new THREE.Vector3(-60, 20, 60),
    new THREE.Vector3(-60, 120, 60),
    new THREE.Vector3(60, 20, -60),
    new THREE.Vector3(60, -100, -60)
  ]);

  closedSpline.curveType = 'catmullrom';
  closedSpline.closed = true;

  const extrudeSettings1 = {
    steps: 100,
    bevelEnabled: false,
    extrudePath: closedSpline
  };


  const pts1 = [],
    count = 3;

  for (let i = 0; i < count; i++) {

    const l = 20;

    const a = 2 * i / count * Math.PI;

    pts1.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));

  }

  const shape1 = new THREE.Shape(pts1);

  const geometry1 = new THREE.ExtrudeGeometry(shape1, extrudeSettings1);

  const material1 = new THREE.MeshLambertMaterial({
    color: 0xb00000,
    wireframe: false
  });

  const mesh1 = new THREE.Mesh(geometry1, material1);

  scene.add(mesh1);
}



function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01; // Causing the cube to rotate about the x-axis
  // cube.rotation.y += 0.01; // Causes the cube to rotate about the y-axos
  // controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  containerWidth = container.offsetWidth;
  containerHeight = containerWidth / 2;
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(containerWidth, containerHeight, false);
}

window.addEventListener("resize", onWindowResize, false)