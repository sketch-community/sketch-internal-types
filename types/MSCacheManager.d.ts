// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCacheManager extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"BCCache", ivar=_renderingCache, attributes=(retain,nonatomic) */
    	renderingCache(): BCCache;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"BCCache", ivar=_zoomIndependentCache, attributes=(retain,nonatomic) */
    	zoomIndependentCache(): BCCache;
    /* typeEncoding=d, ivar=_zoomLevelForSharedCache, attributes=(assign,nonatomic) */
    	zoomLevelForSharedCache(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8d16 */
    	cacheForZoomLevel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearAllCaches(): void;
    /* typeEncoding=v24@0:8@16 */
    	clearCachesExceptForOwners(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithZoomIndependentCache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderingCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderingCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setZoomIndependentCache(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomLevelForSharedCache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zoomIndependentCache(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomLevelForSharedCache(...args: any[]): any;
  }
}

declare const MSCacheManager: sketchInternal.MSCacheManager;

