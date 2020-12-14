// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerRendererCG extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@32@0:8@16@24 */
    	cachedImageForLayer_inContext(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	drawCachedImage_layer_context(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24@28 */
    	renderLayer_ignoreDrawingArea_context(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24@28 */
    	renderLayerUncached_ignoreDrawingArea_context(...args: any[]): any;
  }
}

declare const MSLayerRendererCG: sketchInternal.MSLayerRendererCG;

