import { MeshLambertMaterial, CylinderGeometry, TorusGeometry, Mesh, DoubleSide, Group } from 'three'
// import bark from '../images/bark_lowpoly.png'

class Hydro {
  constructor() {
    const X_POSITION = -5.3
    const Z_POSITION = 2.5

    this.baseGeometry = new CylinderGeometry(0.5, 0.45, 0.2, 32)
    this.baseMaterial = new MeshLambertMaterial({ color: 'purple', side: DoubleSide })
    this.baseMesh = new Mesh(this.baseGeometry, this.baseMaterial)
    this.baseMesh.position.y += 0.9

    this.baseMeshTop = new Mesh(this.baseGeometry, this.baseMaterial)
    this.baseMeshTop.rotation.z = Math.PI
    this.baseMeshTop.position.y += 3.1

    this.endBase = new CylinderGeometry(0.45, 0.45, 0.1, 32)
    this.endBaseMesh = new Mesh(this.endBase, this.baseMaterial)
    this.endBaseMesh.position.y += 3.2

    this.metalRing = new CylinderGeometry(0.45, 0.45, 0.05, 32)
    this.metalMaterial = new MeshLambertMaterial({ color: 'grey', side: DoubleSide })
    this.metalRingMesh = new Mesh(this.metalRing, this.metalMaterial)
    this.metalRingMesh.position.y += 3.27

    this.lidBase = new CylinderGeometry(0.45, 0.45, 0.3, 32)
    this.lidBaseMaterial = new MeshLambertMaterial({ color: 0x26292b, side: DoubleSide })
    this.lidBaseMesh = new Mesh(this.lidBase, this.lidBaseMaterial)
    this.lidBaseMesh.position.y += 3.45

    this.geometry = new CylinderGeometry(0.5, 0.5, 2, 32)
    this.mesh = new Mesh(this.geometry, this.baseMaterial)
    this.mesh.position.y += 2

    this.handle = new TorusGeometry(0.4, 0.05, 5, 100, 3)
    this.handleMesh = new Mesh(this.handle, this.lidBaseMaterial)
    this.handleMesh.position.y += 3.5

    this.group = new Group()
    this.group.add(this.mesh)
    this.group.add(this.baseMesh)
    this.group.add(this.baseMeshTop)
    this.group.add(this.endBaseMesh)
    this.group.add(this.metalRingMesh)
    this.group.add(this.lidBaseMesh)
    this.group.add(this.handleMesh)
    this.group.position.x = X_POSITION
    this.group.position.z = Z_POSITION
  }
}

export default Hydro
