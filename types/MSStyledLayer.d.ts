// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSStyledLayer extends _MSStyledLayer {
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	CGTransformForFrame(): CGAffineTransform;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	bounds(): CGRect;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSColor", ivar=(null), attributes=(retain,nonatomic) */
    	fillColor(): MSColor;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasTransforms(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedHorizontal(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedVertical(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLayerExportable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isSharedStyleOutOfSync(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isVisible(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	objectID(): cocoascript.NSString;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	origin(): CGPoint;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rect(): CGRect;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rotation(): number;
    /* typeEncoding=@"MSSharedStyle", ivar=(null), attributes=(assign,nonatomic,weak) */
    	sharedStyle(): MSSharedStyle;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8@16 */
    	layerWithImage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layerWithImageFromFileURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layerWithImageFromPasteboard(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	pasteExportOptions_onLayers(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	pasteStyleDict_onLayers_document(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	pasteStyleFromPasteboard_onLayers_document(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	pasteStyleFromPasteboardOnLayers_document(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	pasteTextStyle_onLayers_document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	supportedPasteboardTypesForStyleCopying(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	CSSAttributes(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustAfterInsert(): void;
    /* typeEncoding=v40@0:8@16@24@32 */
    	applyData_fromDataSupplier_identifier(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyOverride_document(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	applyOverrides_document_visitedSymbols(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	applyScreenPickerColor_preferredStyleName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canConvertToOutlines(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canCutSegments(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	copiedStyleAttributesForLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	copyStyleToPasteboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	copyStyleToPasteboard(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	correctInvalidGamma(): void;
    /* typeEncoding=@24@0:8@16 */
    	createSharedStyleWithName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignSharedStyles(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledBackgroundBlur(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMarkers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageReplaceableStyleFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSharedStyleOutOfSync(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layerByRemovingSegmentAtIndexPath(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	layerStyleDidChange(): void;
    /* typeEncoding=@16@0:8 */
    	layersByConvertingToOutlines(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localSharedStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	multiplyBy(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	outlineShapeFromPath_withBorder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareAsMask(): void;
    /* typeEncoding=c16@0:8 */
    	previewShouldIndicateSharedStyle(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	propertiesAreEqual_forPurpose(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resetSharedStyle(): void;
    /* typeEncoding=v24@0:8@16 */
    	setFillColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSharedStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyle(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	setupWithLayerBuilderDictionary(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	shareableObjectType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedMaster(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedStyle(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	sharedStylesReferencedInDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleContainer(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	stylesForColorAdjustingWithPreferredName(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	updateSharedStyleReferencesFrom_to(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateSharedStyleToMatchSelf(): void;
    /* typeEncoding=@16@0:8 */
    	usedStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	writeStyleToPasteboard(...args: any[]): any;
  }
}

declare const MSStyledLayer: sketchInternal.MSStyledLayer;

