var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//Attributes: the field of view,the aspect ratio, near clipping plane, far clipping plane
//Objects farther from the camera than the value of far or closer than near will not be renderede
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.CubeGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: "#6495ED" } );
var cube = new THREE.Mesh( geometry, material );
scene.add(cube); //by default added to coordinates (0,0,0)
camera.position.z = 5;
function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render( scene, camera );
}
render();
//advantages vs setInterval: requestAnimationFrame pauses when user navigates to another browser tab --> does not waste processing power/battery life
