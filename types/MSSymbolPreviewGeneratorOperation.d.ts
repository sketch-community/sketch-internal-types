// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSymbolPreviewGeneratorOperation extends NSOperation {
    /* typeEncoding=@"NSColorSpace", ivar=_colorSpace, attributes=(retain,nonatomic) */
    	colorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@?, ivar=_imageBlock, attributes=(copy,nonatomic) */
    	imageBlock(): any;
    /* typeEncoding=@"BCCache", ivar=_renderingCache, attributes=(retain,nonatomic) */
    	renderingCache(): BCCache;
    /* typeEncoding=@?, ivar=_shouldCancelBlock, attributes=(copy,nonatomic) */
    	shouldCancelBlock(): any;
    /* typeEncoding={CGSize=dd}, ivar=_size, attributes=(assign,nonatomic) */
    	size(): CGSize;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"_TtC11SketchModel24MSImmutableLayerAncestry", ivar=_symbolAncestry, attributes=(retain,nonatomic) */
    	symbolAncestry(): _TtC11SketchModel24MSImmutableLayerAncestry;
    /* typeEncoding=@"BCCache", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	zoomIndependentCache(): BCCache;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8d16 */
    	cacheForZoomLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	imageBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	main(): void;
    /* typeEncoding=@16@0:8 */
    	renderingCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setImageBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderingCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setShouldCancelBlock(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSymbolAncestry(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	shouldCancelBlock(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	size(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolAncestry(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zoomIndependentCache(...args: any[]): any;
  }
}

declare const MSSymbolPreviewGeneratorOperation: sketchInternal.MSSymbolPreviewGeneratorOperation;

