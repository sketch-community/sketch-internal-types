// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSnapOverlayController extends NSObject {
    /* typeEncoding={CGVector=dd}, ivar=duplicationOffset, attributes=(assign,nonatomic) */
    	duplicationOffset(): CGVector;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic) */
    	originalLayers(): cocoascript.NSArray;
    /* typeEncoding=@"MSSpecOverlay", ivar=overlay, attributes=(assign,nonatomic,readonly) */
    	overlay(): MSSpecOverlay;
    /* typeEncoding=@"_TtC17SketchControllers21MSLayerSnappingResult", ivar=snappingResult, attributes=(retain,nonatomic) */
    	snappingResult(): _TtC17SketchControllers21MSLayerSnappingResult;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	clear(): void;
    /* typeEncoding=q32@0:8@16q24 */
    	collectionOverlay_numberOfItemsInSection(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForItemAtIndexPath_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForSupplementaryElementOfKind_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@40@0:8@16^{CGColorSpace=}24d32 */
    	collectionOverlay_overlayItemImagesForColorSpace_backingScale(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	duplicationOffset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlay(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGVector=dd}16 */
    	setDuplicationOffset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSnappingResult(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	snappingResult(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}48@0:8@16@24{CGPoint=dd}32 */
    	specOverlay_endpointForItemAtIndexPath_startpoint(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	specOverlay_rectForEndOfItemAtIndexPath(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	specOverlay_rectForStartOfItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=c64@0:8@16@24{CGPoint=dd}32{CGPoint=dd}48 */
    	specOverlay_shouldHideItemAtIndexPath_startpoint_endpoint(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	specOverlay_spaceRectForMeasurementAt(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8@16@24 */
    	specOverlay_startpointForItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24{CGVector=dd}32 */
    	specOverlay_textForMeasurement_vector(...args: any[]): any;
    /* typeEncoding=q32@0:8@16@24 */
    	specOverlay_typeOfItemAtIndexPath(...args: any[]): any;
  }
}

declare const MSSnapOverlayController: sketchInternal.MSSnapOverlayController;

