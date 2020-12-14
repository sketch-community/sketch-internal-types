// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRenderingContext extends NSObject {
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	accumulatedRotateFlipTransform(): CGAffineTransform;
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	accumulatedTransform(): CGAffineTransform;
    /* typeEncoding=d, ivar=_alphaValue, attributes=(assign,nonatomic) */
    	alphaValue(): number;
    /* typeEncoding=c, ivar=_cancelled, attributes=(assign,nonatomic,getter=isCancelled) */
    	cancelled(): boolean;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_drawingArea, attributes=(assign,nonatomic) */
    	drawingArea(): CGRect;
    /* typeEncoding=@"MSRenderingDriver", ivar=_driver, attributes=(assign,nonatomic,readonly) */
    	driver(): MSRenderingDriver;
    /* typeEncoding=i, ivar=_internalBlendMode, attributes=(assign,nonatomic) */
    	internalBlendMode(): number;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"NSMutableArray", ivar=_parentGroupStack, attributes=(retain,nonatomic) */
    	parentGroupStack(): cocoascript.NSMutableArray;
    /* typeEncoding=@"MSRenderingRequest", ivar=_renderingRequest, attributes=(assign,nonatomic,readonly) */
    	renderingRequest(): MSRenderingRequest;
    /* typeEncoding=@"MSImmutableLayerGroup", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rootLayer(): MSImmutableLayerGroup;
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=_rotateFlipTransform, attributes=(assign,nonatomic) */
    	rotateFlipTransform(): CGAffineTransform;
    /* typeEncoding=@"NSMutableArray", ivar=_symbolInstanceStack, attributes=(retain,nonatomic) */
    	symbolInstanceStack(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSMutableArray", ivar=_symbolMasterStack, attributes=(retain,nonatomic) */
    	symbolMasterStack(): cocoascript.NSMutableArray;
    /* typeEncoding=@"MSImmutableColor", ivar=_tintColor, attributes=(retain,nonatomic) */
    	tintColor(): MSImmutableColor;
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=_totalTransform, attributes=(assign,nonatomic) */
    	totalTransform(): CGAffineTransform;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	zoomLevelForShadows(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	accumulatedRotateFlipTransform(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	accumulatedTransform(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	alphaValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyFillColor(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	applyLayerTransform_inBlock(...args: any[]): any;
    /* typeEncoding=v40@0:8@16Q24@?32 */
    	applySettings_withOptions_inBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyShadow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyStrokeColor(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	beginTransparencyLayer(...args: any[]): any;
    /* typeEncoding=d48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	beginTransparencyLayerInRect(...args: any[]): any;
    /* typeEncoding=d52@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48 */
    	beginTransparencyLayerInRect_inheritClip(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24c32@?36 */
    	cachedValueForModelObject_key_zoomIndependent_orCreateWithBlock(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canDrawSymbolMasterWithoutRiskingRecursion(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cancel(): void;
    /* typeEncoding=@24@0:8@16 */
    	colorByTintingIfNecessary(...args: any[]): any;
    /* typeEncoding=v64@0:8{CGAffineTransform=dddddd}16 */
    	concatTransform(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	depthOfLayer(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	drawSymbolInstance_inBlock(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	drawSymbolMaster_inBlock(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	drawingArea(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	drawingAreaIntersectsLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	driver(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	endTransparencyLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithName_driver_renderingRequest(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	internalBlendMode(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isCancelled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDrawingSymbolInstance(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	layer_isSiblingOfLayer(...args: any[]): any;
    /* typeEncoding=d24@0:8d16 */
    	multiplyAlphaBy(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	parentGroupForLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentGroupStack(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	popGraphicsState(): void;
    /* typeEncoding=@16@0:8 */
    	popParentGroup(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	prepareLayerDrawing_inBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	pushGraphicsState(): void;
    /* typeEncoding=v24@0:8@16 */
    	pushParentGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	renderInBlock(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	renderLayer_ignoreCacheAndDrawingArea(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderingRequest(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rootLayer(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	rotateFlipTransform(...args: any[]): any;
    /* typeEncoding=d24@0:8d16 */
    	setAlpha(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setAlphaValue(...args: any[]): any;
    /* typeEncoding=i20@0:8i16 */
    	setBlendMode(...args: any[]): any;
    /* typeEncoding=v44@0:8@16@24@32c40 */
    	setCachedValue_forModelObject_key_zoomIndependent(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setCancelled(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setDrawingArea(...args: any[]): any;
    /* typeEncoding=v20@0:8i16 */
    	setInternalBlendMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setParentGroupStack(...args: any[]): any;
    /* typeEncoding=v64@0:8{CGAffineTransform=dddddd}16 */
    	setRotateFlipTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSymbolInstanceStack(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSymbolMasterStack(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTintColor(...args: any[]): any;
    /* typeEncoding=v64@0:8{CGAffineTransform=dddddd}16 */
    	setTotalTransform(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setUp(): void;
    /* typeEncoding=c36@0:8@16@24c32 */
    	shouldDrawLayer_withMaskingShapeGroup_ignoreDrawingArea(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldSkipDrawingShadow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolInstanceStack(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolMasterStack(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	tearDown(): void;
    /* typeEncoding=@16@0:8 */
    	tintColor(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}16@0:8 */
    	totalTransform(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	transparencyLayerInBlock(...args: any[]): any;
    /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@?48 */
    	transparencyLayerInRect_inBlock(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomLevelForShadows(...args: any[]): any;
  }
}

declare const MSRenderingContext: sketchInternal.MSRenderingContext;

