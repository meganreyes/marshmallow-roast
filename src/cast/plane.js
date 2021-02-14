/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { CircleGeometry, MeshLambertMaterial, Mesh, DoubleSide, TextureLoader } from 'three'
import grass from '../images/grass_texture.png'
/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Plane {
  constructor(color) {
    const loader = new TextureLoader()
    this.geometry = new CircleGeometry(window.innerWidth / 5, window.innerWidth / 5, 8, 8)

    this.material = new MeshLambertMaterial({ map: loader.load(grass), side: DoubleSide })
    this.mesh = new Mesh(this.geometry, this.material)
    this.mesh.rotation.x = Math.PI / 2
    this.mesh.rotation.y = Math.PI / 1
  }
}

export default Plane
