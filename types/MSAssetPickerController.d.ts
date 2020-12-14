// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetPickerController extends NSViewController {
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	assetDisplayModeButton(): cocoascript.NSView;
    /* typeEncoding=@"MSGenericButtonController", ivar=_assetDisplayModeButtonController, attributes=(retain,nonatomic) */
    	assetDisplayModeButtonController(): MSGenericButtonController;
    /* typeEncoding=@"NSCollectionView", ivar=_collectionView, attributes=(retain,nonatomic) */
    	collectionView(): cocoascript.NSCollectionView;
    /* typeEncoding=@"<MSAsset>", ivar=_currentAsset, attributes=(retain,nonatomic) */
    	currentAsset(): any;
    /* typeEncoding=@"MSAssetCollectionViewDataSource", ivar=_currentDataSource, attributes=(retain,nonatomic) */
    	currentDataSource(): MSAssetCollectionViewDataSource;
    /* typeEncoding=@"NSIndexPath", ivar=_currentDropTargetPath, attributes=(retain,nonatomic) */
    	currentDropTargetPath(): cocoascript.NSIndexPath;
    /* typeEncoding=@"NSArray", ivar=_dataSources, attributes=(copy,nonatomic) */
    	dataSources(): cocoascript.NSArray;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSAssetPickerControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSCollectionViewItem", ivar=_draggedItem, attributes=(retain,nonatomic) */
    	draggedItem(): cocoascript.NSCollectionViewItem;
    /* typeEncoding=@"NSIndexPath", ivar=_draggingSourceIndexPath, attributes=(retain,nonatomic) */
    	draggingSourceIndexPath(): cocoascript.NSIndexPath;
    /* typeEncoding=Q, ivar=_effectiveDisplayMode, attributes=(assign,nonatomic) */
    	effectiveDisplayMode(): number;
    /* typeEncoding=@"MSAssetCollectionLayout", ivar=_flowLayout, attributes=(retain,nonatomic) */
    	flowLayout(): MSAssetCollectionLayout;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasContent(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSIndexPath", ivar=_itemToEdit, attributes=(retain,nonatomic) */
    	itemToEdit(): cocoascript.NSIndexPath;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sectionHeaderLabelView(): cocoascript.NSView;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSGenericButtonController", ivar=_switchCollectionButtonController, attributes=(retain,nonatomic) */
    	switchCollectionButtonController(): MSGenericButtonController;
    /* typeEncoding=#24@0:8Q16 */
    	itemClassForAssetType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addAsset(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustHeight(): void;
    /* typeEncoding=@16@0:8 */
    	assetDisplayModeButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetDisplayModeButtonController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	assetItem_copyToCollection(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	assetItem_moveToCollection(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	assetItem_wantsRenameTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	assetItemDidEndRenaming(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	assetItemIsEditable(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	assetItemWantsStartRenaming(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	collectionView(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	collectionView_canDragItemsAtIndexPaths_withEvent(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	collectionView_didDoubleClickWithEvent_item(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collectionView_didSelectItemsAtIndexPaths(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24{CGPoint=dd}32Q48 */
    	collectionView_draggingSession_endedAtPoint_dragOperation(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24{CGPoint=dd}32@48 */
    	collectionView_draggingSession_willBeginAtPoint_forItemsAtIndexPaths(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collectionView_pasteboardWriterForItemAtIndexPath(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collectionView_shouldSelectItemsAtIndexPaths(...args: any[]): any;
    /* typeEncoding=Q48@0:8@16@24^@32^q40 */
    	collectionView_validateDrop_proposedIndexPath_dropOperation(...args: any[]): any;
    /* typeEncoding=@52@0:8@16@24@32@40c48 */
    	collectionViewSource_vendItemForIndexPath_asset_name_highlighted(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	collectionViewSource_vendSupplementaryViewOfKind_forIndexPath(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	commitNameEditingIfNecessary(): void;
    /* typeEncoding=v24@0:8@16 */
    	connectCollectionViewWithDataSource(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentAsset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentDataSource(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentDropTargetPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSources(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteAssetItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	disconnectCollectionViewFromDataSource(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	doAddAsset_withName_toDataSource_forCollectionView(...args: any[]): any;
    /* typeEncoding=v44@0:8@16@24@32c40 */
    	doDeleteAssetAtIndexPath_fromDataSource_collectionView_animated(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	draggedItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	draggingSourceIndexPath(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	effectiveDisplayMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flowLayout(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasContent(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithNibName_bundle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	itemToEdit(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareUI(): void;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadDataAndUpdateSize(): void;
    /* typeEncoding=v16@0:8 */
    	requestUpdatedIndexesForCurrentDataSource(): void;
    /* typeEncoding=v24@0:8@16 */
    	scrollPathToVisible(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	scrollPathToVisibleAndStartEditing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sectionHeaderLabelView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAssetDisplayModeButtonController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCollectionView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentAsset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentDataSource(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentDropTargetPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataSources(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDraggedItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDraggingSourceIndexPath(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setEffectiveDisplayMode(...args: any[]): any;
    /* typeEncoding=v36@0:8Q16c24@?28 */
    	setEffectiveDisplayMode_animated_completionHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlowLayout(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setItemToEdit(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSwitchCollectionButtonController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	switchAssetCollection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	switchCollectionButtonController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	switchDisplayMode(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	switchToDataSourceAtIndex(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateAssetDisplayModeButton(): void;
    /* typeEncoding=v16@0:8 */
    	updateLayoutParameters(): void;
    /* typeEncoding=v16@0:8 */
    	updateSwitchButton(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidAppear(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillLayout(): void;
  }
}

declare const MSAssetPickerController: sketchInternal.MSAssetPickerController;

