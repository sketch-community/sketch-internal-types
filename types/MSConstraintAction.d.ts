// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSConstraintAction extends MSDocumentAction {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	actionKeyPath(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	validationKeyPath(): cocoascript.NSString;
    /* typeEncoding=@16@0:8 */
    	actionKeyPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isActive(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	stateForConstraint(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	validationKeyPath(...args: any[]): any;
  }
}

declare const MSConstraintAction: sketchInternal.MSConstraintAction;

