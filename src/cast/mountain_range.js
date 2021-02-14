import { Group } from 'three'
import Mountain from './mountain'

class MountainRange {
  constructor(color) {
    this.mountain = new Mountain(0x404040)

    this.mountain.group.position.z -= 100
    this.mountain.group.position.x -= 90
    this.mountain.group.scale.x = 3
    this.mountain.group.scale.y = 3
    this.mountain.group.scale.z = 3

    this.mountain1 = new Mountain(0x404040)

    this.mountain1.group.position.z -= 100
    this.mountain1.group.position.x -= 50
    this.mountain1.group.scale.x = 2
    this.mountain1.group.scale.y = 2
    this.mountain1.group.scale.z = 2

    this.mountain2 = new Mountain(0x404040)

    this.mountain2.group.position.z -= 150
    this.mountain2.group.position.x -= 40
    this.mountain2.group.scale.x = 3.2
    this.mountain2.group.scale.y = 3.2
    this.mountain2.group.scale.z = 3.2

    this.mountain3 = new Mountain(0x404040)

    this.mountain3.group.position.z -= 200
    this.mountain3.group.position.x -= 100
    this.mountain3.group.scale.x = 6
    this.mountain3.group.scale.y = 6
    this.mountain3.group.scale.z = 6

    this.mountain4 = new Mountain(0x404040)

    this.mountain4.group.position.z -= 250
    this.mountain4.group.position.x -= 250
    this.mountain4.group.scale.x = 10
    this.mountain4.group.scale.y = 10
    this.mountain4.group.scale.z = 10

    this.group = new Group()
    this.group.add(this.mountain.group)
    this.group.add(this.mountain1.group)
    this.group.add(this.mountain2.group)
    this.group.add(this.mountain3.group)
    this.group.add(this.mountain4.group)
  }
}

export default MountainRange
