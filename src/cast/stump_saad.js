/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import {
  CylinderGeometry,
  MeshLambertMaterial,
  Mesh,
  ConeGeometry,
  Group,
  TorusKnotGeometry,
  TextureLoader
} from 'three'
import bark from '../images/bark_lowpoly.png'
/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Stump {
  constructor() {
    const loader = new TextureLoader()
    this.centerCylgeometry = new CylinderGeometry(5, 5, 10, 30)
    this.conegeometry = new ConeGeometry(8, 5, 10)
    this.baseCylgeometry = new CylinderGeometry(1, 1, 2, 15)
    this.knotgeometry = new TorusKnotGeometry(4, 1, 100, 16, 2, 7)
    this.material = new MeshLambertMaterial({ map: loader.load(bark) })

    this.cylmesh = new Mesh(this.centerCylgeometry, this.material)
    this.conemesh = new Mesh(this.conegeometry, this.material)
    this.baseCylmesh = new Mesh(this.baseCylgeometry, this.material)
    this.knotmesh = new Mesh(this.knotgeometry, this.material)

    this.group = new Group()
    this.group.add(this.cylmesh)
    this.group.add(this.conemesh)
    this.group.add(this.knotmesh)

    this.baseCylmesh.rotation.x = Math.PI / 3
    this.knotmesh.rotation.x = Math.PI / 2

    this.knotmesh.position.y = 1
    this.cylmesh.position.y = 5
    this.conemesh.position.y = 2.5
    this.baseCylmesh.position.z = -5
    this.baseCylmesh.position.y = 1
  }
}

export default Stump
