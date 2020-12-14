// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverlayItemImageCache extends NSObject {
    /* typeEncoding=d, ivar=_cachedBackingScale, attributes=(assign,nonatomic) */
    	cachedBackingScale(): number;
    /* typeEncoding=^{CGColorSpace=}, ivar=_cachedColorspace, attributes=(assign,nonatomic) */
    	cachedColorspace(): any;
    /* typeEncoding=@"NSDictionary", ivar=_cachedImages, attributes=(retain,nonatomic) */
    	cachedImages(): cocoascript.NSDictionary;
    /* typeEncoding=@?, ivar=_createImageBlock, attributes=(assign,nonatomic,readonly) */
    	createImageBlock(): any;
    /* typeEncoding=@24@0:8@?16 */
    	static cacheWithCreateImageBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=d16@0:8 */
    	cachedBackingScale(...args: any[]): any;
    /* typeEncoding=^{CGColorSpace=}16@0:8 */
    	cachedColorspace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedImages(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	createImageBlock(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	createOverlayItemImagesForColorSpace_backingScale(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@?16 */
    	initWithCreateImageBlock(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeAllCachedImages(): void;
    /* typeEncoding=v24@0:8d16 */
    	setCachedBackingScale(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGColorSpace=}16 */
    	setCachedColorspace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedImages(...args: any[]): any;
  }
}

declare const MSOverlayItemImageCache: sketchInternal.MSOverlayItemImageCache;

