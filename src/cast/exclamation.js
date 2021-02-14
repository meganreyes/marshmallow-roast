/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { SphereGeometry, CylinderGeometry, MeshLambertMaterial, Mesh, Group } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Exclamation {
  constructor() {
    this.geometryTop = new CylinderGeometry(0.4, 0.25, 1.5, 64)
    this.materialTop = new MeshLambertMaterial({ color: 0xF7DC6F })
    this.meshTop = new Mesh(this.geometryTop, this.materialTop)

    this.geometryBottom = new SphereGeometry(0.25, 32, 32)
    this.materialBottom = new MeshLambertMaterial({ color: 0xF7DC6F })
    this.meshBottom = new Mesh(this.geometryBottom, this.materialBottom)
    this.meshBottom.position.y -= 1.25

    this.group = new Group()
    this.group.add(this.meshTop)
    this.group.add(this.meshBottom)

  }


}

export default Exclamation
