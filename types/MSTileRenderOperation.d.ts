// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTileRenderOperation extends NSOperation {
    /* typeEncoding=@"<MSRenderingContextCacheProvider>", ivar=_cacheProvider, attributes=(retain,nonatomic) */
    	cacheProvider(): any;
    /* typeEncoding=@"NSColorSpace", ivar=_canvasColorSpace, attributes=(retain,nonatomic) */
    	canvasColorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=c, ivar=_isExecuting, attributes=(assign) */
    	isExecuting(): boolean;
    /* typeEncoding=c, ivar=_isFinished, attributes=(assign) */
    	isFinished(): boolean;
    /* typeEncoding=@"MSOverlaySettings", ivar=_overlaySettings, attributes=(retain,nonatomic) */
    	overlaySettings(): MSOverlaySettings;
    /* typeEncoding=@"NSOperationQueue", ivar=_renderPassQueue, attributes=(retain,nonatomic) */
    	renderPassQueue(): cocoascript.NSOperationQueue;
    /* typeEncoding=@"NSArray", ivar=_renderPasses, attributes=(copy,nonatomic) */
    	renderPasses(): cocoascript.NSArray;
    /* typeEncoding=@"NSBitmapImageRep", ivar=_renderedImage, attributes=(retain,nonatomic) */
    	renderedImage(): cocoascript.NSBitmapImageRep;
    /* typeEncoding=@"MSTiledRenderer", ivar=_renderer, attributes=(retain,nonatomic) */
    	renderer(): MSTiledRenderer;
    /* typeEncoding={MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}, ivar=_renderingParameters, attributes=(assign,nonatomic) */
    	renderingParameters(): MSRenderingParameters;
    /* typeEncoding=@120@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24@96@104@112 */
    	static bitmapImageFromRenderPasses_renderingParameters_cacheProvider_canvasColorSpace_overlaySettings(...args: any[]): any;
    /* typeEncoding=@128@0:8@16@24{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}32@104@112@120 */
    	static bitmapImageRenderForPage_inDocument_renderingParameters_cacheProvider_canvasColorSpace_overlaySettings(...args: any[]): any;
    /* typeEncoding=@128@0:8@16@24{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}32@104@112@120 */
    	static renderOperationWithPage_inDocument_renderingParameters_cacheProvider_canvasColorSpace_overlaySettings(...args: any[]): any;
    /* typeEncoding=@120@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24@96@104@112 */
    	static renderOperationWithRenderPasses_renderingParameters_cacheProvider_canvasColorSpace_overlaySettings(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	asynchronous(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cacheProvider(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	canvasColorSpace(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isExecuting(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFinished(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlaySettings(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	renderComplete(...args: any[]): any;
    /* typeEncoding=v32@0:8@16^{CGImage=}24 */
    	renderNextPass_image(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderPassQueue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderPasses(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderedImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderer(...args: any[]): any;
    /* typeEncoding={MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}16@0:8 */
    	renderingParameters(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCacheProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCanvasColorSpace(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsExecuting(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsFinished(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverlaySettings(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderPassQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderPasses(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderedImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderer(...args: any[]): any;
    /* typeEncoding=v88@0:8{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}16 */
    	setRenderingParameters(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	start(): void;
  }
}

declare const MSTileRenderOperation: sketchInternal.MSTileRenderOperation;

