// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableShapePathLayer extends _MSImmutableShapePathLayer {
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
    /* typeEncoding=c, ivar=_isEditing, attributes=(assign,nonatomic,readonly) */
    	isEditing(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedHorizontal(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFlippedVertical(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isLayerExportable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isPolygon(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isPolyline(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isRectangle(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isVisible(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	numberOfCurvePoints(): number;
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
    /* typeEncoding=@"MSImmutableStyle", ivar=_usedStyle, attributes=(assign,nonatomic,readonly) */
    	usedStyle(): MSImmutableStyle;
    /* typeEncoding=@16@0:8 */
    	defaultName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	traits(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	traitsForPropertyName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
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
    /* typeEncoding=v32@0:8@16@24 */
    	appendBaseTranslation_exporter(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	bezierForDrawingLayerListPreviewInDocument(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	calculateInfluenceRectForBoundsInDocument_visitedSymbols(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	calculatePathInBoundsInDocument_visitedSymbols(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	decodePropertiesWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodePropertiesWithCoder(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDefaultCurvePoints(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDynamicPreview(...args: any[]): any;
    /* typeEncoding=@28@0:8c16@?20 */
    	initWithDefaults_block(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	initializeUnsetObjectPropertiesWithDefaults(): void;
    /* typeEncoding=c16@0:8 */
    	isEditing(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLine(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPolygon(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPolyline(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRectangle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migrateByTakingStyleFrom(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromShapeGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV118OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV119OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV99OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	numberOfCurvePoints(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	relativeRectWithExporter(...args: any[]): any;
    /* typeEncoding=v24@0:8^{EKRasterCanvasStruct=}16 */
    	renderToCanvas(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	requiresPathDefinition(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24d32 */
    	simplifyPathElement_exporter_inset(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	svgStyle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	usedStyle(...args: any[]): any;
  }
}

declare const MSImmutableShapePathLayer: sketchInternal.MSImmutableShapePathLayer;

