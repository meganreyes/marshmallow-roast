/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { CylinderGeometry, SphereGeometry, CircleGeometry, MeshLambertMaterial, Mesh, Group } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Leg {
  constructor() {
    this.geometryThigh = new CylinderGeometry(0.3, 0.3, 1.5, 64)
    this.materialThigh = new MeshLambertMaterial({ color: 0x0000ff })
    this.meshThigh = new Mesh(this.geometryThigh, this.materialThigh)

    this.geometryJoint = new SphereGeometry(0.35, 32, 32)
    this.materialJoint = new MeshLambertMaterial({ color: 0xF0B27A })
    this.meshJoint = new Mesh(this.geometryJoint, this.materialJoint)
    this.meshJoint.position.y -= 1.5/2

    this.geometryCalf = new CylinderGeometry(0.3, 0.3, 1.5, 64)
    this.materialCalf = new MeshLambertMaterial({ color: 0xF0B27A })
    this.meshCalf = new Mesh(this.geometryCalf, this.materialCalf)
    this.meshCalf.position.y -= 1.5/2
    this.meshCalf.position.z -= 0.75
    this.meshCalf.rotation.x += Math.PI/2


    this.geometryFoot = new SphereGeometry(0.4, 32, 32, 0, 3, 0, 3.0001)
    this.materialFoot = new MeshLambertMaterial({ color: 0x000000 })
    this.meshFoot = new Mesh(this.geometryFoot, this.materialFoot)
    this.meshFoot.position.x = this.meshCalf.position.x
    this.meshFoot.position.y = this.meshCalf.position.y
    this.meshFoot.position.z = this.meshCalf.position.z - 1.1



    this.geometrySole = new CircleGeometry(0.4, 32)
    this.materialSole = new MeshLambertMaterial({ color: 0x000000 })
    this.meshSole = new Mesh(this.geometrySole, this.materialSole)
    this.meshSole.position.x = this.meshFoot.position.x
    this.meshSole.position.y = this.meshFoot.position.y
    this.meshSole.position.z = this.meshFoot.position.z
    this.meshSole.rotation.x += Math.PI



    this.group = new Group()
    this.group.add(this.meshThigh)
    this.group.add(this.meshJoint)
    this.group.add(this.meshCalf)
    this.group.add(this.meshFoot)
    this.group.add(this.meshSole)
  }
}

export default Leg
