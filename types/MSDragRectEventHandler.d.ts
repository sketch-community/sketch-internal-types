// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDragRectEventHandler extends MSEventHandler {
    /* typeEncoding=c, ivar=(null), attributes=(assign,readonly) */
    	allowsInsertLayerFromExistingLayer(): boolean;
    /* typeEncoding=@"NSCursor", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	cursorForInsertingFromExisting(): cocoascript.NSCursor;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDragRectGestureRecognizer", ivar=_dragGestureRecognizer, attributes=(assign,nonatomic,readonly) */
    	dragGestureRecognizer(): MSDragRectGestureRecognizer;
    /* typeEncoding=@"MSLayerGroup", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	group(): MSLayerGroup;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSCursor", ivar=_insertionCursor, attributes=(retain,nonatomic) */
    	insertionCursor(): cocoascript.NSCursor;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_insertionRect, attributes=(assign,nonatomic) */
    	insertionRect(): CGRect;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	layerSelectionOptionsForInsertingFromExistingLayer(): number;
    /* typeEncoding=@"NSNumberFormatter", ivar=_lengthFormatter, attributes=(assign,nonatomic,readonly) */
    	lengthFormatter(): cocoascript.NSNumberFormatter;
    /* typeEncoding=@"_TtC17SketchControllers14MSOverlayLabel", ivar=_sizeLabel, attributes=(assign,nonatomic,readonly) */
    	sizeLabel(): _TtC17SketchControllers14MSOverlayLabel;
    /* typeEncoding=@"MSAlignmentEngine", ivar=_snapper, attributes=(assign,nonatomic,readonly) */
    	snapper(): MSAlignmentEngine;
    /* typeEncoding=@"MSAlignmentEngineResult", ivar=_snappingResult, attributes=(retain,nonatomic) */
    	snappingResult(): MSAlignmentEngineResult;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSDragInsertionTool", ivar=_tool, attributes=(retain,nonatomic) */
    	tool(): MSDragInsertionTool;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v28@0:8@16c24 */
    	addTargetsToEngine_snappingDisabled(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8@16{CGPoint=dd}24 */
    	alignmentEngine_alignPoint(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsInsertLayerFromExistingLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cursorForInsertingFromExisting(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragGestureRecognizer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	group(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleDrag(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=c16@0:8 */
    	handlesHandToolItself(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertionCursor(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	insertionRect(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGPoint=dd}16Q32 */
    	itemAtPoint_modifierFlags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	layerSelectionOptionsForInsertingFromExistingLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lengthFormatter(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mouseDraggedOutsideViewShouldMoveScrollOrigin(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=@60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48c56 */
    	performActionWithRect_fromLayer_constrainProportions(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8{CGPoint=dd}16 */
    	roundPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInsertionCursor(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setInsertionRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSnappingResult(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTool(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sizeLabel(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16@32Q40 */
    	snapAndAlignPoint_constraint_modifierFlags(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	snapper(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	snappingResult(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tool(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	wantsLayerHighlight(...args: any[]): any;
  }
}

declare const MSDragRectEventHandler: sketchInternal.MSDragRectEventHandler;

