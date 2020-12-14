// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBitmapMagicWandEditor extends MSBitmapEditor {
    /* typeEncoding=@"NSBitmapImageRep", ivar=_cachedBitSafeRep, attributes=(retain,nonatomic) */
    	cachedBitSafeRep(): cocoascript.NSBitmapImageRep;
    /* typeEncoding=c, ivar=_didDrag, attributes=(assign,nonatomic) */
    	didDrag(): boolean;
    /* typeEncoding=@"MSOverlayItemImageCache", ivar=_imageCache, attributes=(retain,nonatomic) */
    	imageCache(): MSOverlayItemImageCache;
    /* typeEncoding=@"MSBitmap", ivar=_mask, attributes=(retain,nonatomic) */
    	mask(): MSBitmap;
    /* typeEncoding={CGPoint=dd}, ivar=_mouseDownPoint, attributes=(assign,nonatomic) */
    	mouseDownPoint(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_mouseEndPoint, attributes=(assign,nonatomic) */
    	mouseEndPoint(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_pageMouseDownPoint, attributes=(assign,nonatomic) */
    	pageMouseDownPoint(): CGPoint;
    /* typeEncoding=@"NSOperationQueue", ivar=_queue, attributes=(retain,nonatomic) */
    	queue(): cocoascript.NSOperationQueue;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	cachedBitSafeRep(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	didDrag(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	dragCircleBounds(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	dragCirclePageBounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageCache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	isValidRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	magicWandWithCompletionBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mask(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	maskItem_parameters(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	mouseDown_flags(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	mouseDownPoint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	mouseDragged(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	mouseEndPoint(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16Q32 */
    	mouseUp_flags(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	normalizedTolerance(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	pageMouseDownPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	queue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedBitSafeRep(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidDrag(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMask(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setMouseDownPoint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setMouseEndPoint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setPageMouseDownPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setQueue(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	tolerance(...args: any[]): any;
  }
}

declare const MSBitmapMagicWandEditor: sketchInternal.MSBitmapMagicWandEditor;

