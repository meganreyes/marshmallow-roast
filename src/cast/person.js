/**
 * We take the approach of organizing each “cast member” in a scene within its own file.
 * This is a choice and isn’t required, but it does isolate internal changes/enhancements
 * to these specific “characters.”
 */
import { Group } from 'three'
import Head from '../cast/head'
import Body from '../cast/body'
import Arm from '../cast/arm'
import Leg from '../cast/leg'
import Marshmellow from '../cast/marshmellow'

/**
 * The use of a JavaScript “class” is also a design choice.
 */
class Person {
  constructor(scale, xPos, yPos, zPos) {
    switch (arguments.length) {
      case 0:
        scale = 1
        xPos = 0
        yPos = 0
        zPos = 0
        break
      case 1:
        xPos = 0
        yPos = 0
        zPos = 0
        break
      case 2:
        yPos = 0
        zPos = 0
        break
      case 3:
        zPos = 0
        break
      default:
        break
    }

    this.head = new Head()
    this.head.group.position.y += 2

    this.body = new Body()

    this.leftLeg = new Leg()
    this.leftLeg.group.scale.set(0.7, 0.7, 0.7)

    this.leftLeg.group.rotation.x += Math.PI / 2
    this.leftLeg.group.rotation.y -= Math.PI
    this.leftLeg.group.rotation.z += Math.PI

    this.leftLeg.group.position.x += 0.5
    this.leftLeg.group.position.y -= 1.75
    this.leftLeg.group.position.z += 1.25

    this.rightLeg = new Leg()
    this.rightLeg.group.scale.set(0.75, 0.75, 0.75)

    this.rightLeg.group.rotation.x += Math.PI / 2
    this.rightLeg.group.rotation.y -= Math.PI
    this.rightLeg.group.rotation.z += Math.PI

    this.rightLeg.group.position.x -= 0.5
    this.rightLeg.group.position.y -= 1.75
    this.rightLeg.group.position.z += 1.25

    this.leftArm = new Arm()
    this.leftArm.group.scale.set(0.7, 0.7, 0.7)

    this.leftArm.group.position.x += 1.15
    this.leftArm.group.position.y -= 0.3
    this.leftArm.group.position.z += 0.5

    this.leftArm.group.rotation.y -= Math.PI / 4
    this.leftArm.group.rotation.z += Math.PI / 12

    this.rightArm = new Arm()
    this.rightArm.group.scale.set(0.7, 0.7, 0.7)

    this.rightArm.group.position.x -= 1.15
    this.rightArm.group.position.y -= 0.3
    this.rightArm.group.position.z += 0.5

    this.rightArm.group.rotation.x -= Math.PI / 6
    this.rightArm.group.rotation.y += Math.PI / 8
    this.rightArm.group.rotation.z -= Math.PI / 12

    this.mellow = new Marshmellow()
    this.mellow.group.scale.set(1.5, 1.5, 1.5)

    this.mellow.group.rotation.x += Math.PI / 2
    this.mellow.group.position.x = this.rightArm.group.position.x + 0.2
    this.mellow.group.position.y -= 0.7
    this.mellow.group.position.z += 3

    this.group = new Group()
    this.group.add(this.head.group)
    this.group.add(this.body.group)
    this.group.add(this.leftArm.group)
    this.group.add(this.rightArm.group)
    this.group.add(this.leftLeg.group)
    this.group.add(this.rightLeg.group)
    this.group.add(this.mellow.group)

    this.group.position.set(xPos, yPos, zPos)
    this.group.scale.set(scale, scale, scale)
  }

  burnMarshmellow(alpha) {
    this.mellow.colorChange(alpha)
    this.notice()
  }

  getNewMarshmellow(alpha) {
    this.mellow.resetColor()
  }

  notice() {
    if (this.mellow.nextColor.getHex() == '0x000000') {
      this.head.addMark()
    } else {
      this.head.removeMark()
    }
  }
}

export default Person
