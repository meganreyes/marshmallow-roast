import { Scene, PerspectiveCamera, WebGLRenderer, HemisphereLight, AxesHelper, PointLight, AmbientLight } from 'three'

//cast
import Plane from '../cast/plane'
import Stump1 from '../cast/stump_saad'
import Log from '../cast/log'
import Tent from '../cast/tent'
import Stump from '../cast/stump'
import Tree from '../cast/Tree'
import Person from '../cast/person'
import MountainRange from '../cast/mountain_range'
import Lake from '../cast/lake'
import Fire from '../cast/fire'
import Star from '../cast/star'
import Hydro from '../cast/hydro'
import Lantern from '../cast/lantern'
import Loading from '../cast/loading'

//skybox side images
import skybox1 from '../images/skybox_1.png'
import skybox2 from '../images/skybox_2.png'
import skybox3 from '../images/skybox_3.png'
import skybox4 from '../images/skybox_4.png'
import skybox5 from '../images/skybox_5.png'

const DEFAULT_ROTATION_RATE = 0.01

const createDemoUniverse = ({ fieldOfView, width, height, nearPlane, farPlane }) => {
  const THREE = require('three')
  const OrbitControls = require('three-orbitcontrols')
  const scene = new Scene()
  const camera = new PerspectiveCamera(fieldOfView, width / height, nearPlane, farPlane)

  const renderer = new WebGLRenderer()
  renderer.setSize(width, height)

  const orbitcontrols = new OrbitControls(camera, renderer.domElement)
  orbitcontrols.target.set(0, 1, 0)
  orbitcontrols.enableDamping = false
  orbitcontrols.dampingFactor = 0.05
  orbitcontrols.enableZoom = false
  orbitcontrols.enablePan = false
  orbitcontrols.enabled = false
  orbitcontrols.maxDistance = 200
  orbitcontrols.maxPolarAngle = Math.PI / 2

  const loading = new Loading(1)
  scene.add(loading.mesh)

  const light = new PointLight(0xffffff)
  light.position.set(1, 0, 7)
  light.castShadow = true
  scene.add(light)

  const backgroundLight = new AmbientLight(0x404040)
  scene.add(backgroundLight)

  const hemlight = new HemisphereLight(0xb1e1ff, 0xb97a20, 1)
  scene.add(hemlight)

  const axesHelper = new AxesHelper(5)
  axesHelper.position.set(20)
  scene.add(axesHelper)

  const plane = new Plane('green')
  scene.add(plane.mesh)

  const person = new Person(1.5, 5, 5, 5)
  scene.add(person.group)
  person.group.position.x -= 7
  person.group.position.z -= 5
  person.group.rotation.y = 20 * (Math.PI / 180)

  const fire = new Fire(0xff4500)
  scene.add(fire.group)
  fire.group.position.x += 1
  fire.group.position.y += 0
  fire.group.position.z += 7

  for (let i = 0; i < 50; i++) {
    let xRandom = 25 + Math.floor(Math.random() * 250)
    let zRandom = 10 + Math.floor(Math.random() * 250)
    let treeLeaves = 3 + Math.floor(Math.random() * 5)
    let treeHeight = 10 + Math.floor(Math.random() * 60)

    const tree = new Tree(treeHeight, treeLeaves)
    tree.group.position.x = xRandom
    tree.group.position.y = 0.3 * treeHeight
    tree.group.position.z = -zRandom

    scene.add(tree.group)
  }

  let stars = []
  for (let i = 0; i < 100; i++) {
    let xRandom = -500 + Math.floor(Math.random() * 1000)
    let yRandom = 200 + Math.floor(Math.random() * 50)
    let zRandom = -500 + Math.floor(Math.random() * 1000)

    const star = new Star(xRandom, yRandom, zRandom)
    stars.push(star)
    scene.add(star.meshStar)
  }

  for (let i = 0; i < 50; i++) {
    let xRandom = 125 + Math.floor(Math.random() * 200)
    let zRandom = -50 + Math.floor(Math.random() * 200)
    let treeLeaves = 3 + Math.floor(Math.random() * 5)
    let treeHeight = 10 + Math.floor(Math.random() * 60)

    const tree = new Tree(treeHeight, treeLeaves)
    tree.group.position.x = -xRandom
    tree.group.position.y = 0.3 * treeHeight
    tree.group.position.z = zRandom

    scene.add(tree.group)
  }

  const mountainRange = new MountainRange()
  scene.add(mountainRange.group)

  const stump = new Stump(1.05, 1.05, 2.5)
  scene.add(stump.mesh)
  stump.mesh.position.z += 0.5
  stump.mesh.position.x -= 9

  const lantern = new Lantern()
  scene.add(lantern.group)

  const firelog = new Stump(1.05, 1.05, 5)
  scene.add(firelog.mesh)
  firelog.mesh.position.z += 5
  firelog.mesh.position.x += 6
  firelog.mesh.rotation.z = Math.PI / 2
  const firelog2 = new Stump(1.05, 1.05, 5)
  scene.add(firelog2.mesh)
  firelog2.mesh.position.z += 5
  firelog2.mesh.position.x += 6
  firelog2.mesh.rotation.x = Math.PI / 4

  const log_seat = new Stump(1.2, 1.2, 6)
  scene.add(log_seat.mesh)
  log_seat.mesh.position.z -= 2
  log_seat.mesh.position.x += 3.5
  log_seat.mesh.rotation.x = 90 * (Math.PI / 180)
  log_seat.mesh.rotation.z = 60 * (Math.PI / 180)

  const tent = new Tent()
  scene.add(tent.group)
  tent.group.position.z -= 15
  tent.group.position.x -= 5
  tent.group.rotation.y = 130 * (Math.PI / 180)

  {
    const loader = new THREE.CubeTextureLoader()
    const texture = loader.load([skybox4, skybox2, skybox5, skybox5, skybox3, skybox1])
    scene.background = texture
  }

  const stump1 = new Stump1()
  scene.add(stump1.group)
  stump1.group.position.x += 12
  stump1.group.position.z -= 2
  stump1.group.scale.x = 0.25
  stump1.group.scale.y = 0.25
  stump1.group.scale.z = 0.25

  const lake = new Lake('blue')
  scene.add(lake.mesh)

  const hydro = new Hydro()
  scene.add(hydro.group)
  hydro.group.position.y -= 0.7

  var objects = []

  const log = new Log(0, 0, 0)
  scene.add(log.group)
  objects.push(log.group)

  log.group.position.x += 15
  log.group.position.y -= 16
  log.group.position.z -= 12
  log.group.rotation.y = Math.PI / 7
  log.group.rotation.x = Math.PI / 6

  let time = 0

  const animate = () => {
    window.requestAnimationFrame(animate)

    person.burnMarshmellow(0.001)

    setTimeout(function () {
      loading.revealScene(0.05, 0.025)
    }, 1500)

    if (loading.material.opacity <= 0) {
      orbitcontrols.enableDamping = true
      orbitcontrols.enableZoom = true
      orbitcontrols.enablePan = true
      orbitcontrols.enabled = true
    }

    time += 0.005
    stars.forEach((item, i) => {
      item.move(time)
    })

    renderer.render(scene, camera)
    fire.mesh1.rotation.x += DEFAULT_ROTATION_RATE
    fire.mesh1.rotation.y += DEFAULT_ROTATION_RATE
    fire.mesh1.rotation.z += DEFAULT_ROTATION_RATE

    fire.mesh2.rotation.x += DEFAULT_ROTATION_RATE + 0.01
    fire.mesh2.rotation.y += DEFAULT_ROTATION_RATE + 0.01
    fire.mesh2.rotation.z -= DEFAULT_ROTATION_RATE + 0.01

    fire.mesh3.rotation.x += DEFAULT_ROTATION_RATE + 0.01
    fire.mesh3.rotation.y -= DEFAULT_ROTATION_RATE + 0.01
    fire.mesh3.rotation.z += DEFAULT_ROTATION_RATE + 0.01

    fire.mesh4.rotation.x += DEFAULT_ROTATION_RATE + 0.01
    fire.mesh4.rotation.y -= DEFAULT_ROTATION_RATE + 0.01
    fire.mesh4.rotation.z -= DEFAULT_ROTATION_RATE + 0.01

    fire.mesh5.rotation.x -= DEFAULT_ROTATION_RATE
    fire.mesh5.rotation.y += DEFAULT_ROTATION_RATE
    fire.mesh5.rotation.z += DEFAULT_ROTATION_RATE

    fire.mesh6.rotation.x -= DEFAULT_ROTATION_RATE + 0.01
    fire.mesh6.rotation.y += DEFAULT_ROTATION_RATE + 0.01
    fire.mesh6.rotation.z -= DEFAULT_ROTATION_RATE + 0.01

    fire.mesh7.rotation.x -= DEFAULT_ROTATION_RATE
    fire.mesh7.rotation.y -= DEFAULT_ROTATION_RATE
    fire.mesh7.rotation.z += DEFAULT_ROTATION_RATE

    fire.mesh8.rotation.x -= DEFAULT_ROTATION_RATE
    fire.mesh8.rotation.y -= DEFAULT_ROTATION_RATE
    fire.mesh8.rotation.z -= DEFAULT_ROTATION_RATE
  }

  return {
    camera,
    renderer,
    animate,
    cast: {
      person
    }
  }
}

export { createDemoUniverse }
