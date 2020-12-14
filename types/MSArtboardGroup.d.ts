// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArtboardGroup extends _MSArtboardGroup {
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	CGTransformForFrame(): CGAffineTransform;
    /* typeEncoding=@"MSColor", ivar=(null), attributes=(retain,nonatomic) */
    	backgroundColor(): MSColor;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	bounds(): CGRect;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	contentBounds(): CGRect;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSSimpleGrid", ivar=(null), attributes=(copy,nonatomic) */
    	grid(): MSSimpleGrid;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	hasBackgroundColor(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasTransforms(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSRulerData", ivar=(null), attributes=(copy,nonatomic) */
    	horizontalRulerData(): MSRulerData;
    /* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedHorizontal(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedVertical(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLayerExportable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isVisible(): boolean;
    /* typeEncoding=@"MSLayoutGrid", ivar=(null), attributes=(copy,nonatomic) */
    	layout(): MSLayoutGrid;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	objectID(): cocoascript.NSString;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	origin(): CGPoint;
    /* typeEncoding=@"MSArtboardPreset", ivar=(null), attributes=(retain,nonatomic) */
    	preset(): MSArtboardPreset;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rect(): CGRect;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rotation(): number;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
    	rulerBase(): CGPoint;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSRulerData", ivar=(null), attributes=(copy,nonatomic) */
    	verticalRulerData(): MSRulerData;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	static artboardRectFromLayersInArray(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	static traits(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	absoluteBoundingBox(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustAfterInsert(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	applyScreenPickerColor_preferredStyleName(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	calculateMinimumSize(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canBeHidden(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canBeTransformed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canChangeBooleanOperation(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	canCopyToLayer_beforeLayer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canRotate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	closestClippingLayer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	constrainProportions(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	contentBounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultArtboardStyle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	displayName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	displayType(...args: any[]): any;
    /* typeEncoding=c24@0:8q16 */
    	fixGeometryWithOptions(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasClickThrough(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16d32 */
    	hitTestInNameLabel_zoomValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableBackgroundColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorSections(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAutomaticScalingEnabled(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isExpanded(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLocked(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isOpen(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	isSelectableOnCanvasWithOptions(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	layerDidEndResize(): void;
    /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16q48 */
    	layerDidResizeFromRect_corner(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGVector=dd}16 */
    	moveBySuggestedOffset(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	moveChildrenToIdenticalPositionAfterResizeFromRect(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	optimalBoundingBox(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	otherArtboardUnderArtboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentArtboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentForInsertingLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentRoot(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preset(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resizeToFitChildren(): void;
    /* typeEncoding=@16@0:8 */
    	rootForNameUniquing(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	rotation(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	rulerBase(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rulerCoordinateSpace(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16Q32d40 */
    	selectionHitTest_options_zoomValue(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setCenter(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsLocked(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsVisible(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreset(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setRect(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setRulerBase(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldBreakMaskChain(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldGrowSizeOfGroupForInferredLayout(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldRefreshOverlayForFlows(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldRoundCoordinates(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateColorsUsing(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	updateColorsUsingBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updateableColors(...args: any[]): any;
  }
}

declare const MSArtboardGroup: sketchInternal.MSArtboardGroup;

