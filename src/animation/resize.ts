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

export const handleResize = ({
	canvas,
	containerRef,
	scene,
	camera,
	renderer,
}: Params) => {
	function resizeCanvas() {
		if (!containerRef.current) return
		const width = Math.round(window.innerWidth)
		const height = Math.round(containerRef.current.getBoundingClientRect().height)
		const difference = Math.abs(width - previousWidth)
		if (difference < 20) {
			return
		}
		previousWidth = width
		containerRef.current.style.width = `${width}px`
		containerRef.current.style.height = `${height}px`
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
