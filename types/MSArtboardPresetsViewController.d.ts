// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArtboardPresetsViewController extends NSViewController {
    /* typeEncoding=@"NSArray", ivar=_arrangedObjects, attributes=(assign,nonatomic,readonly) */
    	arrangedObjects(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_arrangedSections, attributes=(assign,nonatomic,readonly) */
    	arrangedSections(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_categories, attributes=(copy,nonatomic) */
    	categories(): cocoascript.NSArray;
    /* typeEncoding=@"NSArrayController", ivar=_categoriesController, attributes=(retain,nonatomic) */
    	categoriesController(): cocoascript.NSArrayController;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSArtboardPresetsViewControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSArtboardPreset", ivar=_editingPreset, attributes=(retain,nonatomic) */
    	editingPreset(): MSArtboardPreset;
    /* typeEncoding=@"NSArray", ivar=_extraPresets, attributes=(copy,nonatomic) */
    	extraPresets(): cocoascript.NSArray;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=q, ivar=_orientation, attributes=(assign,nonatomic) */
    	orientation(): number;
    /* typeEncoding=@"NSSegmentedControl", ivar=_orientationSegmentedControl, attributes=(retain,nonatomic) */
    	orientationSegmentedControl(): cocoascript.NSSegmentedControl;
    /* typeEncoding=@"MSArtboardPresetStore", ivar=_presetStore, attributes=(retain,nonatomic) */
    	presetStore(): MSArtboardPresetStore;
    /* typeEncoding=@"MSArtboardPresetsCategory", ivar=(null), attributes=(retain,nonatomic) */
    	selectedCategory(): MSArtboardPresetsCategory;
    /* typeEncoding={CGSize=dd}, ivar=_selectedPresetSize, attributes=(assign,nonatomic) */
    	selectedPresetSize(): CGSize;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTableView", ivar=_tableView, attributes=(retain,nonatomic) */
    	tableView(): cocoascript.NSTableView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addUserPreset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	arrangedObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	arrangedSections(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	artboardPresetStoreDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	categories(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	categoriesController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	categoryForPreset(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteRowAction(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	editArtboardPresetViewController_savePreset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	editRowAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	editingPreset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	extraPresets(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=c24@0:8q16 */
    	isFauxSeparatorSectionAtIndex(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	isSectionAtIndex(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	itemIsUserPreset(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfRowsInTableView(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	orientation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	orientationSegmentedControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	popoverWillShow(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	prepareForSegue_sender(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	presetAtIndexPath(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	presetForPreset_landscape(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	presetStore(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	rearrangeObjects(): void;
    /* typeEncoding=v16@0:8 */
    	refresh(): void;
    /* typeEncoding=v16@0:8 */
    	refreshOrientationControl(): void;
    /* typeEncoding=v24@0:8@16 */
    	selectCategory(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectOrientation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedCategory(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	selectedPresetSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCategories(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCategoriesController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEditingPreset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExtraPresets(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setOrientation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOrientationSegmentedControl(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPresetStore(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedCategory(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setSelectedPresetSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTableView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showCreateCustomSizeSheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tableView(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24q32 */
    	tableView_didAddRowView_forRow(...args: any[]): any;
    /* typeEncoding=d32@0:8@16q24 */
    	tableView_heightOfRow(...args: any[]): any;
    /* typeEncoding=c32@0:8@16q24 */
    	tableView_isGroupRow(...args: any[]): any;
    /* typeEncoding=@32@0:8@16q24 */
    	tableView_rowViewForRow(...args: any[]): any;
    /* typeEncoding=c32@0:8@16q24 */
    	tableView_shouldSelectRow(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	tableView_viewForTableColumn_row(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	tableViewSelectionDidChange(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateUserInterfaceItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=@24@0:8q16 */
    	viewForGroupRow(...args: any[]): any;
  }
}

declare const MSArtboardPresetsViewController: sketchInternal.MSArtboardPresetsViewController;

