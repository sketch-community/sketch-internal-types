// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextLayer extends _MSTextLayer {
    /* typeEncoding=@"NSAttributedString", ivar=(null), attributes=(copy,nonatomic) */
    	attributedStringValue(): cocoascript.NSAttributedString;
    /* typeEncoding=@"NSNumber", ivar=(null), attributes=(retain,nonatomic) */
    	characterSpacing(): cocoascript.NSNumber;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"<MSTextLayerEditingDelegate>", ivar=_editingDelegate, attributes=(assign,nonatomic,weak) */
    	editingDelegate(): any;
    /* typeEncoding=@"NSFont", ivar=(null), attributes=(copy,nonatomic) */
    	font(): cocoascript.NSFont;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(retain,nonatomic) */
    	fontPostscriptName(): cocoascript.NSString;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	fontSize(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_isEditingText, attributes=(assign,nonatomic) */
    	isEditingText(): boolean;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    	lineHeight(): number;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_previousRectCache, attributes=(assign,nonatomic) */
    	previousRectCache(): CGRect;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic) */
    	stringValue(): cocoascript.NSString;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(copy,nonatomic) */
    	styleAttributes(): cocoascript.NSDictionary;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	supportsVerticalAlignment(): boolean;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic) */
    	textAlignment(): number;
    /* typeEncoding=@"MSColor", ivar=(null), attributes=(copy,nonatomic) */
    	textColor(): MSColor;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic) */
    	verticalAlignment(): number;
    /* typeEncoding=c24@0:8@16 */
    	canSetTextAlignmentForLayers(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	canSetTextVerticalAlignmentForLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	keyPathsForValuesAffectingCanFixHeight(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	keyPathsForValuesAffectingHasFixedHeight(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	keyPathsForValuesAffectingSupportsVerticalAlignment(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	maintainTextLayerBaselinesForLayers_inBlock(...args: any[]): any;
    /* typeEncoding=q32@0:8q16@24 */
    	menuItemStateForAlignment_forLayers(...args: any[]): any;
    /* typeEncoding=q32@0:8@?16@24 */
    	menuItemStateForTest_forLayers(...args: any[]): any;
    /* typeEncoding=q32@0:8q16@24 */
    	menuItemStateForTextVerticalAlignment_forLayers(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@24 */
    	setTextAlignment_forLayers(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@24 */
    	setTextVerticalAlignment_forLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	CSSAttributes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	PDFPreview(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	addAttribute_value(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24{_NSRange=QQ}32 */
    	addAttribute_value_forRange(...args: any[]): any;
    /* typeEncoding=v40@0:8@16{_NSRange=QQ}24 */
    	addAttributes_forRange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustFrameToFit(): void;
    /* typeEncoding=v24@0:8@?16 */
    	adjustFrameToFitWithUnavilableFontsRectCalculationBlock(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16Q24 */
    	alignmentRectInCoordinateSpace_options(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	applyData_fromDataSupplier_identifier(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyOverride_document(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyScreenPickerColor_preferredStyleName(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	assumedAlignment(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	attributeForKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	attributedStringValue(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	baseLineHeight(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	baselineAdjustmentForLayoutManager(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canBeTransformed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canConvertToOutlines(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canFixHeight(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canLockProportions(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canScale(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeFont(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeListType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeTextColorTo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	characterSpacing(...args: any[]): any;
    /* typeEncoding=v28@0:8q16c24 */
    	checkTextBehaviourAndClippingAfterResizeFromCorner_mayClip(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	compareAttributes_withAttributes(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	constrainProportions(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	copyStylePropertiesToShape_shapeName(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	copyTextPropertiesToShape_color(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	cornerForBaselineMaintaining(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	cornerRectType(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	defaultLineHeight(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	drawingPointForText(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editingDelegate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	embedInTransformedGroup(): void;
    /* typeEncoding=v32@0:8Q16@?24 */
    	enumerateAnchorsForSnappingWithMask_usingBlock(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	findUnavailableFontRectStoredInDocument_override(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	finishEditing(): void;
    /* typeEncoding=v16@0:8 */
    	fixParentGeometryIfNotAlreadyChangingLayout(): void;
    /* typeEncoding=@16@0:8 */
    	font(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontPostscriptName(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	fontSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignSharedStyles(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	handlerClass(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMultipleTextColors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hoverPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	ignoreDelegateNotificationsInBlock(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24d32c40 */
    	initWithAttributedString_documentColorSpace_maxWidth_convertColorSpace(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding=@72@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48@56q64 */
    	initWithFrame_attributes_documentColorSpace_type(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inspectorSections(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	invalidateFonts(): void;
    /* typeEncoding=c16@0:8 */
    	isEditingText(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEmpty(...args: any[]): any;
    /* typeEncoding=f16@0:8 */
    	kerning(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	layerDidResizeFromInspector(...args: any[]): any;
    /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16q48 */
    	layerDidResizeFromRect_corner(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	layerStyleDidChange(): void;
    /* typeEncoding=@16@0:8 */
    	layersByConvertingToOutlines(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	layoutDirection(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	leading(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	lineHeight(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	makeLowercase(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	makeUppercase(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	multiplyBy(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	object_didChangeProperty(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	objectDidInit(): void;
    /* typeEncoding=@16@0:8 */
    	paragraphStyle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pathsWithColorsFromGlyphsInBoundsWithParentGroupSplitByColorAttribute(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performInitEmptyObject(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	previousRectCache(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	propertiesAreEqual_forPurpose(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	reapplyPreviousAttributesFromString_document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	replaceFonts(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	replaceMissingFontsIfNecessary(): void;
    /* typeEncoding=v24@0:8@16 */
    	replaceTextPreservingAttributeRanges(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetSharedStyle(): void;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	resizeWithOldGroupSize(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	resizingConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAttributedString(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	setAttributedString_unavailableFontsRectCalculationBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAttributedStringValue(...args: any[]): any;
    /* typeEncoding=v40@0:8@16{_NSRange=QQ}24 */
    	setAttributes_forRange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCharacterSpacing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEditingDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFont(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFontPostscriptName(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setFontSize(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsEditingText(...args: any[]): any;
    /* typeEncoding=v20@0:8f16 */
    	setKerning(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setLeading(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setLineHeight(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setPreviousRectCache(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setRectAccountingForClipped(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSharedStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStringValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyleAttributes(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setTextAlignment(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setTextBehaviour(...args: any[]): any;
    /* typeEncoding=v28@0:8q16c24 */
    	setTextBehaviour_mayAdjustFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextColor(...args: any[]): any;
    /* typeEncoding=v40@0:8Q16{_NSRange=QQ}24 */
    	setTextTransform_range(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setVerticalAlignment(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setupBehaviour(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	setupWithLayerBuilderDictionary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shapeToUseForTextOnPath(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	shareableObjectType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedObject(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawSelection(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldDrawSelectionStroke(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldMaintainBaseLineOnStyleChange(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldStorePDFPreviews(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	startingPositionOnPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stringValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleAttributes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleContainer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	supportsInnerOuterBorders(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	supportsVerticalAlignment(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	syncTextStyleAttributes(): void;
    /* typeEncoding=q16@0:8 */
    	textAlignment(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	updateAttributedStringInBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateColorsUsing(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	updateColorsUsingBlock(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateNameFromStorage(): void;
    /* typeEncoding=v24@0:8@?16 */
    	updateStyleInBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updateableColors(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	verticalAlignment(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	writeStyleToPasteboard(...args: any[]): any;
  }
}

declare const MSTextLayer: sketchInternal.MSTextLayer;

