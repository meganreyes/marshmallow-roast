/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { CylinderGeometry, SphereGeometry, MeshLambertMaterial, Mesh, Group } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Arm {
  constructor() {


    this.geometryShoulder = new SphereGeometry(0.4, 32, 32)
    this.materialShoulder = new MeshLambertMaterial({ color: 0x000000 })
    this.meshShoulder = new Mesh(this.geometryShoulder, this.materialShoulder)


    this.geometryUpperArm = new CylinderGeometry(0.3, 0.3, 1.5, 64)
    this.materialUpperArm = new MeshLambertMaterial({ color: 0xF0B27A })
    this.meshUpperArm = new Mesh(this.geometryUpperArm, this.materialUpperArm)
    this.meshUpperArm.position.y -= 0.75

    this.geometryElbow = new SphereGeometry(0.3, 32, 32)
    this.materialElbow = new MeshLambertMaterial({ color: 0xF0B27A })
    this.meshElbow = new Mesh(this.geometryElbow, this.materialElbow)
    this.meshElbow.position.y = this.meshUpperArm.position.y  - 0.75
    this.meshElbow.position.z -= 0.15

    this.geometryForeArm = new CylinderGeometry(0.3, 0.3, 1.5, 64)
    this.materialForeArm = new MeshLambertMaterial({ color: 0xF0B27A })
    this.meshForeArm = new Mesh(this.geometryForeArm, this.materialForeArm)


    this.geometryHand = new SphereGeometry(0.4, 32, 32)
    this.materialHand = new MeshLambertMaterial({ color: 0xF0B27A })
    this.meshHand = new Mesh(this.geometryHand, this.materialHand)
    this.meshHand.position.y = this.meshForeArm.position.y - 0.75

    this.lowerArm = new Group()
    this.lowerArm.add(this.meshForeArm)
    this.lowerArm.add(this.meshHand)

    this.lowerArm.rotation.x -= Math.PI/2
    this.lowerArm.position.y = this.meshElbow.position.y
    this.lowerArm.position.z += 0.7




    this.group = new Group()
    this.group.add(this.meshShoulder)
    this.group.add(this.meshUpperArm)
    this.group.add(this.meshElbow)
    this.group.add(this.lowerArm)
  }
}

export default Arm
