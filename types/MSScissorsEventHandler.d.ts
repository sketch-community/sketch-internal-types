// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSScissorsEventHandler extends MSEventHandler {
    /* typeEncoding=d, ivar=_containerZoomLevel, attributes=(assign,nonatomic) */
    	containerZoomLevel(): number;
    /* typeEncoding=c, ivar=_didCutOnMouseDown, attributes=(assign,nonatomic) */
    	didCutOnMouseDown(): boolean;
    /* typeEncoding=@"NSIndexPath", ivar=_hoveringSegmentIndexPath, attributes=(retain,nonatomic) */
    	hoveringSegmentIndexPath(): cocoascript.NSIndexPath;
    /* typeEncoding=@"MSOverlayItemContainer", ivar=_overlayItemContainer, attributes=(retain,nonatomic) */
    	overlayItemContainer(): MSOverlayItemContainer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseMoved_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canCutSegments(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	containerZoomLevel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cut(): void;
    /* typeEncoding=c16@0:8 */
    	didCutOnMouseDown(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	hoverSegmentForMouse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hoveringSegmentIndexPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlayItemContainer(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setContainerZoomLevel(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidCutOnMouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHoveringSegmentIndexPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOverlayItemContainer(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	shapeForIndexPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	thickStrokePathItems(...args: any[]): any;
    /* typeEncoding=@104@0:8@16@24{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}32 */
    	thinStrokePathItems_hoverIndex_parameters(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
  }
}

declare const MSScissorsEventHandler: sketchInternal.MSScissorsEventHandler;

