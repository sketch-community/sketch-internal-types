// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPreferencesController extends NSWindowController {
    /* typeEncoding=@"MSPreferencePane", ivar=_currentPreferencePane, attributes=(retain,nonatomic) */
    	currentPreferencePane(): MSPreferencePane;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSDictionary", ivar=_preferencePaneClasses, attributes=(copy,nonatomic) */
    	preferencePaneClasses(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSCache", ivar=_preferencePanes, attributes=(retain,nonatomic) */
    	preferencePanes(): cocoascript.NSCache;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic) */
    	selectedTabIndex(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSToolbar", ivar=_toolbar, attributes=(assign,nonatomic,weak) */
    	toolbar(): cocoascript.NSToolbar;
    /* typeEncoding=@"NSArray", ivar=_toolbarItemIdentifiers, attributes=(copy,nonatomic) */
    	toolbarItemIdentifiers(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	hideWindowIfNeeded(): void;
    /* typeEncoding=@16@0:8 */
    	sharedController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	adjustColorsAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=@16@0:8 */
    	currentPreferencePane(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dismissAnyAlertSheet(): void;
    /* typeEncoding=@24@0:8@16 */
    	existingPaneWithIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preferencePaneClasses(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preferencePanes(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	selectedTabIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentPreferencePane(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreferencePaneClasses(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreferencePanes(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setSelectedTabIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setToolbar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setToolbarItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	switchPanes(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	switchToPaneWithIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbar(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	toolbarAllowedItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	toolbarDefaultItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarItemIdentifiers(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	toolbarSelectableItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateWindowFrame(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateToolbarItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowWillClose(...args: any[]): any;
  }
}

declare const MSPreferencesController: sketchInternal.MSPreferencesController;

