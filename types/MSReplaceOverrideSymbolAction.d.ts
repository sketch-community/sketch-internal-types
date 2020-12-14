// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSReplaceOverrideSymbolAction extends MSOverrideAction {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSForeignObjectMenuBuilder", ivar=_menuBuilder, attributes=(assign,nonatomic,readonly) */
    	menuBuilder(): MSForeignObjectMenuBuilder;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	applySymbolOverride_symbolMasterReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	buildMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuBuilder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	replaceOverrideWithSymbolAction(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
  }
}

declare const MSReplaceOverrideSymbolAction: sketchInternal.MSReplaceOverrideSymbolAction;

