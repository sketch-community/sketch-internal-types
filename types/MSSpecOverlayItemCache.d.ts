// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSpecOverlayItemCache extends MSOverlayItemImageCache {
    /* typeEncoding=@"NSColor", ivar=guideColor, attributes=(retain,nonatomic) */
    	guideColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSColor", ivar=measurementColor, attributes=(retain,nonatomic) */
    	measurementColor(): cocoascript.NSColor;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	createOverlayItemImagesForColorSpace_backingScale(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	guideColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	measurementColor(...args: any[]): any;
    /* typeEncoding=@104@0:8@16@24{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}32 */
    	overlayItemContainerForItemAt_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}32@104 */
    	overlayItemContainerForSupplementaryElementOfKind_layoutAttributes_parameters_in(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGuideColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMeasurementColor(...args: any[]): any;
  }
}

declare const MSSpecOverlayItemCache: sketchInternal.MSSpecOverlayItemCache;

