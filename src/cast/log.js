/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { CylinderGeometry, MeshLambertMaterial, Mesh, Group, BoxGeometry, TextureLoader } from 'three'
import bark from '../images/bark_lowpoly.png'
import cutWood from '../images/cutWood_texture.png'
/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Log {
  constructor(x, y, z) {
    const loader = new TextureLoader()
    this.cylgeometry = new CylinderGeometry(2, 2, 5, 30, 1, false, 0, 1)
    this.material = new MeshLambertMaterial({ map: loader.load(bark) })
    this.cylmesh = new Mesh(this.cylgeometry, this.material)
    this.wallgeometry = new BoxGeometry(0.1, 2, 5)
    this.wallmaterial1 = new MeshLambertMaterial({ map: loader.load(cutWood) })
    this.wallmaterial2 = new MeshLambertMaterial({ map: loader.load(cutWood), color: 0x543c2b })
    this.wallmesh1 = new Mesh(this.wallgeometry, this.wallmaterial1)
    this.wallmesh2 = new Mesh(this.wallgeometry, this.wallmaterial2)

    this.group = new Group()
    this.group.add(this.cylmesh)
    this.group.add(this.wallmesh1)
    this.group.add(this.wallmesh2)

    this.wallmesh1.position.y = 21
    this.wallmesh2.position.y = 20.6
    this.wallmesh2.position.x = -0.8
    this.wallmesh2.rotation.z = Math.PI / 3.25
    this.cylmesh.rotation.x = Math.PI / 2
    this.cylmesh.rotation.y = Math.PI / 1
    this.cylmesh.position.y = 20

    this.group.position.set(x, y, z)
  }
}

export default Log
