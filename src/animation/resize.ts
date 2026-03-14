import { getCustomLines, current } from './lines'
import { debounce } from './helpers'

interface Params {
	canvas: HTMLCanvasElement
	containerRef: { current: HTMLDivElement | null }
	scene: THREE.Scene
	camera: THREE.PerspectiveCamera
	renderer: THREE.WebGLRenderer
}

let previousWidth = window.innerWidth
let previousHeight = 200

export const handleResize = ({
	canvas,
	containerRef,
	scene,
	camera,
	renderer,
}: Params) => {
	function resizeCanvas() {
		if (!containerRef.current) return
		const rect = containerRef.current.getBoundingClientRect()
		const width = Math.round(rect.width)
		const height = Math.round(rect.height)
		const widthDiff = Math.abs(width - previousWidth)
		const heightDiff = Math.abs(height - previousHeight)
		if (widthDiff < 20 && heightDiff < 20) {
			return
		}
		previousWidth = width
		previousHeight = height
		camera.aspect = width / height
		camera.updateProjectionMatrix()
		renderer.setSize(width, height)
		current.lines.forEach((line) => scene.remove(line.getLine()))
		const points = width / 28
		current.lines = getCustomLines([0xf05454, 0x0098ff, 0x00a43a], points)
		current.lines.forEach((line) => scene.add(line.getLine()))
	}
	window.addEventListener('resize', debounce(resizeCanvas, 500), false)
}
