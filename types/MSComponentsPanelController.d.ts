// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSComponentsPanelController extends NSViewController {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canDeleteSelectedGroupsAndComponents(): boolean;
    /* typeEncoding=@"MSComponentGridController", ivar=componentGridController, attributes=(retain,nonatomic) */
    	componentGridController(): MSComponentGridController;
    /* typeEncoding=@"_TtC6Sketch23ComponentListController", ivar=componentListController, attributes=(retain,nonatomic) */
    	componentListController(): _TtC6Sketch23ComponentListController;
    /* typeEncoding=@"<MSComponentsPanelDelegate>", ivar=delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"MSDocument", ivar=document, attributes=(assign,nonatomic,weak) */
    	document(): MSDocument;
    /* typeEncoding=v36@0:8@16c24@?28 */
    	confirmSymbolMasterDeletionOnDocumentWindow_inPlural_completion(...args: any[]): any;
    /* typeEncoding=@20@0:8c16 */
    	instantiateWithComponentsMode(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	applyAppearance(): void;
    /* typeEncoding=c16@0:8 */
    	canDeleteSelectedGroupsAndComponents(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	collapseComponentListGroups(): void;
    /* typeEncoding=@16@0:8 */
    	componentGridController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	componentListController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	ensureSelectionIncludesComponentLibraryForAssetLibrary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	enterSelectedGroup(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	makeFilteringSearchFieldKey(): void;
    /* typeEncoding=v16@0:8 */
    	navigateToNextItem(): void;
    /* typeEncoding=v16@0:8 */
    	navigateToPreviousItem(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	prepareForSegue_sender(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refocusLibraryOutlineViewIfNeeded(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNeededForTreeDiff(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24c28c32 */
    	selectComponentsByReference_collapsingOtherTopLevelAncestors_allowChangingKind_allowChangingLibrary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponentGridController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponentListController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	showComponentsOfKind(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillAppear(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
  }
}

declare const MSComponentsPanelController: sketchInternal.MSComponentsPanelController;

