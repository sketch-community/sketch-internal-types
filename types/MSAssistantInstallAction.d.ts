// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssistantInstallAction extends MSAction {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	label(): cocoascript.NSString;
    /* typeEncoding=:, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	preferredMenuAction(): any;
    /* typeEncoding=v24@0:8@16 */
    	assistantInstall(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	installFrom_activateOn(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	installFromDeepLink(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=:16@0:8 */
    	preferredMenuAction(...args: any[]): any;
  }
}

declare const MSAssistantInstallAction: sketchInternal.MSAssistantInstallAction;

