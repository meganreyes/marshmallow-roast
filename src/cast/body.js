/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { SphereGeometry, CylinderGeometry, MeshLambertMaterial, Mesh, Group } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Body {
  constructor() {
    this.geometryUpper = new SphereGeometry(1, 32, 32)
    this.materialUpper = new MeshLambertMaterial({ color: 0x181a1c })
    this.meshUpper = new Mesh(this.geometryUpper, this.materialUpper)

    this.geometryMiddle = new CylinderGeometry(1, 1, 1.5, 64)
    this.materialMiddle = new MeshLambertMaterial({ color: 0x181a1c })
    this.meshMiddle = new Mesh(this.geometryMiddle, this.materialMiddle)
    this.meshMiddle.position.y -= 1.5 / 2

    this.geometryLower = new SphereGeometry(1, 32, 32)
    this.materialLower = new MeshLambertMaterial({ color: 0x0000ff })
    this.meshLower = new Mesh(this.geometryLower, this.materialLower)
    this.meshLower.position.y = this.meshMiddle.position.y - 1.5 / 2

    this.group = new Group()
    this.group.add(this.meshUpper)
    this.group.add(this.meshMiddle)
    this.group.add(this.meshLower)
  }
}

export default Body
