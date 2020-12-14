// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerDragController extends MSToolController {
    /* typeEncoding=@"NSNumber", ivar=_alignmentAxis, attributes=(retain,nonatomic) */
    	alignmentAxis(): cocoascript.NSNumber;
    /* typeEncoding=c, ivar=_duplicating, attributes=(assign,nonatomic,readonly,getter=isDuplicating) */
    	duplicating(): boolean;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_originalLayers, attributes=(copy,nonatomic,readonly) */
    	originalLayers(): cocoascript.NSArray;
    /* typeEncoding=@"MSLayerPositioningTool", ivar=_positioningTool, attributes=(assign,nonatomic,readonly) */
    	positioningTool(): MSLayerPositioningTool;
    /* typeEncoding=Q, ivar=_snapMask, attributes=(assign,nonatomic) */
    	snapMask(): number;
    /* typeEncoding=c, ivar=_snappingEnabled, attributes=(assign,nonatomic) */
    	snappingEnabled(): boolean;
    /* typeEncoding=@"_TtC17SketchControllers21MSLayerSnappingResult", ivar=_snappingResult, attributes=(retain,nonatomic) */
    	snappingResult(): _TtC17SketchControllers21MSLayerSnappingResult;
    /* typeEncoding=@"<MSDragLayerToolUserInterface>", ivar=_userInterface, attributes=(assign,nonatomic,weak) */
    	userInterface(): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_visibleRect, attributes=(assign,nonatomic) */
    	visibleRect(): CGRect;
    /* typeEncoding=d, ivar=_zoomScale, attributes=(assign,nonatomic) */
    	zoomScale(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	alignmentAxis(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	beginDuplicating(): void;
    /* typeEncoding=v40@0:8@16{CGPoint=dd}24 */
    	beginWithLayers_location(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	endDuplicating(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDuplicating(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	layerPositioningTool_provideTargetsToSnapper(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	positioningTool(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reset(): void;
    /* typeEncoding=v24@0:8@16 */
    	setAlignmentAxis(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setSnapMask(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSnappingEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSnappingResult(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserInterface(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setVisibleRect(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomScale(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	snapMask(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	snappingEnabled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	snappingResult(...args: any[]): any;
    /* typeEncoding=v44@0:8Q16{CGPoint=dd}24c40 */
    	updateWithState_location_duplicate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userInterface(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	visibleRect(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomScale(...args: any[]): any;
  }
}

declare const MSLayerDragController: sketchInternal.MSLayerDragController;

