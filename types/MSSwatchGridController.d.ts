// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSwatchGridController extends NSViewController {
    /* typeEncoding=@"NSCollectionView", ivar=collectionView, attributes=(retain,nonatomic) */
    	collectionView(): cocoascript.NSCollectionView;
    /* typeEncoding=@"<MSSwatchGridControllerDelegate>", ivar=delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"MSInspectorButton", ivar=displayModeButton, attributes=(retain,nonatomic) */
    	displayModeButton(): MSInspectorButton;
    /* typeEncoding=Q, ivar=effectiveDisplayMode, attributes=(assign,nonatomic) */
    	effectiveDisplayMode(): number;
    /* typeEncoding=@"NSView", ivar=emptyView, attributes=(retain,nonatomic) */
    	emptyView(): cocoascript.NSView;
    /* typeEncoding=@"MSInspectorPopUpButton", ivar=librariesButton, attributes=(assign,nonatomic,weak) */
    	librariesButton(): MSInspectorPopUpButton;
    /* typeEncoding=@"MSColor", ivar=selectedSwatchColor, attributes=(assign,nonatomic,weak) */
    	selectedSwatchColor(): MSColor;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	changeComponentsLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	collectionView(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collectionView_didSelectItemsAtIndexPaths(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collectionView_itemForRepresentedObjectAtIndexPath(...args: any[]): any;
    /* typeEncoding={CGSize=dd}40@0:8@16@24q32 */
    	collectionView_layout_referenceSizeForHeaderInSection(...args: any[]): any;
    /* typeEncoding=q32@0:8@16q24 */
    	collectionView_numberOfItemsInSection(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	collectionView_viewForSupplementaryElementOfKind_atIndexPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	displayModeButton(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	effectiveDisplayMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	emptyView(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocument(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	librariesButton(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	numberOfSectionsInCollectionView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	onDoubleClick(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadLibraries(): void;
    /* typeEncoding=@16@0:8 */
    	selectedSwatchColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCollectionView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDisplayModeButton(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setEffectiveDisplayMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEmptyView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibrariesButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedSwatchColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	switchDisplayMode(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillLayout(): void;
  }
}

declare const MSSwatchGridController: sketchInternal.MSSwatchGridController;

