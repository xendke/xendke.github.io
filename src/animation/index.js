import * as THREE from 'three'
import { WEBGL, debounce, getRandomNumber } from './helpers'

class Line {
	constructor(color, numberOfPoints) {
		const material = new THREE.LineBasicMaterial({ color })
		const points = []
		const originalYs = []
		const boundaries = []
		const velocities = []

		const maxY = 5
		const boundarySpace = 2
		const spacing = 10
		const velocityMax = 0.03
		const offset = (numberOfPoints * spacing) / 2

		for (let i = 0; i < numberOfPoints; i++) {
			const x = i * spacing - offset
			const y = getRandomNumber(maxY * -1, maxY)
			const boundary = Math.abs(y) + boundarySpace
			boundaries.push(boundary)
			originalYs.push(y)
			velocities.push(getRandomNumber(velocityMax * -1, velocityMax))
			points.push(new THREE.Vector3(x, y, 0))
		}

		const geometry = new THREE.BufferGeometry().setFromPoints(points)
		const line = new THREE.Line(geometry, material)

		this.line = line
		this.originalYs = originalYs
		this.velocities = velocities
		this.boundaries = boundaries
	}

	getLine() {
		return this.line
	}
	getVelocity(i) {
		return this.velocities[i]
	}
	flipVelocity(i) {
		this.velocities[i] = this.velocities[i] * -1
	}
	isOutOfRange(point, i) {
		const min = this.boundaries[i] * -1
		const max = this.boundaries[i]
		return point < min || point > max
	}
}

const runAnimation = (canvasRef) => {
	var { height } = canvasRef.getBoundingClientRect()
	const aspectRatio = window.outerWidth / height
	const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000)
	camera.position.setZ(40)

	const renderer = new THREE.WebGLRenderer({
		canvas: canvasRef,
	})
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(window.outerWidth, height)

	const background = new THREE.Color(0x222831)
	const scene = new THREE.Scene()
	scene.background = background
	const points = 50
	const customLines = [
		new Line(0xf05454, points),
		new Line(0x0098ff, points),
		new Line(0x00a43a, points),
	]
	customLines.forEach((line) => scene.add(line.getLine()))
	function resizeCanvas() {
		var { height } = canvasRef.getBoundingClientRect()
		console.log(window.outerWidth)
		camera.aspect = window.outerWidth / height
		camera.updateProjectionMatrix()
		renderer.setSize(window.outerWidth, height)
	}
	window.addEventListener('resize', debounce(resizeCanvas, 500), false)

	const animate = () => {
		requestAnimationFrame(animate)

		customLines.forEach((customLine) => {
			const line = customLine.getLine()
			const positions = line.geometry.attributes.position.array

			for (let i = 1; i <= positions.length; i = i + 3) {
				const yIndex = Math.floor(i / 3)
				const velocity = customLine.getVelocity(yIndex)
				positions[i] = positions[i] + velocity

				if (customLine.isOutOfRange(positions[i], yIndex)) {
					customLine.flipVelocity(yIndex)
				}
			}
			line.geometry.attributes.position.needsUpdate = true
		})

		renderer.render(scene, camera)
	}
	animate()
}

export { WEBGL }
export default runAnimation
