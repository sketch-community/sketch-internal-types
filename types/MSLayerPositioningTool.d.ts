// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerPositioningTool extends NSObject {
    /* typeEncoding=@"MSAlignmentEngineConstraint", ivar=alignmentConstraint, attributes=(retain,nonatomic) */
    	alignmentConstraint(): MSAlignmentEngineConstraint;
    /* typeEncoding=c, ivar=automaticallyChangeArtboard, attributes=(assign,nonatomic) */
    	automaticallyChangeArtboard(): boolean;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	center(): CGPoint;
    /* typeEncoding={CGVector=dd}, ivar=dragOffset, attributes=(assign,nonatomic) */
    	dragOffset(): CGVector;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic) */
    	items(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=layerHierarchyHasChanged, attributes=(assign,nonatomic) */
    	layerHierarchyHasChanged(): boolean;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding={CGPoint=dd}, ivar=originalLocation, attributes=(assign,nonatomic) */
    	originalLocation(): CGPoint;
    /* typeEncoding=@"<_TtP17SketchControllers36MSLayerPositioningSnapTargetProvider_>", ivar=snapTargetProvider, attributes=(assign,nonatomic,weak) */
    	snapTargetProvider(): any;
    /* typeEncoding=d, ivar=zoomScale, attributes=(assign,nonatomic) */
    	zoomScale(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	alignmentConstraint(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16Q24 */
    	alignmentRectInCoordinateSpace_options(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	automaticallyChangeArtboard(...args: any[]): any;
    /* typeEncoding=v40@0:8@16{CGPoint=dd}24 */
    	beginWithLayers_location(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cancel(): void;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	center(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	dragOffset(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	finish(): void;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	items(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	layerHierarchyHasChanged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	locationInCoordinateSpace(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGVector=dd}16 */
    	moveByOffset(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	originalLocation(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	performMoveToLocation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	reportCurrentSnaps(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reset(): void;
    /* typeEncoding=v24@0:8@16 */
    	setAlignmentConstraint(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAutomaticallyChangeArtboard(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGVector=dd}16 */
    	setDragOffset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setItems(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setLayerHierarchyHasChanged(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setOriginalLocation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSnapTargetProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomScale(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	snapTargetProvider(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomScale(...args: any[]): any;
  }
}

declare const MSLayerPositioningTool: sketchInternal.MSLayerPositioningTool;

