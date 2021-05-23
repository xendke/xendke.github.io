import * as THREE from 'three'
import { WEBGL } from './helpers'

// colors:
// light: e8e8e8
// dark: 222831
// salmon: f05454
// blue: 30475e

const planeFactory = (color, index) => {
	const geometry = new THREE.PlaneGeometry(100, 100, 30)
	const material = new THREE.MeshBasicMaterial({
		color,
		side: THREE.DoubleSide,
		wireframe: true,
	})
	const plane = new THREE.Mesh(geometry, material)
	const top = document.body.getBoundingClientRect().top
	const offset = index * 10
	plane.position.z = index
	plane.rotation.z = top * 0.001 - offset
	return plane
}

const runAnimation = () => {
	const background = new THREE.Color(0x222831)
	const scene = new THREE.Scene()
	const aspectRatio = window.innerWidth / window.innerHeight
	const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000)

	const renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('canvas'),
	})

	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(window.innerWidth, window.innerHeight)
	camera.position.setZ(5)
	scene.background = background

	const planes = [planeFactory(0xf05454, 0), planeFactory(0x30475e, 1)]
	planes.forEach((plane) => {
		scene.add(plane)
	})
	scene.fog = new THREE.Fog(background, 1, 15)

	const movePlanes = () => {
		const top = document.body.getBoundingClientRect().top
		planes.forEach((plane, index) => {
			const offset = index * 10
			plane.rotation.z = top * 0.001 - offset
		})
	}
	document.body.onscroll = movePlanes

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
		renderer.setSize(window.innerWidth, window.innerHeight)
	}
	window.addEventListener('resize', onWindowResize, false)

	const animate = () => {
		requestAnimationFrame(animate)
		planes.forEach((plane) => {
			plane.rotation.x -= 0.0025
			plane.rotation.y += 0.0025
		})
		renderer.render(scene, camera)
	}
	animate()
}

export { WEBGL }
export default runAnimation
