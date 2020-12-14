// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetCollectionViewItem extends NSCollectionViewItem {
    /* typeEncoding=@"NSArray", ivar=_alternativeCollections, attributes=(retain,nonatomic) */
    	alternativeCollections(): cocoascript.NSArray;
    /* typeEncoding=@"<MSAsset>", ivar=_asset, attributes=(retain,nonatomic) */
    	asset(): any;
    /* typeEncoding=c, ivar=_assetHighlighted, attributes=(assign,nonatomic) */
    	assetHighlighted(): boolean;
    /* typeEncoding=@"NSString", ivar=_assetName, attributes=(retain,nonatomic) */
    	assetName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSAssetCollectionViewItemDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_displayMode, attributes=(assign,nonatomic) */
    	displayMode(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=_itemSizeMode, attributes=(assign,nonatomic) */
    	itemSizeMode(): number;
    /* typeEncoding=@"NSLayoutConstraint", ivar=_leadingPreviewConstraint, attributes=(retain,nonatomic) */
    	leadingPreviewConstraint(): cocoascript.NSLayoutConstraint;
    /* typeEncoding=@"NSMenuItem", ivar=_menuItemCopy, attributes=(retain,nonatomic) */
    	menuItemCopy(): cocoascript.NSMenuItem;
    /* typeEncoding=@"NSTextField", ivar=_nameField, attributes=(retain,nonatomic) */
    	nameField(): cocoascript.NSTextField;
    /* typeEncoding=@"NSView", ivar=_previewView, attributes=(retain,nonatomic) */
    	previewView(): cocoascript.NSView;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48d52 */
    	drawAssetViewBackgroundReturningContentPathInBounds_highlighted_scale(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	alternativeCollections(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyLayoutAttributes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	asset(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	assetHighlighted(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	beginNameEditingMode(): void;
    /* typeEncoding=v24@0:8@16 */
    	commitNameEditing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlTextDidEndEditing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	copyToAssetCollection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	createNameField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	defaultAssetName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	delete(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	displayMode(...args: any[]): any;
    /* typeEncoding=v56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	drawAssetView_dirtyRect(...args: any[]): any;
    /* typeEncoding=v56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	drawBackgroundView_dirtyRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	effectiveAssetName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	endEditingMode(): void;
    /* typeEncoding=Q16@0:8 */
    	itemSizeMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	layoutBackgroundView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	leadingPreviewConstraint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemCopy(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	moveToAssetCollection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nameField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForReuse(): void;
    /* typeEncoding=@16@0:8 */
    	previewColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	rename(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAlternativeCollections(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAsset(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setAsset_name(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAssetHighlighted(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAssetName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setDisplayMode(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setItemSizeMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLeadingPreviewConstraint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMenuItemCopy(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNameField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSelected(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setViewsNeedDisplay(): void;
    /* typeEncoding=c16@0:8 */
    	shouldDrawHighlighted(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldStartEditingNameWithEvent(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateUI(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSAssetCollectionViewItem: sketchInternal.MSAssetCollectionViewItem;

