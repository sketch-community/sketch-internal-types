// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRenderingContextCG extends MSRenderingContext {
    /* typeEncoding=@"MSBitmapEffectsContextPool", ivar=_bitmapEffectsContextPool, attributes=(retain,nonatomic) */
    	bitmapEffectsContextPool(): MSBitmapEffectsContextPool;
    /* typeEncoding=@"NSMutableArray", ivar=_bitmapTransparencyLayerSavedStates, attributes=(retain,nonatomic) */
    	bitmapTransparencyLayerSavedStates(): cocoascript.NSMutableArray;
    /* typeEncoding=c, ivar=_contextIsVectorBacked, attributes=(assign,nonatomic,readonly) */
    	contextIsVectorBacked(): boolean;
    /* typeEncoding=@"MSCGContextPool", ivar=_contextPool, attributes=(retain,nonatomic) */
    	contextPool(): MSCGContextPool;
    /* typeEncoding=^{CGContext=}, ivar=_contextRef, attributes=(assign,nonatomic,readonly) */
    	contextRef(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_disableClippingFillsCounter, attributes=(assign,nonatomic) */
    	disableClippingFillsCounter(): number;
    /* typeEncoding=Q, ivar=_disableDrawingFillsCounter, attributes=(assign,nonatomic) */
    	disableDrawingFillsCounter(): number;
    /* typeEncoding=@"NSGraphicsContext", ivar=_graphicsContext, attributes=(retain,nonatomic) */
    	graphicsContext(): cocoascript.NSGraphicsContext;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"<MSRenderingContextCGPoolProvider>", ivar=_poolProvider, attributes=(assign,nonatomic,weak) */
    	poolProvider(): any;
    /* typeEncoding=^{CGContext=}, ivar=_savedContextRef, attributes=(assign,nonatomic) */
    	savedContextRef(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSTextPreviewLayerDataPool", ivar=_textPreviewPool, attributes=(retain,nonatomic) */
    	textPreviewPool(): MSTextPreviewLayerDataPool;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	applyFillColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyShadow(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	applyShadow_respectFlipped(...args: any[]): any;
    /* typeEncoding=v32@0:8@16d24 */
    	applyShadow_withXOffset(...args: any[]): any;
    /* typeEncoding=v36@0:8@16d24c32 */
    	applyShadow_withXOffset_respectFlipped(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyStrokeColor(...args: any[]): any;
    /* typeEncoding=d52@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48 */
    	beginBitmapTransparencyLayerInRect_inheritClip(...args: any[]): any;
    /* typeEncoding=d48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	beginQuartzTransparencyLayerInRect(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	beginTransparencyLayer(...args: any[]): any;
    /* typeEncoding=d52@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48 */
    	beginTransparencyLayerInRect_inheritClip(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bitmapEffectsContextPool(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bitmapTransparencyLayerSavedStates(...args: any[]): any;
    /* typeEncoding=v64@0:8{CGAffineTransform=dddddd}16 */
    	concatTransform(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	contextIsVectorBacked(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextPool(...args: any[]): any;
    /* typeEncoding=^{CGContext=}16@0:8 */
    	contextRef(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=Q16@0:8 */
    	disableClippingFillsCounter(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	disableDrawingFillsCounter(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	doNotClipFillsInBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	endBitmapTransparencyLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	endQuartzTransparencyLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	endTransparencyLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	graphicsContext(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasGraphicsContext(...args: any[]): any;
    /* typeEncoding=v28@0:8c16@?20 */
    	ifCondition_skipDrawingFillsInBlock(...args: any[]): any;
    /* typeEncoding=@52@0:8@16@24^{CGContext=}32c40@44 */
    	initWithName_driver_cgContext_contextIsVectorBacked_renderingRequest(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24^{CGContext=}32@40 */
    	initWithName_driver_context_renderingRequest(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithName_driver_renderingRequest(...args: any[]): any;
    /* typeEncoding=^{CGContext=}40@0:8^{CGContext=}16{CGSize=dd}24 */
    	newTransparencyLayerContextForContext_size(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	poolProvider(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	popGraphicsState(): void;
    /* typeEncoding=v16@0:8 */
    	pushGraphicsState(): void;
    /* typeEncoding=v28@0:8@16c24 */
    	renderLayer_ignoreCacheAndDrawingArea(...args: any[]): any;
    /* typeEncoding=^{CGContext=}16@0:8 */
    	savedContextRef(...args: any[]): any;
    /* typeEncoding=d24@0:8d16 */
    	setAlpha(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBitmapEffectsContextPool(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBitmapTransparencyLayerSavedStates(...args: any[]): any;
    /* typeEncoding=i20@0:8i16 */
    	setBlendMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContextPool(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGContext=}16 */
    	setContextRef(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setDisableClippingFillsCounter(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setDisableDrawingFillsCounter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGraphicsContext(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPoolProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGContext=}16 */
    	setSavedContextRef(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextPreviewPool(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setUp(): void;
    /* typeEncoding=v32@0:8^{CGContext=}16@24 */
    	setupCGContext_withRenderingRequest(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldClipFills(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDisableSubpixelQuantization(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawFills(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldSkipDrawingShadow(...args: any[]): any;
    /* typeEncoding=@72@0:8^{CGContext=}16@24d32{CGRect={CGPoint=dd}{CGSize=dd}}40 */
    	subContextForBackgroundBlurWithCGContext_backgroundBlurLayer_pointScale_rect(...args: any[]): any;
    /* typeEncoding=@52@0:8^{CGContext=}16c24d28d36Q44 */
    	subContextWithCGContext_contextIsVectorBacked_pointScale_zoomLevel_options(...args: any[]): any;
    /* typeEncoding=@36@0:8^{CGContext=}16c24@28 */
    	subContextWithCGContext_contextIsVectorBacked_renderingRequest(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	tearDown(): void;
    /* typeEncoding=@16@0:8 */
    	textPreviewPool(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomLevelForShadows(...args: any[]): any;
  }
}

declare const MSRenderingContextCG: sketchInternal.MSRenderingContextCG;

