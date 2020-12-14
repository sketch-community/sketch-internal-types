// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlowEventHandler extends MSEventHandler {
    /* typeEncoding=c, ivar=_didDragMouse, attributes=(assign,nonatomic) */
    	didDragMouse(): boolean;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	flowItems(): cocoascript.NSSet;
    /* typeEncoding=Q, ivar=_hoverType, attributes=(assign,nonatomic) */
    	hoverType(): number;
    /* typeEncoding=@"MSFlowEventHandlerImageCache", ivar=_imageCache, attributes=(retain,nonatomic) */
    	imageCache(): MSFlowEventHandlerImageCache;
    /* typeEncoding={CGPoint=dd}, ivar=_lastMouse, attributes=(assign,nonatomic) */
    	lastMouse(): CGPoint;
    /* typeEncoding=@"MSLayerArray", ivar=_layers, attributes=(retain,nonatomic) */
    	layers(): MSLayerArray;
    /* typeEncoding=@"MSArtboardGroup", ivar=_targetArtboard, attributes=(retain,nonatomic) */
    	targetArtboard(): MSArtboardGroup;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseDragged_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseMoved_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	attachWireToTarget(): void;
    /* typeEncoding=c16@0:8 */
    	didDragMouse(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	findMouseAndDisconnectFromTarget(): void;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	findTargetLayerForMouse(...args: any[]): any;
    /* typeEncoding=@112@0:8{MSFlowInfo={MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}{MSFlowEndpoint=Q{CGRect={CGPoint=dd}{CGSize=dd}}}q}16@104 */
    	flowItemForFlowInfo_fromLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowItemsForConnectionToArtboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowItemsForConnectionToBackArrows(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowItemsForConnectionToMouse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowItemsForConnectionToOtherPage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flowTargetAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerDidLoseFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=Q16@0:8 */
    	hoverType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageCache(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	lastMouse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mayShowResizingInspectorView(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	moveWireToMouse(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentArtboards(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	positionOfOtherPageImageIndicatorForArtboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDidDragMouse(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setHoverType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageCache(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setLastMouse(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTargetArtboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showOtherPageMenuForLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	targetArtboard(...args: any[]): any;
  }
}

declare const MSFlowEventHandler: sketchInternal.MSFlowEventHandler;

