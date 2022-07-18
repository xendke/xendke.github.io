import { getCustomLines, current } from './lines'
import { debounce } from './helpers'

interface Params {
	canvas: HTMLCanvasElement
	scene: THREE.Scene
	camera: THREE.PerspectiveCamera
	renderer: THREE.WebGLRenderer
}

let previousHeight: number
let previousWidth: number

export const handleResize = ({ canvas, scene, camera, renderer }: Params) => {
	function resizeCanvas() {
		var { height } = canvas.getBoundingClientRect()
		if (previousWidth && previousHeight) {
			if (
				previousHeight !== window.innerHeight &&
				previousWidth === window.outerWidth
			) {
				return
			}
		}
		previousHeight = window.innerHeight
		previousWidth = window.outerWidth
		camera.aspect = window.outerWidth / height
		camera.updateProjectionMatrix()
		renderer.setSize(window.outerWidth, height)
		current.lines.forEach((line) => scene.remove(line.getLine()))
		const points = window.outerWidth / 28
		current.lines = getCustomLines([0xf05454, 0x0098ff, 0x00a43a], points)
		current.lines.forEach((line) => scene.add(line.getLine()))
	}
	window.addEventListener('resize', debounce(resizeCanvas, 500), false)
}
