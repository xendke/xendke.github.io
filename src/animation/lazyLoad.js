export default async (canvasRef) => {
	const { default: runAnimation, WEBGL } = await import(
		/* webpackChunkName: "animation" */ './index'
	)
	if (WEBGL.isWebGLAvailable()) {
		runAnimation(canvasRef)
	}
}
