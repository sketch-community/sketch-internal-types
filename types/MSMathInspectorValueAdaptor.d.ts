// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMathInspectorValueAdaptor extends MSInspectorValueAdaptor {
    /* typeEncoding=c, ivar=_adjustIndividually, attributes=(assign,nonatomic) */
    	adjustIndividually(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	allowsFloat(): boolean;
    /* typeEncoding=@"NSNumberFormatter", ivar=_cachedFloatNumberFormatter, attributes=(retain,nonatomic) */
    	cachedFloatNumberFormatter(): cocoascript.NSNumberFormatter;
    /* typeEncoding=@"NSNumberFormatter", ivar=_cachedIntegerNumberFormatter, attributes=(retain,nonatomic) */
    	cachedIntegerNumberFormatter(): cocoascript.NSNumberFormatter;
    /* typeEncoding=c, ivar=_clampsValues, attributes=(assign,nonatomic) */
    	clampsValues(): boolean;
    /* typeEncoding=@"<MSInspectorMathValueAdaptorDelegate>", ivar=(null), attributes=(assign,dynamic,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSNumberFormatter", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	effectiveNumberFormatter(): cocoascript.NSNumberFormatter;
    /* typeEncoding=c, ivar=_forcePrefixMath, attributes=(assign,nonatomic) */
    	forcePrefixMath(): boolean;
    /* typeEncoding=c, ivar=_isIncrementing, attributes=(assign,nonatomic) */
    	isIncrementing(): boolean;
    /* typeEncoding=@"NSNumberFormatter", ivar=_numberFormatter, attributes=(retain,nonatomic) */
    	numberFormatter(): cocoascript.NSNumberFormatter;
    /* typeEncoding=Q, ivar=_operation, attributes=(assign,nonatomic) */
    	operation(): number;
    /* typeEncoding=c, ivar=_useNSNullForNilValues, attributes=(assign,nonatomic) */
    	useNSNullForNilValues(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	adjustIndividually(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsFloat(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedFloatNumberFormatter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cachedIntegerNumberFormatter(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32^@40 */
    	checkAndAdjustValues_contexts_withNumberFormatter_error(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	clampsValues(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	currentAdjustOptions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	effectiveNumberFormatter(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	errorWithUnparsableString(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	forcePrefixMath(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	forceRelativeMathForBlock(...args: any[]): any;
    /* typeEncoding=v32@0:8d16@24 */
    	incrementBy_sender(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@?24@?32@40 */
    	initWithModelsController_floatValueGetter_floatValueSetter_modelKeyPathsToWatch(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithModelsController_modelKeyPath_valueTransformer(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@?24@?32@40 */
    	initWithModelsController_valueGetter_valueSetter_modelKeyPathsToWatch(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isIncrementing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	numberFormatter(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	operation(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAdjustIndividually(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedFloatNumberFormatter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCachedIntegerNumberFormatter(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setClampsValues(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setForcePrefixMath(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsIncrementing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNumberFormatter(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setOperation(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setUseNSNullForNilValues(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setValue(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24^@32^@40 */
    	transformAdaptorValue_forModel_context_error(...args: any[]): any;
    /* typeEncoding=@40@0:8@16^@24^@32 */
    	transformedValuesFromAdaptorValue_contexts_error(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	trimValueString_getMathPrefix(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	useNSNullForNilValues(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	value(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32^@40 */
    	valueFromPrefixStrippedString_forModel_originalString_error(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	valueStringShouldProduceNullResult(...args: any[]): any;
  }
}

declare const MSMathInspectorValueAdaptor: sketchInternal.MSMathInspectorValueAdaptor;

