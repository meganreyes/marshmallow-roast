import { MeshLambertMaterial, CylinderGeometry, Mesh, DoubleSide, TextureLoader } from 'three'
import bark from '../images/bark_lowpoly.png'

class Stump {
  constructor(radiusTop, radiusBottom, height) {
    const loader = new TextureLoader()

    this.geometry = new CylinderGeometry(radiusTop, radiusBottom, height, 32)
    this.material = new MeshLambertMaterial({ map: loader.load(bark), side: DoubleSide })
    this.mesh = new Mesh(this.geometry, this.material)
    this.mesh.position.x -= 5.3
    this.mesh.position.z += 2.5
    this.mesh.position.y += 1
  }

}

export default Stump
