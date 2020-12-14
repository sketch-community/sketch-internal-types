// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLegacyInsertMenuAction extends MSDocumentAction {
    /* typeEncoding=@"<NSObject>", ivar=_documentCloseObserver, attributes=(retain,nonatomic) */
    	documentCloseObserver(): any;
    /* typeEncoding=@"MSForeignObjectMenuBuilder", ivar=_symbolMenuBuilder, attributes=(retain,nonatomic) */
    	symbolMenuBuilder(): MSForeignObjectMenuBuilder;
    /* typeEncoding=@"MSForeignObjectMenuBuilder", ivar=_textStyleMenuBuilder, attributes=(retain,nonatomic) */
    	textStyleMenuBuilder(): MSForeignObjectMenuBuilder;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	addHeaderToMenu_withTitle(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	addInsertMenuItemsFor_usingMenuBuilder_forMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addInsertSharedTextToMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addInsertSymbolsToMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentCloseObserver(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSelectable(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentCloseObserver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSymbolMenuBuilder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextStyleMenuBuilder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	submenuActionIDs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolMenuBuilder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textStyleMenuBuilder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tooltip(...args: any[]): any;
  }
}

declare const MSLegacyInsertMenuAction: sketchInternal.MSLegacyInsertMenuAction;

