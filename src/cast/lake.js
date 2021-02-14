import { CircleGeometry, MeshLambertMaterial, Mesh, DoubleSide, TextureLoader } from 'three'

import water from '../images/water_texture.jpg'
class Lake {
  constructor(color) {
    const loader = new TextureLoader()
    this.geometry = new CircleGeometry(50, 100)
    this.material = new MeshLambertMaterial({ map: loader.load(water), side: DoubleSide })
    this.mesh = new Mesh(this.geometry, this.material)
    this.mesh.rotation.x = Math.PI / 2
    this.mesh.position.x -= 66
    this.mesh.position.z += 20
    this.mesh.position.y += 0.1
  }
}

export default Lake
