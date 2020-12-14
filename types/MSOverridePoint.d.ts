// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverridePoint extends NSObject {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isStyleOverride(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isSymbolOverride(): boolean;
    /* typeEncoding=@"NSString", ivar=_layerID, attributes=(assign,nonatomic,readonly) */
    	layerID(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_layerName, attributes=(assign,nonatomic,readonly) */
    	layerName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"MSOverridePoint", ivar=_parent, attributes=(assign,nonatomic,readonly,weak) */
    	parent(): MSOverridePoint;
    /* typeEncoding=@"NSString", ivar=_path, attributes=(assign,nonatomic,readonly) */
    	path(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pathComponents(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=_property, attributes=(assign,nonatomic,readonly) */
    	property(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c24@0:8@16 */
    	canAcceptDataOfType(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	comparisonScoreAgainst(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	distanceToOverridePoint(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithLayer_property_parent(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isStyleOverride(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSymbolOverride(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pathComponents(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	property(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
  }
}

declare const MSOverridePoint: sketchInternal.MSOverridePoint;

