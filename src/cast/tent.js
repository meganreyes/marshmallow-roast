import {
  PlaneGeometry,
  MeshLambertMaterial,
  CylinderGeometry,
  Mesh,
  DoubleSide,
  Group,
  TextureLoader
} from 'three'
import tent from '../images/tent_texture.jpg'
import bark from '../images/bark_lowpoly.png'
class Tent {
  constructor() {
    const loader = new TextureLoader()
    this.outsidePlaneA = new PlaneGeometry(10, 10, 10)
    this.materialPlaneA = new MeshLambertMaterial({ map: loader.load(tent), side: DoubleSide })
    this.meshPlaneA = new Mesh(this.outsidePlaneA, this.materialPlaneA)
    this.meshPlaneA.position.y += 5.27
    this.meshPlaneA.position.x += 4
    this.meshPlaneA.position.z -= 10
    this.meshPlaneA.rotation.x = Math.PI / 6
    this.meshPlaneA.castShadow = true
    this.meshPlaneA.revieveShadow = true

    this.bottomPlaneA = new PlaneGeometry(10, 2, 5)
    this.materialBottomPlaneA = new MeshLambertMaterial({ map: loader.load(tent), side: DoubleSide })
    this.meshBottomPlaneA = new Mesh(this.bottomPlaneA, this.materialBottomPlaneA)
    this.meshBottomPlaneA.position.z -= 12.48

    this.outsidePlaneB = new PlaneGeometry(10, 10, 10)
    this.materialPlaneB = new MeshLambertMaterial({ map: loader.load(tent), side: DoubleSide })
    this.meshPlaneB = new Mesh(this.outsidePlaneB, this.materialPlaneB)
    this.meshPlaneB.position.y += 5.27
    this.meshPlaneA.position.x -= 4
    this.meshPlaneB.position.z -= 5
    this.meshPlaneB.rotation.x = 5 * (Math.PI / 6)

    this.bottomPlaneB = new PlaneGeometry(10, 2, 5)
    this.materialBottomPlaneB = new MeshLambertMaterial({ map: loader.load(tent), side: DoubleSide })
    this.meshBottomPlaneB = new Mesh(this.bottomPlaneA, this.materialBottomPlaneB)
    this.meshBottomPlaneB.position.z -= 2.5

    this.outsideFlapA = new PlaneGeometry(10, 13, 10)
    this.materialFlapA = new MeshLambertMaterial({ map: loader.load(tent), side: DoubleSide })
    this.meshFlapA = new Mesh(this.outsideFlapA, this.materialFlapA)
    this.meshFlapA.position.y += 5
    this.meshFlapA.position.z -= 11.6
    this.meshFlapA.rotation.x = 40 * (Math.PI / 180)

    this.outsideFlapB = new PlaneGeometry(10, 13, 10)
    this.materialFlapB = new MeshLambertMaterial({ map: loader.load(tent), side: DoubleSide })
    this.meshFlapB = new Mesh(this.outsideFlapB, this.materialFlapB)
    this.meshFlapB.position.y += 5
    this.meshFlapB.position.z -= 3.5
    this.meshFlapB.rotation.x = 140 * (Math.PI / 180)

    this.frontPole = new CylinderGeometry(0.1, 0.1, 11, 32)
    this.materialFrontPole = new MeshLambertMaterial({ map: loader.load(bark), side: DoubleSide })
    this.meshFrontPole = new Mesh(this.frontPole, this.materialFrontPole)
    this.meshFrontPole.position.x -= 4.75
    this.meshFrontPole.position.y += 5
    this.meshFrontPole.position.z -= 7.5


    this.backPole = new CylinderGeometry(0.1, 0.1, 11, 32)
    this.materialBackPole = new MeshLambertMaterial({ map: loader.load(bark), side: DoubleSide })
    this.meshBackPole = new Mesh(this.backPole, this.materialBackPole)
    this.meshBackPole.position.x += 4.75
    this.meshBackPole.position.y += 5
    this.meshBackPole.position.z -= 7.5

    this.backPoleBottomA = new CylinderGeometry(0.1, 0.1, 2, 32)
    this.materialBackPoleBottomA = new MeshLambertMaterial({ map: loader.load(bark), side: DoubleSide })
    this.meshBackPoleBottomA = new Mesh(this.backPoleBottomA, this.materialBackPoleBottomA)
    this.meshBackPoleBottomA.position.x += 4.75
    this.meshBackPoleBottomA.position.y += 0.5
    this.meshBackPoleBottomA.position.z -= 15
    this.meshBackPoleBottomA.rotation.x = 160 * (Math.PI / 180)

    this.backPoleBottomB = new CylinderGeometry(0.1, 0.1, 2, 32)
    this.materialBackPoleBottomB = new MeshLambertMaterial({ map: loader.load(bark), side: DoubleSide })
    this.meshBackPoleBottomB = new Mesh(this.backPoleBottomB, this.materialBackPoleBottomB)
    this.meshBackPoleBottomB.position.x -= 4.75
    this.meshBackPoleBottomB.position.y += 0.5
    this.meshBackPoleBottomB.position.z -= 15
    this.meshBackPoleBottomB.rotation.x = 160 * (Math.PI / 180)

    this.backPoleBottomC = new CylinderGeometry(0.1, 0.1, 2, 32)
    this.materialBackPoleBottomC = new MeshLambertMaterial({ map: loader.load(bark), side: DoubleSide })
    this.meshBackPoleBottomC = new Mesh(this.backPoleBottomC, this.materialBackPoleBottomC)
    this.meshBackPoleBottomC.position.x -= 4.75
    this.meshBackPoleBottomC.position.y += 0.5
    this.meshBackPoleBottomC.rotation.x = 20 * (Math.PI / 180)

    this.backPoleBottomD = new CylinderGeometry(0.1, 0.1, 2, 32)
    this.materialBackPoleBottomD = new MeshLambertMaterial({ map: loader.load(bark), side: DoubleSide })
    this.meshBackPoleBottomD = new Mesh(this.backPoleBottomD, this.materialBackPoleBottomD)
    this.meshBackPoleBottomD.position.x += 4.75
    this.meshBackPoleBottomD.position.y += 0.5
    this.meshBackPoleBottomD.rotation.x = 20 * (Math.PI / 180)

    this.group = new Group()
    this.group.add(this.meshPlaneA)
    this.group.add(this.meshBottomPlaneA)
    this.group.add(this.meshFlapA)
    this.group.add(this.meshPlaneB)
    this.group.add(this.meshBottomPlaneB)
    this.group.add(this.meshFlapB)
    this.group.add(this.meshFrontPole)
    this.group.add(this.meshBackPole)
    this.group.add(this.meshBackPoleBottomA)
    this.group.add(this.meshBackPoleBottomB)
    this.group.add(this.meshBackPoleBottomC)
    this.group.add(this.meshBackPoleBottomD)
  }
}

export default Tent
