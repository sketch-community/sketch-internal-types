// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentWindow extends NSWindow {
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,weak) */
    	document(): MSDocument;
    /* typeEncoding=@"NSEvent", ivar=_lastForwardedKeyEvent, attributes=(assign,nonatomic,weak) */
    	lastForwardedKeyEvent(): cocoascript.NSEvent;
    /* typeEncoding=@"BCWindowBadge", ivar=_titleBarBadge, attributes=(retain,nonatomic) */
    	titleBarBadge(): BCWindowBadge;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	cancelOperation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastForwardedKeyEvent(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshAfterAppearanceChange(): void;
    /* typeEncoding=c24@0:8:16 */
    	respondsToSelector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sendEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAppearance(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLastForwardedKeyEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTitleBarBadge(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	shouldDismissPopover_event(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	titleBarBadge(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleToolbarShown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	touchBar(...args: any[]): any;
  }
}

declare const MSDocumentWindow: sketchInternal.MSDocumentWindow;

