import * as THREE from 'three'
import { getRandomNumber } from './helpers'

class Line {
	private line: THREE.Line
	private velocities: number[]
	private boundaries: number[]

	constructor(color: number, numberOfPoints: number) {
		const material = new THREE.LineBasicMaterial({ color })
		const points: THREE.Vector3[] = []
		const boundaries: number[] = []
		const velocities: number[] = []

		const xShift = getRandomNumber(-3, 3)

		const maxY = 5
		const boundarySpace = 2
		const spacing = 10
		const velocityMax = 0.03
		const offset = (numberOfPoints * spacing) / 2

		for (let i = 0; i < numberOfPoints; i++) {
			const x = i * spacing - offset + xShift
			const y = getRandomNumber(maxY * -1, maxY)
			const boundary = Math.abs(y) + boundarySpace
			boundaries.push(boundary)
			velocities.push(getRandomNumber(velocityMax * -1, velocityMax))
			points.push(new THREE.Vector3(x, y, 0))
		}

		const geometry = new THREE.BufferGeometry().setFromPoints(points)
		const line = new THREE.Line(geometry, material)

		this.line = line
		this.velocities = velocities
		this.boundaries = boundaries
	}

	getLine() {
		return this.line
	}
	getVelocity(i: number) {
		return this.velocities[i]
	}
	flipVelocity(i: number) {
		this.velocities[i] = this.velocities[i] * -1
	}
	isOutOfRange(point: number, i: number) {
		const min = this.boundaries[i] * -1
		const max = this.boundaries[i]
		return point < min || point > max
	}
}

export const getCustomLines = (colors: number[], points: number): Line[] => {
	const lines = colors.map((color) => new Line(color, points))

	return lines
}

export const current = {
	lines: getCustomLines(
		[0xf05454, 0x0098ff, 0x00a43a],
		window.outerWidth / 28
	),
}
