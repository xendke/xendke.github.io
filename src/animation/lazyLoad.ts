export default async (
	canvas: HTMLCanvasElement,
	containerRef: { current: HTMLDivElement | null }
) => {
	const { default: runAnimation, WEBGL } = await import(
		/* webpackChunkName: "animation" */ './index'
	)
	if (WEBGL.isWebGLAvailable() && containerRef?.current) {
		runAnimation(canvas, containerRef)
	}
}
