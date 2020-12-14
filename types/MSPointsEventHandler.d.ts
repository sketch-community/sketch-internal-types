// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPointsEventHandler extends MSEventHandler {
    /* typeEncoding=@"MSAlignmentEngineResult", ivar=_alignmentResult, attributes=(retain,nonatomic) */
    	alignmentResult(): MSAlignmentEngineResult;
    /* typeEncoding=@"MSLayer", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	coordinateSpace(): MSLayer;
    /* typeEncoding=@"MSHandleOverlay", ivar=_handlesOverlay, attributes=(assign,nonatomic,readonly) */
    	handlesOverlay(): MSHandleOverlay;
    /* typeEncoding=@"MSOverlayItemImageCache", ivar=_imageCache, attributes=(retain,nonatomic) */
    	imageCache(): MSOverlayItemImageCache;
    /* typeEncoding=q, ivar=_indexForSelectedPoint, attributes=(assign,nonatomic) */
    	indexForSelectedPoint(): number;
    /* typeEncoding=@"MSStyledLayer", ivar=_layer, attributes=(retain,nonatomic) */
    	layer(): MSStyledLayer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	alignmentResult(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	bounds(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collectionOverlay_didDeselectItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collectionOverlay_didSelectItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=q32@0:8@16q24 */
    	collectionOverlay_numberOfItemsInSection(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForItemAtIndexPath_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@112@0:8@16@24@32{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}40 */
    	collectionOverlay_overlayItemContainerForSupplementaryElementOfKind_layoutAttributes_parameters(...args: any[]): any;
    /* typeEncoding=@40@0:8@16^{CGColorSpace=}24d32 */
    	collectionOverlay_overlayItemImagesForColorSpace_backingScale(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8{CGPoint=dd}16 */
    	convertPointToUnitCoordinateSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	coordinateSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	findSelectedLayer(...args: any[]): any;
    /* typeEncoding=v40@0:8@16{CGPoint=dd}24 */
    	handleOverlay_didClickAtPoint(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8@16@24@32 */
    	handleOverlay_layout_locationOfHandleAtIndexPath(...args: any[]): any;
    /* typeEncoding=v48@0:8@16{CGPoint=dd}24Q40 */
    	handleOverlay_updateDragWithLocation_modifierFlags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleOverlayDidFinishDrag(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@16@0:8 */
    	handlesOverlay(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageCache(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	indexForSelectedPoint(...args: any[]): any;
    /* typeEncoding=q32@0:8{CGPoint=dd}16 */
    	indexOfPointAtLocation(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layer(...args: any[]): any;
    /* typeEncoding=v48@0:8q16{CGPoint=dd}24Q40 */
    	movePointAtIndex_toLocation_modifierFlags(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8Q16 */
    	pointAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	points(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pointsToSnap(...args: any[]): any;
    /* typeEncoding=v40@0:8q16{CGPoint=dd}24 */
    	replacePointAtIndex_withPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAlignmentResult(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageCache(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setIndexForSelectedPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldReturnToDefaultHandlerInCurrentState(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16@32 */
    	snapPoint_toPoints(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	useSnaps(...args: any[]): any;
  }
}

declare const MSPointsEventHandler: sketchInternal.MSPointsEventHandler;

