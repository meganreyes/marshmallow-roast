import { MeshLambertMaterial, CylinderGeometry, TorusGeometry, Mesh, DoubleSide, Group } from 'three'

class Lantern {
  constructor() {
    const X_POSITION = -14.3
    const Z_POSITION = 3

    this.geometry = new CylinderGeometry(0.4, 0.6, 0.5, 5, 1)
    this.material = new MeshLambertMaterial({ color: 0x3050d6, side: DoubleSide })
    this.baseBottomMesh = new Mesh(this.geometry, this.material)
    this.baseBottomMesh.position.y += 2.5

    this.baseTopper = new CylinderGeometry(0.4, 0.4, 0.8, 100, 1)
    this.baseTopperMesh = new Mesh(this.baseTopper, this.material)
    this.baseTopperMesh.position.y += 2.8

    this.metalRing = new CylinderGeometry(0.4, 0.4, 0.3, 32)
    this.metalMaterial = new MeshLambertMaterial({ color: 'grey', side: DoubleSide })
    this.metalRingMesh = new Mesh(this.metalRing, this.metalMaterial)
    this.metalRingMesh.position.y += 3.3

    this.glass = new CylinderGeometry(0.45, 0.4, 1, 32)
    this.glassMaterial = new MeshLambertMaterial({ color: 0xf4d7b9, opacity: 0.7, transparent: true, side: DoubleSide })
    this.glassMesh = new Mesh(this.glass, this.glassMaterial)
    this.glassMesh.position.y += 3.9

    this.lidBaseMesh = new Mesh(this.geometry, this.material)
    this.lidBaseMesh.position.y += 4.6

    this.lidTopper = new CylinderGeometry(0.4, 0.4, 0.2, 100, 1)
    this.lidTopperMesh = new Mesh(this.lidTopper, this.material)
    this.lidTopperMesh.position.y += 4.9

    this.handle = new TorusGeometry(0.4, 0.05, 5, 100, 3)
    this.handleMesh = new Mesh(this.handle, this.metalMaterial)
    this.handleMesh.position.y += 4.9

    this.light = new CylinderGeometry(0.1, 0.1, 1, 100, 1)
    this.lightMaterial = new MeshLambertMaterial({ color: 0xd17d00 })
    this.lightMesh = new Mesh(this.light, this.lightMaterial)
    this.lightMesh.position.y += 3.9

    this.glow = new CylinderGeometry(0.35, 0.35, 1, 100, 1)
    this.glowMaterial = new MeshLambertMaterial({ color: 0xd17d00, opacity: 0.4, transparent: true })
    this.glowMesh = new Mesh(this.glow, this.glowMaterial)
    this.glowMesh.position.y += 3.9

    this.group = new Group()
    this.group.add(this.baseBottomMesh)
    this.group.add(this.baseTopperMesh)
    this.group.add(this.metalRingMesh)
    this.group.add(this.glassMesh)
    this.group.add(this.lidBaseMesh)
    this.group.add(this.lidTopperMesh)
    this.group.add(this.handleMesh)
    this.group.add(this.lightMesh)
    this.group.add(this.glowMesh)

    this.group.position.x = X_POSITION
    this.group.position.z = Z_POSITION
  }
}

export default Lantern
