// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableStyle extends _MSImmutableStyle {
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	enabledBorders(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	enabledFills(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	enabledInnerShadows(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	enabledShadows(): cocoascript.NSArray;
    /* typeEncoding=@"MSImmutableStyleBorder", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstEnabledBorder(): MSImmutableStyleBorder;
    /* typeEncoding=@"MSImmutableStyleFill", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstEnabledFill(): MSImmutableStyleFill;
    /* typeEncoding=@"MSImmutableStyleInnerShadow", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstEnabledInnerShadow(): MSImmutableStyleInnerShadow;
    /* typeEncoding=@"MSImmutableStyleShadow", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstEnabledShadow(): MSImmutableStyleShadow;
    /* typeEncoding=c, ivar=_hasBlending, attributes=(assign,nonatomic,readonly) */
    	hasBlending(): boolean;
    /* typeEncoding=c, ivar=_hasEnabledBackgroundBlur, attributes=(assign,nonatomic,readonly) */
    	hasEnabledBackgroundBlur(): boolean;
    /* typeEncoding=c, ivar=_hasEnabledBorder, attributes=(assign,nonatomic,readonly) */
    	hasEnabledBorder(): boolean;
    /* typeEncoding=c, ivar=_hasEnabledFill, attributes=(assign,nonatomic,readonly) */
    	hasEnabledFill(): boolean;
    /* typeEncoding=c, ivar=_hasEnabledInnerShadow, attributes=(assign,nonatomic,readonly) */
    	hasEnabledInnerShadow(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasEnabledOpaqueFill(): boolean;
    /* typeEncoding=c, ivar=_hasEnabledShadow, attributes=(assign,nonatomic,readonly) */
    	hasEnabledShadow(): boolean;
    /* typeEncoding=c, ivar=_hasMarkers, attributes=(assign,nonatomic,readonly) */
    	hasMarkers(): boolean;
    /* typeEncoding=c, ivar=_hasMoreThanOneEnabledFill, attributes=(assign,nonatomic,readonly) */
    	hasMoreThanOneEnabledFill(): boolean;
    /* typeEncoding=d, ivar=_outerPaddingForBiggestShadowSpread, attributes=(assign,nonatomic,readonly) */
    	outerPaddingForBiggestShadowSpread(): number;
    /* typeEncoding=d, ivar=_outerPaddingForBiggestStroke, attributes=(assign,nonatomic,readonly) */
    	outerPaddingForBiggestStroke(): number;
    /* typeEncoding=d, ivar=_outerPaddingForSmallestStroke, attributes=(assign,nonatomic,readonly) */
    	outerPaddingForSmallestStroke(): number;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	renderableFills(): cocoascript.NSArray;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shadowStrokeType(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shadowType(): number;
    /* typeEncoding=d, ivar=_thickestInnerStroke, attributes=(assign,nonatomic,readonly) */
    	thickestInnerStroke(): number;
    /* typeEncoding=d, ivar=_thickestStroke, attributes=(assign,nonatomic,readonly) */
    	thickestStroke(): number;
    /* typeEncoding=d, ivar=_thickestStrokeDoubledForClipping, attributes=(assign,nonatomic,readonly) */
    	thickestStrokeDoubledForClipping(): number;
    /* typeEncoding=c16@0:8 */
    	persistsObjectID(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	_boundsForShadow_path(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	_shadowWithGreatestSpread(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	addBlurFilter_exporter(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24Q32 */
    	addSVGAttributes_exporter_elementPosition(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24Q32 */
    	addSVGFilterAttributes_exporter_position(...args: any[]): any;
    /* typeEncoding=v44@0:8@16c24@28@36 */
    	addShadowFilters_includeSource_attributes_exporter(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32d40 */
    	applyLayerInfluenceRectBounds_document_toFilter_withRadius(...args: any[]): any;
    /* typeEncoding=@32@0:8q16@24 */
    	borderAtElementPosition_exporter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	borderWithGreatestInset(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	boundingBoxForBiggestShadowSpreadForLayer(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	boundsForPath(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	calculateHasBlending(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	calculateOuterPaddingForBiggestShadowSpread(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	calculateOuterPaddingForBiggestStroke(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	calculateOuterPaddingForSmallestStroke(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	calculateThickestInnerStroke(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	calculateThickestStroke(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	calculateThickestStrokeDoubledForClipping(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canCombineLastFillWithFirstBorder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearTextStyle(): void;
    /* typeEncoding=@16@0:8 */
    	enabledBorders(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	enabledFills(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	enabledInnerShadows(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	enabledShadows(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodePropertiesWithCoder(...args: any[]): any;
    /* typeEncoding=@32@0:8q16@24 */
    	fillAtElementPosition_exporter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstEnabledBorder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstEnabledFill(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstEnabledInnerShadow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstEnabledShadow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasBlending(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasBorderRequiringMask(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledBackgroundBlur(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledBorder(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledInnerShadow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledOpaqueFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledShadow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMarkers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMoreThanOneEnabledFill(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	internalNumberOfElements(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV103OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV104OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV111OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV119OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	numberOfElementsWithExporter(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	objectDidInit(): void;
    /* typeEncoding=d16@0:8 */
    	outerPaddingForBiggestShadowSpread(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	outerPaddingForBiggestStroke(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	outerPaddingForSmallestStroke(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeFillsAfterMigration(): void;
    /* typeEncoding=@104@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24{CGAffineTransform=dddddd}56 */
    	renderBitmapEffects_bounds_parentCoordinateTransform(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderableFills(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	requiresPathDefinition(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	shadowStrokeType(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	shadowType(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	thickestInnerStroke(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	thickestStroke(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	thickestStrokeDoubledForClipping(...args: any[]): any;
  }
}

declare const MSImmutableStyle: sketchInternal.MSImmutableStyle;

