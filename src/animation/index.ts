import * as THREE from 'three'
import { WEBGL } from './helpers'
import { current } from './lines'
import { handleResize } from './resize'

type CameraWithPosition = THREE.PerspectiveCamera & { position: THREE.Vector3 }

const runAnimation = (canvasRef: HTMLCanvasElement) => {
	var { height } = canvasRef.getBoundingClientRect()
	const aspectRatio = window.outerWidth / height
	const camera = new THREE.PerspectiveCamera(
		75,
		aspectRatio,
		0.1,
		1000
	) as CameraWithPosition
	camera.position.setZ(40)

	const renderer = new THREE.WebGLRenderer({
		canvas: canvasRef,
		antialias: true,
	})
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(window.outerWidth, height)

	const background = new THREE.Color(0x222831)
	const scene = new THREE.Scene()
	scene.background = background
	scene.fog = new THREE.Fog(background, 10, 80)

	current.lines.forEach((line) => scene.add(line.getLine()))

	handleResize({
		canvas: canvasRef,
		scene,
		camera,
		renderer,
	})

	const animate = () => {
		requestAnimationFrame(animate)

		current.lines.forEach((customLine) => {
			const line = customLine.getLine()
			const positions: number[] = line.geometry.attributes.position
				.array as number[]

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
