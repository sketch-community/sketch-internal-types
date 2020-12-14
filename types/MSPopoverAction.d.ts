// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPopoverAction extends MSDocumentAction {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"BCPopover", ivar=_popover, attributes=(retain,nonatomic) */
    	popover(): BCPopover;
    /* typeEncoding=@"NSViewController", ivar=(null), attributes=(assign,readonly) */
    	popoverViewController(): cocoascript.NSViewController;
    /* typeEncoding=c, ivar=(null), attributes=(assign,readonly) */
    	popoverVisible(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=#16@0:8 */
    	popoverClass(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	closePopover(): void;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popover(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popoverViewController(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	popoverVisible(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	popoverWillClose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPopover(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showPopover(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	showPopoverToForSender_viewController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	viewForAttachingPopover(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidResignMain(...args: any[]): any;
  }
}

declare const MSPopoverAction: sketchInternal.MSPopoverAction;

