/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { BoxGeometry, MeshLambertMaterial, Mesh, Group, AxesHelper } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Garnet {
  constructor(color) {
    this.geometry = new BoxGeometry(4, 4, 4)
    this.material = new MeshLambertMaterial({ color})
    this.mesh1 = new Mesh(this.geometry, this.material)
    this.mesh2 = new Mesh(this.geometry, this.material)
    this.mesh3 = new Mesh(this.geometry, this.material)
    this.mesh4 = new Mesh(this.geometry, this.material)
    this.mesh5 = new Mesh(this.geometry, this.material)
    this.mesh6 = new Mesh(this.geometry, this.material)
    this.mesh7 = new Mesh(this.geometry, this.material)
    this.mesh8 = new Mesh(this.geometry, this.material)
    this.helper = new AxesHelper(5)

    this.group = new Group();
    this.group.add(this.mesh1);
    this.group.add(this.mesh2);
    this.group.add(this.mesh3);
    this.group.add(this.mesh4);
    this.group.add(this.mesh5);
    this.group.add(this.mesh6);
    this.group.add(this.mesh7);
    this.group.add(this.mesh8);
    this.group.rotation.y += Math.PI/9

  }
}

export default Garnet
