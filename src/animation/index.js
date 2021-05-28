import * as THREE from 'three'
import { WEBGL, debounce, throttle } from './helpers'

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
	const aspectRatio = window.innerWidth / window.innerHeight
	const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000)
	camera.position.setZ(5)
	camera.position.setX(1)

	const renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('canvas'),
	})
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(window.innerWidth, window.innerHeight)

	const background = new THREE.Color(0x222831)
	const scene = new THREE.Scene()
	scene.background = background
	scene.fog = new THREE.Fog(background, 1, 15)

	const planes = [planeFactory(0xf05454, 0), planeFactory(0x30475e, 1)]
	planes.forEach((plane) => {
		scene.add(plane)
	})
	let planesVelocity = false

	const movePlanes = (multiplier) => {
		planes.forEach((plane, index) => {
			const offset = index * 10
			plane.rotation.z = multiplier * 0.001 - offset
		})
	}

	const scrollHandler = () =>
		movePlanes(document.body.getBoundingClientRect().top)
	window.addEventListener('scroll', throttle(scrollHandler, 20), false)

	const mouseHandler = (event) =>
		(planesVelocity = (event.pageX + event.pageY) / 1000000)
	window.addEventListener('mousemove', throttle(mouseHandler, 1000), false)

	function resizeCanvas() {
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
		renderer.setSize(window.innerWidth, window.innerHeight)
	}
	window.addEventListener('resize', debounce(resizeCanvas, 500), false)

	const animate = () => {
		requestAnimationFrame(animate)
		const animationDisabled = localStorage.getItem('animationDisabled')
		if (!animationDisabled) {
			planes.forEach((plane) => {
				plane.rotation.x -= 0.0015
				plane.rotation.y += 0.0015
				if (planesVelocity) {
					plane.rotation.z += planesVelocity
				}
			})
		}
		renderer.render(scene, camera)
	}
	animate()
}

export { WEBGL }
export default runAnimation
