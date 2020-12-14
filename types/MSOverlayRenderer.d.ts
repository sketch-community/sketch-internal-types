// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverlayRenderer extends NSObject {
    /* typeEncoding=@"MSGPUArtboardShadow", ivar=_artboardShadow, attributes=(assign,nonatomic,readonly) */
    	artboardShadow(): MSGPUArtboardShadow;
    /* typeEncoding=@"MSArtboardTitleRenderer", ivar=_artboardTitleRenderer, attributes=(assign,nonatomic,readonly) */
    	artboardTitleRenderer(): MSArtboardTitleRenderer;
    /* typeEncoding=@"MSMetalTexture", ivar=_ekranoplanOverlayTexture, attributes=(retain,nonatomic) */
    	ekranoplanOverlayTexture(): MSMetalTexture;
    /* typeEncoding=@"MSFlowRenderer", ivar=_flowRenderer, attributes=(assign,nonatomic,readonly) */
    	flowRenderer(): MSFlowRenderer;
    /* typeEncoding=@"MSRasterSurface", ivar=_quartzOverlaySurface, attributes=(retain,nonatomic) */
    	quartzOverlaySurface(): MSRasterSurface;
    /* typeEncoding=@"MSMetalRenderer", ivar=_renderer, attributes=(assign,nonatomic,readonly) */
    	renderer(): MSMetalRenderer;
    /* typeEncoding=@"MSMetalBuffer", ivar=_sliceBuffer, attributes=(retain,nonatomic) */
    	sliceBuffer(): MSMetalBuffer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@96@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	_createArtboardShadowBufferForPage_renderingParameters(...args: any[]): any;
    /* typeEncoding=@96@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24d56d64{CGPoint=dd}72@88 */
    	_createGuideBufferForGroup_rect_totalZoom_backingScaleFactor_baseOrigin_overlaySettings(...args: any[]): any;
    /* typeEncoding=@96@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	_createPageBackgroundBufferForPage_renderingParameters(...args: any[]): any;
    /* typeEncoding=@144@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}56@128^{CGColorSpace=}136 */
    	_createSliceBufferForPage_rect_renderingParameters_overlaySettings_canvasColorSpace(...args: any[]): any;
    /* typeEncoding=v112@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24@96@104 */
    	_drawArtboardShadowsForPage_renderingParameters_overlaySettings_renderingCache(...args: any[]): any;
    /* typeEncoding=v96@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24d56d64{CGPoint=dd}72@88 */
    	_drawGridForGroup_rect_totalZoom_backingScaleFactor_baseOrigin_overlaySettings(...args: any[]): any;
    /* typeEncoding=v104@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24d56d64{CGPoint=dd}72@88@96 */
    	_drawGuidesForGroup_rect_totalZoom_backingScaleFactor_baseOrigin_overlaySettings_renderingCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	_drawOverlayTexture(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    	_overlayTextureWithSize(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    	_quartzOverlaySurfaceForPixelViewSize(...args: any[]): any;
    /* typeEncoding=v112@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24@96@104 */
    	_renderArtboardTitlesForPage_renderingParameters_overlaySettings_renderingCache(...args: any[]): any;
    /* typeEncoding=v120@0:8@16@24{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}32@104@112 */
    	_renderFlowItems_page_renderingParameters_overlaySettings_renderingCache(...args: any[]): any;
    /* typeEncoding=v112@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24@96@104 */
    	_renderGridsAndGuidesForPage_renderingParameters_overlaySettings_renderingCache(...args: any[]): any;
    /* typeEncoding=v120@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24@96^{CGColorSpace=}104@112 */
    	_renderSlicesForPage_renderingParameters_overlaySettings_canvasColorSpace_renderingCache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	artboardShadow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	artboardTitleRenderer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v112@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24d96@104 */
    	drawBackgroundElementsForPage_renderingParameters_totalZoom_renderingCache(...args: any[]): any;
    /* typeEncoding=v136@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24@96^{CGColorSpace=}104@112@120@128 */
    	drawOverlayForPage_renderingParameters_overlaySettings_canvasColorSpace_overlayTexture_flowItems_renderingCache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	ekranoplanOverlayTexture(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowRenderer(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithRenderer(...args: any[]): any;
    /* typeEncoding=@136@0:8@16@24{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}32@104@112Q120^{CGColorSpace=}128 */
    	overlayTextureForPage_overlayItems_renderingParameters_flowItems_overlayItemImages_overlayOptions_colorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	quartzOverlaySurface(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEkranoplanOverlayTexture(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setQuartzOverlaySurface(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSliceBuffer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sliceBuffer(...args: any[]): any;
  }
}

declare const MSOverlayRenderer: sketchInternal.MSOverlayRenderer;

