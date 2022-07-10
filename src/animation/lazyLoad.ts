export default async (canvasRef: HTMLCanvasElement) => {
	const { default: runAnimation, WEBGL } = await import(
		/* webpackChunkName: "animation" */ './index'
	)
	if (WEBGL.isWebGLAvailable()) {
		runAnimation(canvasRef)
	}
}
