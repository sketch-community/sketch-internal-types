// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBadgeController extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_activeActions, attributes=(assign,nonatomic,readonly) */
    	activeActions(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	activeWindowBadgingActions(): cocoascript.NSArray;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,weak) */
    	document(): MSDocument;
    /* typeEncoding=@"MSDocumentWindow", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	documentWindow(): MSDocumentWindow;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	activeActions(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	activeBadgingActionsForController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	activeWindowBadgingActions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentWindow(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refresh(): void;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	updateBadge_forAction(...args: any[]): any;
  }
}

declare const MSBadgeController: sketchInternal.MSBadgeController;

