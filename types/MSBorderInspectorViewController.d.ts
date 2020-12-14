// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBorderInspectorViewController extends MSColorStylePartInspectorViewController {
    /* typeEncoding=@"NSTextField", ivar=_borderPositionLabel, attributes=(retain,nonatomic) */
    	borderPositionLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSTextField", ivar=_fillTypeLabel, attributes=(retain,nonatomic) */
    	fillTypeLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"MSInspectorSegmentedControl", ivar=_positionControl, attributes=(retain,nonatomic) */
    	positionControl(): MSInspectorSegmentedControl;
    /* typeEncoding=@"MSMathInspectorValueAdaptor", ivar=_thicknessAdaptor, attributes=(retain,nonatomic) */
    	thicknessAdaptor(): MSMathInspectorValueAdaptor;
    /* typeEncoding=@"MSUpDownTextField", ivar=_thicknessField, attributes=(retain,nonatomic) */
    	thicknessField(): MSUpDownTextField;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	applyUserSelectedColors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	borderPositionLabel(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canDrawInnerOrOuterBorders(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v24@0:8@16 */
    	enableAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillTypeLabel(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	positionControl(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	positionPopUpToolTip(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBorderPositionLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillTypeLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPositionControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyleParts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setThicknessAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setThicknessField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	thicknessAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	thicknessField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
    /* typeEncoding=v16@0:8 */
    	updateUI(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSBorderInspectorViewController: sketchInternal.MSBorderInspectorViewController;

