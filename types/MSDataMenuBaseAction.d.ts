// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDataMenuBaseAction extends MSDocumentAction {
    /* typeEncoding=@"MSDataMenuProvider", ivar=_dataMenuProvider, attributes=(assign,nonatomic,readonly) */
    	dataMenuProvider(): MSDataMenuProvider;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSAvailableOverride", ivar=(null), attributes=(retain) */
    	overrideItemForInspector(): MSAvailableOverride;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	presentationContext(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	dataMenuProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	presentationContext(...args: any[]): any;
  }
}

declare const MSDataMenuBaseAction: sketchInternal.MSDataMenuBaseAction;

