import { CylinderGeometry, MeshLambertMaterial, Mesh, Group, ConeGeometry, TextureLoader } from 'three'
import bark from '../images/bark_lowpoly.png'

class Tree {
  constructor(height, leaveCount) {
    const loader = new TextureLoader()

    let radius = height / 10

    this.trunk = new CylinderGeometry(radius / 1.5, radius, height, 64)
    this.trunkMaterial = new MeshLambertMaterial({ map: loader.load(bark) })
    this.trunkMesh = new Mesh(this.trunk, this.trunkMaterial)

    this.group = new Group()
    this.group.add(this.trunkMesh)

    this.leavesMaterial = new MeshLambertMaterial({ color: 0x097207 })
    let leaveRadius = 4
    let leaveHeight = 3
    let leavePos = height / (1.75 * leaveCount)
    while (leaveCount > 0) {
      let currentRadius = radius * leaveRadius
      let currentHeight = height / leaveHeight
      this.leaves = new ConeGeometry(currentRadius, currentHeight, 64)
      this.leavesMesh = new Mesh(this.leaves, this.leavesMaterial)
      this.leavesMesh.position.y += leavePos
      this.group.add(this.leavesMesh)
      leavePos += 0.53 * currentHeight
      leaveRadius *= 0.75
      leaveHeight++
      leaveCount--
    }
  }
}

export default Tree
