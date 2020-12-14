// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssistantAction extends MSDocumentAction {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	label(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	mayShowInToolbar(): boolean;
    /* typeEncoding=:, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	preferredMenuAction(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	tooltip(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	validate(): boolean;
    /* typeEncoding=v24@0:8@16 */
    	assistantsToggle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	makeToolbarItemForToolbar(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mayShowInToolbar(...args: any[]): any;
    /* typeEncoding=:16@0:8 */
    	preferredMenuAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	togglePanel(): void;
    /* typeEncoding=@16@0:8 */
    	tooltip(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validateToolbarItem(): void;
  }
}

declare const MSAssistantAction: sketchInternal.MSAssistantAction;

