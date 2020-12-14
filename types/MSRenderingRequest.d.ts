// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRenderingRequest extends NSObject {
    /* typeEncoding=@"MSImmutableLayer", ivar=_backgroundBlurLayer, attributes=(assign,nonatomic,readonly) */
    	backgroundBlurLayer(): MSImmutableLayer;
    /* typeEncoding=@"<MSRenderingContextCacheProvider>", ivar=_cacheProvider, attributes=(retain,nonatomic) */
    	cacheProvider(): any;
    /* typeEncoding=^{CGColorSpace=}, ivar=_colorSpace, attributes=(assign,nonatomic,readonly) */
    	colorSpace(): any;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_document, attributes=(assign,nonatomic,readonly) */
    	document(): MSImmutableDocumentData;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	drawOptimised(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isDrawingMask) */
    	drawingMask(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isDrawingPixelated) */
    	drawingPixelated(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isExporting) */
    	exporting(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	includeArtboardBackground(): boolean;
    /* typeEncoding=Q, ivar=_options, attributes=(assign,nonatomic,readonly) */
    	options(): number;
    /* typeEncoding=d, ivar=_pointScale, attributes=(assign,nonatomic,readonly) */
    	pointScale(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isPrinting) */
    	printing(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldFlipShadows(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	skipLayerInclusionTests(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	willDrawPixelated(): boolean;
    /* typeEncoding=d, ivar=_zoomLevel, attributes=(assign,nonatomic,readonly) */
    	zoomLevel(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	backgroundBlurLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cacheProvider(...args: any[]): any;
    /* typeEncoding=^{CGColorSpace=}16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	drawOptimised(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	includeArtboardBackground(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@72@0:8@16^{CGColorSpace=}24d32d40@48@56Q64 */
    	initWithDocument_colorSpace_pointScale_zoomLevel_cacheProvider_backgroundBlurLayer_options(...args: any[]): any;
    /* typeEncoding=@64@0:8@16^{CGColorSpace=}24d32d40@48Q56 */
    	initWithDocument_colorSpace_pointScale_zoomLevel_cacheProvider_options(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDrawingMask(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDrawingPixelated(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isExporting(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPrinting(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	options(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	pointScale(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	requestWithOptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCacheProvider(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldFlipShadows(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	skipLayerInclusionTests(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	willDrawPixelated(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomLevel(...args: any[]): any;
  }
}

declare const MSRenderingRequest: sketchInternal.MSRenderingRequest;

