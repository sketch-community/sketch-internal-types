// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAction extends NSResponder {
    /* typeEncoding=@"NSAttributedString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	badgeTitle(): cocoascript.NSAttributedString;
    /* typeEncoding=@"MSActionController", ivar=_controller, attributes=(assign,nonatomic,weak) */
    	controller(): MSActionController;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasDynamicTitle(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasSubMenu(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	image(): cocoascript.NSImage;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	imageForMenu(): cocoascript.NSImage;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	imageForToolbar(): cocoascript.NSImage;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	imageName(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isActive(): boolean;
    /* typeEncoding=c, ivar=_isSelectable, attributes=(assign,nonatomic,readonly) */
    	isSelectable(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	label(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	labelForMenu(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	labelForToolbar(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	mayShowInToolbar(): boolean;
    /* typeEncoding=@"NSMenuItem", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemForToolbarItem(): cocoascript.NSMenuItem;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,readonly) */
    	menuItems(): cocoascript.NSArray;
    /* typeEncoding=:, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	preferredMenuAction(): any;
    /* typeEncoding=S, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shortcutCharacter(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSToolbarItem", ivar=_toolbarItem, attributes=(retain,nonatomic) */
    	toolbarItem(): cocoascript.NSToolbarItem;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	tooltip(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	validate(): boolean;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	validationStatus(): number;
    /* typeEncoding=@16@0:8 */
    	baseImageName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	classNamesToImageNamesDictionary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	imageNameWithBaseName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageSuffix(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	badgeTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cleanName(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	containsActionWithID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contextForActionObservers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	controller(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	doPerformAction(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	handlesKeyEvent(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasDynamicTitle(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasSubMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	image(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageForMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageForToolbar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageForToolbarCustomisationSheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isActive(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSelectable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	labelForMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	labelForToolbar(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	makeToolbarItemForToolbar(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mayShowInToolbar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuDidClose(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemForToolbarItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItems(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	menuItemsForMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	performAction(...args: any[]): any;
    /* typeEncoding=:16@0:8 */
    	preferredMenuAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setToolbarItem(...args: any[]): any;
    /* typeEncoding=S16@0:8 */
    	shortcutCharacter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	submenuActionIDs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tooltip(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validateToolbarItem(): void;
    /* typeEncoding=q16@0:8 */
    	validationStatus(...args: any[]): any;
  }
}

declare const MSAction: sketchInternal.MSAction;

