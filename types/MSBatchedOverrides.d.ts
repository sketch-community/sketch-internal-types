// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBatchedOverrides extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic) */
    	affectedLayerName(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	affectsSingleOverride(): boolean;
    /* typeEncoding=@"MSBatchedSymbolMasters", ivar=batchedMasters, attributes=(assign,nonatomic,readonly) */
    	batchedMasters(): MSBatchedSymbolMasters;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic) */
    	canOverride(): number;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic) */
    	canOverrideDescendants(): number;
    /* typeEncoding=c, ivar=enabled, attributes=(assign,nonatomic) */
    	enabled(): boolean;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	masters(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	overrides(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	affectedLayerName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	affectsSingleOverride(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	batchedMasters(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	canOverride(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	canOverrideDescendants(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enabled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithBatchedMasters_overrides(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	masters(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	overrides(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAffectedLayerName(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setCanOverride(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setCanOverrideDescendants(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=c32@0:8@16q24 */
    	setPropertiesForOverride_atIndex(...args: any[]): any;
  }
}

declare const MSBatchedOverrides: sketchInternal.MSBatchedOverrides;

