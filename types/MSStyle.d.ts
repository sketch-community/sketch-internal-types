// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSStyle extends _MSStyle {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasBlending(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasEnabledBackgroundBlur(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasEnabledBorder(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasEnabledFill(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasEnabledShadow(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasMarkers(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasMoreThanOneEnabledFill(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSString", ivar=_primitiveSharedObjectID, attributes=(retain,nonatomic) */
    	primitiveSharedObjectID(): cocoascript.NSString;
    /* typeEncoding=@"MSTextStyle", ivar=(null), attributes=(retain,nonatomic) */
    	primitiveTextStyle(): MSTextStyle;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	thickestInnerStroke(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	thickestStrokeDoubledForClipping(): number;
    /* typeEncoding=#24@0:8Q16 */
    	static immutableStylePartClassOfType(...args: any[]): any;
    /* typeEncoding=#24@0:8Q16 */
    	static stylePartClassOfType(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static styleWithFillColor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addStylePart(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	addStylePartOfType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	affectedLayerIDForPatching(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugQuickLookObject(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16Q24 */
    	deleteStylePartOfType_atIndex(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	determineMaskingMode(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	disableAllBorders(): void;
    /* typeEncoding=v16@0:8 */
    	disableAllFills(): void;
    /* typeEncoding=v16@0:8 */
    	disableAllInnerShadows(): void;
    /* typeEncoding=v16@0:8 */
    	disableAllShadows(): void;
    /* typeEncoding=v32@0:8Q16q24 */
    	duplicateStylePartOfType_atIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	enabledBorders(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	enabledFills(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	enabledInnerShadows(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	enabledShadows(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstEnabledBorder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstEnabledFill(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstEnabledShadow(...args: any[]): any;
    /* typeEncoding=v72@0:8{CGSize=dd}16{CGSize=dd}32@48d56@?64 */
    	generatePreviewWithImageSize_previewSize_colorSpace_backingScale_completionBlock(...args: any[]): any;
    /* typeEncoding=v80@0:8{CGSize=dd}16{CGSize=dd}32@48d56@?64@?72 */
    	generatePreviewWithImageSize_previewSize_colorSpace_backingScale_concurrentCancelBlock_completionBlock(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasBlending(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledBackgroundBlur(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledBorder(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasEnabledShadow(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMarkers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMoreThanOneEnabledFill(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasTextStyle(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	insertStylePart_atIndex(...args: any[]): any;
    /* typeEncoding=v40@0:8Q16Q24Q32 */
    	moveStylePartOfType_fromIndex_toIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	multiplyBy(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	object_didChangeProperty(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentStyle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareAsMask(): void;
    /* typeEncoding=v48@0:8{CGSize=dd}16{CGSize=dd}32 */
    	prepareForPreviewingWithImageSize_previewSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	primitiveSharedObjectID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	primitiveTextStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNilValueForKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPrimitiveSharedObjectID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPrimitiveTextStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextStyle(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    	shapeForPreviewWithSize(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    	sketchrunnerMSStyle_shapeForPreviewWithSize(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	stylePartsOfType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	supportsAdvancedBorderSettings(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	syncWithTemplateInstance(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	thickestInnerStroke(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	thickestStrokeDoubledForClipping(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	type(...args: any[]): any;
  }
}

declare const MSStyle: sketchInternal.MSStyle;

