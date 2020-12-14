// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentWindowController extends NSWindowController {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSMainSplitViewController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	mainSplitViewController(): MSMainSplitViewController;
    /* typeEncoding=@"MSDocument", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	representedDocument(): MSDocument;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mainSplitViewController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	representedDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	saveCurrentWindowFrameAsDefeaultWindowSize(): void;
    /* typeEncoding=v24@0:8@16 */
    	windowDidBecomeMain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidResignMain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowDidResize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowWillBeginSheet(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowWillClose(...args: any[]): any;
  }
}

declare const MSDocumentWindowController: sketchInternal.MSDocumentWindowController;

