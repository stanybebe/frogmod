let frogObj =
  "//cdn.shopify.com/s/files/1/0551/3897/5942/t/2/assets/frogredux.obj";
let frogTexture =
  "//cdn.shopify.com/s/files/1/0551/3897/5942/t/2/assets/frogtexture.png";
let frogOutlineTexture =
  "//cdn.shopify.com/s/files/1/0551/3897/5942/t/2/assets/black.png";

const frogContainer = document.querySelector("#frog-container");

let camera, scene, renderer;
let object;
let frogRotate = true;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    75,
    frogContainer.offsetWidth / frogContainer.offsetHeight,
    0.1,
    1000
  );
  camera.position.z = 4;
  camera.position.y = 0.1;
  camera.position.x = 0.7;

  // scene

  scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight(0x404040, 4);
  scene.add(ambientLight);
  scene.add(camera);

  // manager

  function loadModel() {
    object.traverse(function (child) {
      if (child.isMesh) child.material.map = texture;
    });
    objectOutline.traverse(function (child) {
      if (child.isMesh)
        child.material = new THREE.MeshBasicMaterial({
          color: 0x000000,
          side: THREE.BackSide,
        });
    });

    const s = 1.03;
    object.position.y = -0.8;
    objectOutline.position.y = -0.85;
    objectOutline.scale.set(s, s, s);
    object.rotation.y = -1.8;
    objectOutline.rotation.y = -1.8;
    scene.add(objectOutline);
    scene.add(object);
  }

  const manager = new THREE.LoadingManager(loadModel);

  manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
  };

  // texture

  const textureLoader = new THREE.TextureLoader(manager);
  const texture = textureLoader.load(frogTexture);
  const textureOutline = textureLoader.load(frogOutlineTexture);

  // model

  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log("model " + Math.round(percentComplete, 2) + "% downloaded");
    }
  }

  function onError() {}

  const loader = new THREE.OBJLoader(manager);
  loader.load(
    frogObj,
    function (obj) {
      object = obj;
    },
    onProgress,
    onError
  );
  const loaderOutline = new THREE.OBJLoader(manager);
  loader.load(
    frogObj,
    function (obj) {
      objectOutline = obj;
    },
    onProgress,
    onError
  );

  //

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(frogContainer.offsetWidth, frogContainer.offsetHeight);
  //renderer.setClearColor(0x000000, 1);
  frogContainer.appendChild(renderer.domElement);
}

function rotateFrog() {
  let bob = Math.sin(Date.now() * 0.0025) * 0.2;
  object.rotation.z = bob;
  objectOutline.rotation.z = bob;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
  rotateFrog();
}
