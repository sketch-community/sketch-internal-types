// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArtboardTitleRenderer extends NSObject {
    /* typeEncoding=d, ivar=_backingScaleFactor, attributes=(assign,nonatomic) */
    	backingScaleFactor(): number;
    /* typeEncoding=@"MSMetalRenderer", ivar=_renderer, attributes=(assign,nonatomic,readonly,weak) */
    	renderer(): MSMetalRenderer;
    /* typeEncoding=@"MSRasterSurface", ivar=_surface, attributes=(retain,nonatomic) */
    	surface(): MSRasterSurface;
    /* typeEncoding=@"NSFont", ivar=_titleFont, attributes=(assign,nonatomic,readonly) */
    	titleFont(): cocoascript.NSFont;
    /* typeEncoding=@"NSMutableDictionary", ivar=_titleMap, attributes=(assign,nonatomic,readonly) */
    	titleMap(): cocoascript.NSMutableDictionary;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=d16@0:8 */
    	backingScaleFactor(...args: any[]): any;
    /* typeEncoding=v120@0:8@16^{CGColor=}24^{CGColor=}32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40@112 */
    	drawTitlesForArtboards_titleColor_symbolTitleColor_renderingParameters_cache(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithGPURenderer(...args: any[]): any;
    /* typeEncoding=@96@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	ms_collectArtboardsForTitleRendering_renderingParameters(...args: any[]): any;
    /* typeEncoding=@96@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	ms_createArtboardTitleBuffer_renderingParameters(...args: any[]): any;
    /* typeEncoding=v112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	ms_createTextureForArtboards_titleColor_symbolTitleColor_renderingParameters(...args: any[]): any;
    /* typeEncoding=v40@0:8@16d24^{CGContext=}32 */
    	ms_drawTitles_backingScale_context(...args: any[]): any;
    /* typeEncoding=v136@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24@96{CGRect={CGPoint=dd}{CGSize=dd}}104 */
    	ms_drawTitles_renderingParameters_cache_cacheRect(...args: any[]): any;
    /* typeEncoding=@96@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	ms_findExistingItemForArtboard_renderingParameters(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	ms_insertTitleItem_name(...args: any[]): any;
    /* typeEncoding=c96@0:8@16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	ms_needsToRecreateTitlesForArtboards_renderingParameters(...args: any[]): any;
    /* typeEncoding=v24@0:8{?=ii}16 */
    	ms_recreateTextureForSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderer(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setBackingScaleFactor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSurface(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	surface(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	titleFont(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	titleMap(...args: any[]): any;
  }
}

declare const MSArtboardTitleRenderer: sketchInternal.MSArtboardTitleRenderer;

