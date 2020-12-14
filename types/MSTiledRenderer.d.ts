// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTiledRenderer extends NSObject {
    /* typeEncoding=@"MSBitmapEffectsContextPool", ivar=_bitmapEffectsContextPool, attributes=(retain,nonatomic) */
    	bitmapEffectsContextPool(): MSBitmapEffectsContextPool;
    /* typeEncoding=@"NSDictionary", ivar=_cachedFlows, attributes=(copy,nonatomic) */
    	cachedFlows(): cocoascript.NSDictionary;
    /* typeEncoding=c, ivar=_clearOtherLevels, attributes=(assign) */
    	clearOtherLevels(): boolean;
    /* typeEncoding=@"MSRenderInstruction", ivar=_compositedInstruction, attributes=(copy,nonatomic) */
    	compositedInstruction(): MSRenderInstruction;
    /* typeEncoding=@"MSMemoryBuffer", ivar=_contextMemory, attributes=(retain,nonatomic) */
    	contextMemory(): MSMemoryBuffer;
    /* typeEncoding=@"MSCGContextPool", ivar=_contextPool, attributes=(retain,nonatomic) */
    	contextPool(): MSCGContextPool;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"MSOverlayItemContainer", ivar=_debugItemContainer, attributes=(retain,nonatomic) */
    	debugItemContainer(): MSOverlayItemContainer;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSRenderingDriver", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	driver(): MSRenderingDriver;
    /* typeEncoding=@"MSFlowItemCollector", ivar=_flowCollector, attributes=(retain,nonatomic) */
    	flowCollector(): MSFlowItemCollector;
    /* typeEncoding=c, ivar=_forceSyncFirstFrame, attributes=(assign,nonatomic) */
    	forceSyncFirstFrame(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSView<MSTiledRendererHostView>", ivar=hostView, attributes=(assign,nonatomic,weak) */
    	hostView(): any;
    /* typeEncoding=@"CALayer", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	layer(): CALayer;
    /* typeEncoding=@"MSOverlayRenderer", ivar=_overlayRenderer, attributes=(retain,nonatomic) */
    	overlayRenderer(): MSOverlayRenderer;
    /* typeEncoding=@"MSTileMipLevel", ivar=_previousLevel, attributes=(assign,nonatomic,weak) */
    	previousLevel(): MSTileMipLevel;
    /* typeEncoding=@"NSString", ivar=_previousPageObjectID, attributes=(retain,nonatomic) */
    	previousPageObjectID(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_rasterisationInProgress, attributes=(assign) */
    	rasterisationInProgress(): boolean;
    /* typeEncoding=@"NSOperationQueue", ivar=_rasterisationQueue, attributes=(assign,nonatomic,readonly) */
    	rasterisationQueue(): cocoascript.NSOperationQueue;
    /* typeEncoding=@"MSRenderInstruction", ivar=_renderedInstruction, attributes=(copy) */
    	renderedInstruction(): MSRenderInstruction;
    /* typeEncoding=@"NSString", ivar=_renderedPageID, attributes=(retain) */
    	renderedPageID(): cocoascript.NSString;
    /* typeEncoding=@"MSMetalRenderer", ivar=_renderer, attributes=(assign,nonatomic,readonly) */
    	renderer(): MSMetalRenderer;
    /* typeEncoding=@"MSRenderingCache", ivar=_renderingCache, attributes=(retain,nonatomic) */
    	renderingCache(): MSRenderingCache;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSTextPreviewLayerDataPool", ivar=_textPreviewPool, attributes=(retain,nonatomic) */
    	textPreviewPool(): MSTextPreviewLayerDataPool;
    /* typeEncoding=@"NSArray", ivar=_tileLevels, attributes=(assign,nonatomic,readonly) */
    	tileLevels(): cocoascript.NSArray;
    /* typeEncoding=c16@0:8 */
    	performRendererAvailabilityChecks(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	_createDocumentColorSpaceWithCanvasColorSpace_document(...args: any[]): any;
    /* typeEncoding=v72@0:8^{?=II^{?}}16@24d32d40@48d56@64 */
    	_doParallelContentRasterisationInRects_forPage_zoomValue_backingScale_instruction_contentsScale_tiles(...args: any[]): any;
    /* typeEncoding=v32@0:8@16c24c28 */
    	_doUpdateWithRenderInstruction_synchronously_hasUserFocus(...args: any[]): any;
    /* typeEncoding=c148@0:8@16c24{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}28c100@104@112@120@128@136c144 */
    	_drawTilesForPage_hasArtboards_renderingParameters_displayPixels_tiles_overlaySettings_canvasColorSpace_overlayTexture_flowItems_hasUserFocus(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	_findTileLevelForContentWithZoom(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	_rasterisationFinishedForTileLevel_page_instruction(...args: any[]): any;
    /* typeEncoding=c76@0:8^{?=II^{?}}16@24d32d40@48@56c64@68 */
    	_rasteriseContentInRects_forPage_zoomValue_backingScale_instruction_tiles_renderContentSynchronously_didCompleteSemaphore(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_removeAllTilesAndClearDirtyRegions(): void;
    /* typeEncoding=^{?={?=iiii}^{?}}76@0:8d16c24{CGRect={CGPoint=dd}{CGSize=dd}}28@60r^{?={?=iiii}^{?}}68 */
    	_renderTileLevelWithTotalZoom_displayPixels_visibleRect_tiles_inRegion(...args: any[]): any;
    /* typeEncoding=v108@0:8d16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24c96@100 */
    	_renderTilesWithTotalZoom_renderingParameters_displayPixels_tiles(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_scheduleRedraw(): void;
    /* typeEncoding=v24@0:8^{?={?=iiii}^{?}}16 */
    	_unionDirtyRegion(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}64@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32 */
    	_updatePageObjectID_document_dirtyRect(...args: any[]): any;
    /* typeEncoding=^{?=II^{?}}72@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16d48d56@64 */
    	_visibleDirtyRects_totalZoom_previousContentScale_level(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	bitmapEffectsContextPool(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedFlows(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	clearOtherLevels(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	collectflowItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	compositedInstruction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextMemory(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextPool(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	debugItemContainer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	driver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowCollector(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	forceSyncFirstFrame(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hostView(...args: any[]): any;
    /* typeEncoding=@24@0:8@?16 */
    	initWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=@28@0:8@?16c24 */
    	initWithCompletionHandler_syncFirstFrame(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDrawing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlayRenderer(...args: any[]): any;
    /* typeEncoding=@?24@0:8@16 */
    	prepareForRenderWithDiff(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previousLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previousPageObjectID(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	rasterisationInProgress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rasterisationQueue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderedInstruction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderedPageID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderingCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBitmapEffectsContextPool(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedFlows(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setClearOtherLevels(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCompositedInstruction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContextMemory(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContextPool(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDebugItemContainer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlowCollector(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setForceSyncFirstFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHostView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverlayRenderer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviousLevel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviousPageObjectID(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRasterisationInProgress(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderedInstruction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderedPageID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderingCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextPreviewPool(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textPreviewPool(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tileLevels(...args: any[]): any;
    /* typeEncoding=v32@0:8@16c24c28 */
    	updateContentWithRenderInstruction_synchronously_hasUserFocus(...args: any[]): any;
  }
}

declare const MSTiledRenderer: sketchInternal.MSTiledRenderer;

