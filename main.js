const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75 , window.innerWidth/window.innerHeight , 0.1 , 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth ,window.innerHeight)
document.body.appendChild(renderer.domElement)
const geo = new THREE.BoxGeometry( 2.5,2.5 ,2.5)
const texture = new THREE.TextureLoader().load("tttt.png")
const material = new THREE.MeshBasicMaterial({map:texture})
const cube = new THREE.Mesh(geo,material)
scene.add(cube)
camera.position.z = 5;

scene.background = new THREE.Color(0x232524);


function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene , camera)
    cube.rotation.x +=0.07;
    cube.rotation.y -=0.05;
}
animate()