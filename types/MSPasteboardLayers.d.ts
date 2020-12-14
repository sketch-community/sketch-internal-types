// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPasteboardLayers extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSDictionary", ivar=_foreignSymbols, attributes=(retain,nonatomic) */
    	foreignSymbols(): cocoascript.NSDictionary;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSLayerArray", ivar=_layers, attributes=(retain,nonatomic) */
    	layers(): MSLayerArray;
    /* typeEncoding=@"NSDictionary", ivar=_localSymbols, attributes=(retain,nonatomic) */
    	localSymbols(): cocoascript.NSDictionary;
    /* typeEncoding=Q, ivar=_parentTraits, attributes=(assign,nonatomic) */
    	parentTraits(): number;
    /* typeEncoding=@"NSArray", ivar=_sharedStyles, attributes=(retain,nonatomic) */
    	sharedStyles(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_sharedSwatches, attributes=(retain,nonatomic) */
    	sharedSwatches(): cocoascript.NSArray;
    /* typeEncoding={CGPoint=dd}, ivar=_suggestedPosition, attributes=(assign,nonatomic) */
    	suggestedPosition(): CGPoint;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding={CGPoint=dd}28@0:8@16c24 */
    	originForLayer_rootIsPage(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	parentTraitsForLayers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pasteboardLayersWithForeignLayers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pasteboardLayersWithLayers(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}28@0:8@16c24 */
    	suggestedOriginForLayers_rootIsPage(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	traits(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	traitsForPropertyName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c24@0:8@16 */
    	canBeContainedInLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignSymbols(...args: any[]): any;
    /* typeEncoding=@60@0:8@16{CGPoint=dd}24@40@48c56 */
    	insertInGroup_atPosition_afterLayer_viewport_fitToParent(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	insertOnPage_viewport_hint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerPositionsRelativeToUnion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localSymbols(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	parentTraits(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setForeignSymbols(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocalSymbols(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setParentTraits(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSharedStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSharedSwatches(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setSuggestedPosition(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedStyles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedSwatches(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	suggestedPosition(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	suggestedRect(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	traits(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	unionSize(...args: any[]): any;
  }
}

declare const MSPasteboardLayers: sketchInternal.MSPasteboardLayers;

