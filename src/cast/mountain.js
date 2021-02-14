import {
  LatheGeometry,
  MeshBasicMaterial,
  Mesh,
  Vector2,
  DoubleSide,
  Group,
  ConeGeometry,
  TextureLoader,
  SphereGeometry
} from 'three'
import mountain from '../images/mountain_texture.png'
import snow from '../images/snow_texture.jpg'

class Mountain {
  constructor(color) {
    const points = []

    for (let i = 0; i < 10; i++) {
      points.push(new Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2))
    }

    const loader = new TextureLoader()
    this.geometry = new LatheGeometry(points, 10)
    this.material = new MeshBasicMaterial({ map: loader.load(mountain), side: DoubleSide })
    this.mesh = new Mesh(this.geometry, this.material)
    this.mesh.rotation.x = 180 * (Math.PI / 180)

    this.top = new ConeGeometry(5.7, 5, 25)
    this.topMaterial = new MeshBasicMaterial({ map: loader.load(snow), side: DoubleSide })
    this.topMesh = new Mesh(this.top, this.topMaterial)
    this.topMesh.position.y += 12

    this.rock = new SphereGeometry(10, 10, 7)
    this.rockMaterial = new MeshBasicMaterial({ map: loader.load(mountain), side: DoubleSide })
    this.rockMesh1 = new Mesh(this.rock, this.rockMaterial)
    this.rockMesh1.position.y += 5
    this.rockMesh1.position.x -= 2
    this.rockMesh1.position.z += 10

    this.group = new Group()
    this.group.add(this.mesh)
    this.group.add(this.topMesh)
}
}

export default Mountain
