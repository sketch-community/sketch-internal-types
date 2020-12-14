// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShapeEventHandler extends MSEventHandler {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSShapeEditingBehavior", ivar=_editingBehavior, attributes=(retain,nonatomic) */
    	editingBehavior(): MSShapeEditingBehavior;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	ignorePathController(): boolean;
    /* typeEncoding=@"MSEditShapeInspectorViewController", ivar=_inspectorViewController, attributes=(assign,nonatomic,readonly) */
    	inspectorViewController(): MSEditShapeInspectorViewController;
    /* typeEncoding=@"NSArray", ivar=_layers, attributes=(copy,nonatomic,readonly) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=@"MSVectorOverlayController", ivar=_overlayController, attributes=(assign,nonatomic,readonly) */
    	overlayController(): MSVectorOverlayController;
    /* typeEncoding=@"MSPathController", ivar=_pathController, attributes=(assign,nonatomic,readonly) */
    	pathController(): MSPathController;
    /* typeEncoding=@"MSStyleInspectorSection", ivar=_styleSection, attributes=(assign,nonatomic,weak) */
    	styleSection(): MSStyleInspectorSection;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=q24@0:8q16 */
    	curveModeForPressedKey(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v24@0:8@16 */
    	delete(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	duplicate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editingBehavior(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	flagsChanged(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	forceSelection(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=c16@0:8 */
    	ignorePathController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertBacktab(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	insertNewShapeForEditingAtPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertTab(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	inspectorLocation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorViewController(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	inspectorViewControllersForLayers_standardControllers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	layerListSelectionDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layersToCopy(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeTouchBar(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	markLayer_asEditing(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	mouseDownEvent(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overlayController(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentGroupForInserting(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pathController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	pathDidOpenOrClose(): void;
    /* typeEncoding=v24@0:8@?16 */
    	performPathControllerUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	resetWithOptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectAll(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	selectBestEditPoint(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	selectedRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAllowSelectionOnly(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEditingBehavior(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyleSection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleSection(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	styleViewControllersForLayers_fromStyleInspectorSection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleForceSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updateCursor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateToolButton(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	vectorOverlayController_didDeselectHandles(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	vectorOverlayController_didHighlightHandle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	vectorOverlayController_didSelectHandles(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	vectorOverlayController_didSelectLayers(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	vectorOverlayController_didUnhighlightHandle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	vectorOverlayControllerDidFinishInteractiveSelection(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	zoomToSelection(): void;
  }
}

declare const MSShapeEventHandler: sketchInternal.MSShapeEventHandler;

