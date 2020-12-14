// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSReplaceOverrideAction extends MSOverrideAction {
    /* typeEncoding=@"NSObject<MSReplaceOverride>", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentAction(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectionIsSingleStyle(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectionIsSingleSymbol(): boolean;
    /* typeEncoding=@"MSReplaceOverrideStyleAction", ivar=_styleAction, attributes=(assign,nonatomic,readonly) */
    	styleAction(): MSReplaceOverrideStyleAction;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSReplaceOverrideSymbolAction", ivar=_symbolAction, attributes=(assign,nonatomic,readonly) */
    	symbolAction(): MSReplaceOverrideSymbolAction;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	currentAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuWillOpen(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	overrideMenuRootAction(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	selectionIsSingleStyle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	selectionIsSingleSymbol(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolAction(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	validationStatus(...args: any[]): any;
  }
}

declare const MSReplaceOverrideAction: sketchInternal.MSReplaceOverrideAction;

