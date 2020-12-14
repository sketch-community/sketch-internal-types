// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBaseSharedObjectAction extends MSDocumentAction {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	needsRenameAfterAction(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSShareableObjectUpdater", ivar=_updater, attributes=(assign,nonatomic,readonly) */
    	updater(): MSShareableObjectUpdater;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDynamicTitle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	needsRenameAfterAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performSharedObjectAction(): void;
    /* typeEncoding=@24@0:8@16 */
    	selectedLayersForSharableObjectUpdater(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updater(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	validationStatus(...args: any[]): any;
  }
}

declare const MSBaseSharedObjectAction: sketchInternal.MSBaseSharedObjectAction;

