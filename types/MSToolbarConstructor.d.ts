// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSToolbarConstructor extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,readonly) */
    	canvasToolbarType(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,readonly) */
    	componentsToolbarType(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_doc, attributes=(assign,nonatomic,weak) */
    	doc(): MSDocument;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_isForceAddingNotificationToolbarItem, attributes=(assign,nonatomic) */
    	isForceAddingNotificationToolbarItem(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSToolbar", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	toolbar(): cocoascript.NSToolbar;
    /* typeEncoding=@"NSArray", ivar=_toolbarAllowedItemIdentifiers, attributes=(copy,nonatomic) */
    	toolbarAllowedItemIdentifiers(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_toolbarDefaultItemIdentifiers, attributes=(copy,nonatomic) */
    	toolbarDefaultItemIdentifiers(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_toolbarSelectableIdentifiers, attributes=(copy,nonatomic) */
    	toolbarSelectableIdentifiers(): cocoascript.NSArray;
    /* typeEncoding=@16@0:8 */
    	toolbarAllowedComponentItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarAllowedSketchDocumentItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarDefaultComponentItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarDefaultComponentItemIdentifiersForBigSurAndUp(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarDefaultComponentItemIdentifiersForCatalinaAndBelow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarDefaultItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarDefaultItemIdentifiersForBigSurAndUp(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarDefaultItemIdentifiersForCatalinaAndBelow(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	canvasToolbarType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	componentsToolbarType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	constructCanvasToolbar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	constructComponentsToolbar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	constructToolbarForWindow(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	constructToolbarWithIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	doc(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	documentContentTypeDidChange(): void;
    /* typeEncoding=v16@0:8 */
    	documentTypeDidChange(): void;
    /* typeEncoding=v16@0:8 */
    	ensureNotificationItemVisibility(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	forceAddToolbarItemWithIdentifier_toToolbar(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertNewDefaultToolbarItemsForToolbar(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isForceAddingNotificationToolbarItem(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeLegacyToolbarItemsForToolbar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDoc(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsForceAddingNotificationToolbarItem(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldAutomaticallyRemoveNotificationToolbarItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setToolbarAllowedItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setToolbarDefaultItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setToolbarSelectableIdentifiers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldAutomaticallyRemoveNotificationToolbarItem(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldShowNotificationItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbar(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	toolbar_containsToolbarItemWithIdentifier(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarAllowedItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	toolbarAllowedItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarDefaultItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	toolbarDefaultItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toolbarDidRemoveItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarSelectableIdentifiers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	toolbarSelectableItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toolbarWillAddItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	validateActionOfToolbarItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validateToolbarItems(): void;
  }
}

declare const MSToolbarConstructor: sketchInternal.MSToolbarConstructor;

