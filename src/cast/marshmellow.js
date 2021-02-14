/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { CylinderGeometry, BoxGeometry, MeshLambertMaterial, Mesh, Group, Color } from 'three'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Marshmellow {
  constructor() {
    this.geometryStick = new CylinderGeometry(0.1, 0.1, 1.5, 64)
    this.materialStick = new MeshLambertMaterial({ color: 0x873600 })
    this.meshStick = new Mesh(this.geometryStick, this.materialStick)

    this.geometryMarshmellow = new BoxGeometry(0.25, 0.25, 0.25)
    this.materialMarshmellow = new MeshLambertMaterial({ color: 0xFFFFFF })
    this.meshMarshmellow = new Mesh(this.geometryMarshmellow, this.materialMarshmellow)
    this.meshMarshmellow.position.y += 0.5

    this.nextColor = new Color( 0xE99B00 );

    this.group = new Group()
    this.group.add(this.meshStick)
    this.group.add(this.meshMarshmellow)
  }

  colorChange(alpha){
    if(this.meshMarshmellow.material.color.getHex() < 0xF00000){
        this.nextColor = new Color( 0x000000 );
    }
    this.meshMarshmellow.material.color.lerp(this.nextColor, alpha)
  }

  resetColor(){
    this.meshMarshmellow.material.color.setHex( 0xFFFFFF );
    this.nextColor = new Color( 0xE99B00 );
  }


}

export default Marshmellow
