// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSReplaceOverrideStyleAction extends MSOverrideAction {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSForeignObjectMenuBuilder", ivar=_layerStyleMenuBuilder, attributes=(assign,nonatomic,readonly) */
    	layerStyleMenuBuilder(): MSForeignObjectMenuBuilder;
    /* typeEncoding=@"MSForeignObjectMenuBuilder", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuBuilder(): MSForeignObjectMenuBuilder;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSForeignObjectMenuBuilder", ivar=_textStyleMenuBuilder, attributes=(assign,nonatomic,readonly) */
    	textStyleMenuBuilder(): MSForeignObjectMenuBuilder;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	applyStyleOverride_styleReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	buildMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerStyleMenuBuilder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuBuilder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	replaceOverrideWithStyleAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textStyleMenuBuilder(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
  }
}

declare const MSReplaceOverrideStyleAction: sketchInternal.MSReplaceOverrideStyleAction;

