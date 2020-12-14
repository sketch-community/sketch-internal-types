// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayoutInspectorItem extends MSInspectorItem {
    /* typeEncoding=@"MSInspectorSegmentedControl", ivar=_axisSegmentedControl, attributes=(retain,nonatomic) */
    	axisSegmentedControl(): MSInspectorSegmentedControl;
    /* typeEncoding=@"NSTextField", ivar=_directionLabel, attributes=(retain,nonatomic) */
    	directionLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"MSInspectorSegmentedControl", ivar=_directionSegmentedControl, attributes=(retain,nonatomic) */
    	directionSegmentedControl(): MSInspectorSegmentedControl;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	axisSegmentedControl(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	directionLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	directionSegmentedControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateSelectedGroups(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	findCommonLayoutClass(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	findFirstInferredLayoutAxis(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	findLayoutAnchorForFirstLayoutDirection(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	findSegmentIndexForFirstLayoutDirection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	layoutAxisAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	layoutDirectionAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetDirectionLabel(): void;
    /* typeEncoding=v24@0:8@16 */
    	setAxisSegmentedControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDirectionLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDirectionSegmentedControl(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	updateDirectionIconsForLayoutAxis(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	updateDirectionLabelForLayoutAxis_anchor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateDisplayedValues(): void;
    /* typeEncoding=v48@0:8@16@24q32@40 */
    	updateImage_toolTip_ifNecessaryForSegment_inControl(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	updateLayoutDirectionForSelectedGroupsTo(...args: any[]): any;
  }
}

declare const MSLayoutInspectorItem: sketchInternal.MSLayoutInspectorItem;

