// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableShapeGroup extends _MSImmutableShapeGroup {
    /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	CGTransformForFrame(): CGAffineTransform;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	bounds(): CGRect;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasMarkers(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasTransforms(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
    /* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	influenceRectEdgePaddingsThatCascadeToContainedLayersPre19511(): BCEdgePaddings;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedHorizontal(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedVertical(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLayerExportable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isPartOfClippingMask(): boolean;
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
    /* typeEncoding=@"MSImmutableStyle", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	style(): MSImmutableStyle;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=Q16@0:8 */
    	static traits(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	addContentToElement_attributes_exporter(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	addDecorationToParent_exporter(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	addGroupContentToElement_attributes_exporter(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	addMaskToElement_exporter(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	addSVGAttributes_exporter(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsBlur(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsShadowSpread(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	appendBaseTranslation_exporter(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	bezierForDrawingLayerListPreviewInDocument(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	booleanOperationForLayer(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	calculateInfluenceRectForBoundsInDocument_visitedSymbols(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	calculateInfluenceRectForBoundsInDocumentPre108(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canSkipAdvancedClipForStrokes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	defaultName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodePropertiesWithCoder(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDynamicPreview(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMarkers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	includeChildrenInCalculatingStyleSize(...args: any[]): any;
    /* typeEncoding={BCEdgePaddings=dddd}16@0:8 */
    	influenceRectEdgePaddingsThatCascadeToContainedLayersPre19511(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLine(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPartOfClippingMask(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV103OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV106OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV110OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV51OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@32@0:8q16@24 */
    	previewImageForTraits_inDocument(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	requiresPathDefinition(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24d32 */
    	simplifyPathElement_exporter_inset(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	svgStyle(...args: any[]): any;
  }
}

declare const MSImmutableShapeGroup: sketchInternal.MSImmutableShapeGroup;

