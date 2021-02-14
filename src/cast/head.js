/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { SphereGeometry, CircleGeometry, TorusGeometry, MeshLambertMaterial, Mesh, Group } from 'three'
import Exclamation from '../cast/exclamation'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Head {
  constructor() {
    this.geometryHead = new SphereGeometry(1, 32, 32)
    this.materialHead = new MeshLambertMaterial({ color: 0xF0B27A })
    this.meshHead = new Mesh(this.geometryHead, this.materialHead)

    this.geometryHatTop = new SphereGeometry(1.05, 32, 32, 0, 3, 0, 3.1)
    this.materialHatTop = new MeshLambertMaterial({ color: 0xffffff })
    this.meshHatTop = new Mesh(this.geometryHatTop, this.materialHatTop)

    this.geometryHatBase = new CircleGeometry(1.5, 32)
    this.materialHatBase = new MeshLambertMaterial({ color: 0xffffff })
    this.meshHatBase = new Mesh(this.geometryHatBase, this.materialHatBase)

    this.geometryHatBase2 = new CircleGeometry(1.5, 32)
    this.materialHatBase2 = new MeshLambertMaterial({ color: 0xffffff })
    this.meshHatBase2 = new Mesh(this.geometryHatBase2, this.materialHatBase2)
    this.meshHatBase2.rotation.x += Math.PI

    this.geometryHatLining = new TorusGeometry(1, 0.1, 16, 100)
    this.materialHatLining = new MeshLambertMaterial({ color: 0x000000 })
    this.meshHatLining = new Mesh(this.geometryHatLining, this.materialHatLining)
    this.meshHatLining.position.z += 0.1

    this.exclamation = new Exclamation()
    this.exclamation.group.name = "!"
    this.exclamation.group.position.z += 3
    this.exclamation.group.rotation.x += Math.PI/2


    this.group = new Group()
    this.group.add(this.meshHead)
    this.group.add(this.meshHatTop)
    this.group.add(this.meshHatBase)
    this.group.add(this.meshHatBase2)
    this.group.add(this.meshHatLining)

    this.group.rotation.x -= Math.PI/2
  }

  addMark(){
    this.group.add(this.exclamation.group)
  }

  removeMark(){
    this.group.children.forEach((child, i) => {
      if(child.name === "!"){
        this.group.remove(child)
      }
    });

  }


}

export default Head
