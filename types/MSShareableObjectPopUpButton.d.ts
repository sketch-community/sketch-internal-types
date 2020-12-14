// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShareableObjectPopUpButton extends NSPopUpButton {
    /* typeEncoding=@"MSShareableObjectActionsController", ivar=_actionsController, attributes=(retain,nonatomic) */
    	actionsController(): MSShareableObjectActionsController;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSForeignObjectMenuBuilder", ivar=_menuBuilder, attributes=(assign,nonatomic,weak) */
    	menuBuilder(): MSForeignObjectMenuBuilder;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemSelectorDictionary(): cocoascript.NSDictionary;
    /* typeEncoding=c, ivar=_needsRebuildMenu, attributes=(assign,nonatomic) */
    	needsRebuildMenu(): boolean;
    /* typeEncoding=@"NSArray", ivar=_objectLibraryMapping, attributes=(retain,nonatomic) */
    	objectLibraryMapping(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	actionsController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	addCreateNewMenu(): void;
    /* typeEncoding=v16@0:8 */
    	addDetachMenuItem(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	addMenuItemForActionName_title(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	addObjectsAtSameLevelToMenu(): void;
    /* typeEncoding=v16@0:8 */
    	addOpenLibraryMenu(): void;
    /* typeEncoding=v16@0:8 */
    	addOriganiseMenu(): void;
    /* typeEncoding=v16@0:8 */
    	addReplacementObjectsToMenu(): void;
    /* typeEncoding=v16@0:8 */
    	addSyncMenu(): void;
    /* typeEncoding=v16@0:8 */
    	addTitleMenuItem(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=@16@0:8 */
    	colorMenuItemSelectorDictionary(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasLayerWithMissingFonts(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerStyleMenuItemSelectorDictionary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	libraryControllerDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	masterObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuBuilder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemSelectorDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	needsRebuildMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	objectLibraryMapping(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	objectType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	objectsAtSameLevelAsMaster(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedObjectReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setActionsController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMenuBuilder(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setNeedsRebuildMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setObjectLibraryMapping(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sourceLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolMenuItemSelectorDictionary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textStyleMenuItemSelectorDictionary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	update(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	updateWithMenuBuilder_forLayers(...args: any[]): any;
  }
}

declare const MSShareableObjectPopUpButton: sketchInternal.MSShareableObjectPopUpButton;

