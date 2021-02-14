/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Star {
  constructor(posX, posY, posZ) {

    this.startX = posX
    this.startZ = posZ
    this.radius = Math.sqrt(posX**2+posZ**2)

    this.geometryStar = new SphereGeometry(5, 32, 32)
    this.materialStar = new MeshBasicMaterial({ color: 0xF4D03F })
    this.meshStar = new Mesh(this.geometryStar, this.materialStar)

    this.meshStar.position.set(posX, posY, posZ)

  }

  move(time) {
    this.meshStar.position.x = this.radius*Math.cos(time) + this.startX;
    this.meshStar.position.z = this.radius*Math.sin(time) + this.startZ;
  }


}

export default Star
