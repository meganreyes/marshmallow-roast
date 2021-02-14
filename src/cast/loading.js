import { PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Plane {
  constructor(alpha) {
    this.geometry = new PlaneGeometry(window.innerWidth, window.innerHeight)

    this.material = new MeshBasicMaterial({ color: 'white', side: DoubleSide, opacity: alpha, transparent: false })
    this.mesh = new Mesh(this.geometry, this.material)
    this.mesh.position.z += 15
  }

  revealScene(riseRate, alphaRate) {
    this.mesh.position.y += riseRate
    this.material.opacity -= alphaRate
    if (this.material.opacity < 1) {
      this.material.transparent = true
    }
  }
}

export default Plane
