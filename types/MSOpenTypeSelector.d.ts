// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOpenTypeSelector extends NSObject {
    /* typeEncoding=@"NSNumber", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	identifier(): cocoascript.NSNumber;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isDefault(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"MSOpenTypeFeature", ivar=_parent, attributes=(assign,nonatomic,readonly,weak) */
    	parent(): MSOpenTypeFeature;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontAttributeForInsertion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	identifier(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithDictionary_parentFeature(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDefault(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parent(...args: any[]): any;
  }
}

declare const MSOpenTypeSelector: sketchInternal.MSOpenTypeSelector;

