// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorInspectorSectionPattern extends MSColorInspectorSection {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canRefreshData(): boolean;
    /* typeEncoding=@"NSButton", ivar=_choosePatternButton, attributes=(retain,nonatomic) */
    	choosePatternButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSGenericButtonController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dataImagesButton(): MSGenericButtonController;
    /* typeEncoding=@"MSDataSupplierManager", ivar=(null), attributes=(assign,readonly) */
    	dataSupplierManager(): MSDataSupplierManager;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_frequentImages, attributes=(retain,nonatomic) */
    	frequentImages(): cocoascript.NSArray;
    /* typeEncoding=@"MSGenericButtonController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	frequentImagesButton(): MSGenericButtonController;
    /* typeEncoding=@"MSFrequentImagesController", ivar=_frequentImagesController, attributes=(retain,nonatomic) */
    	frequentImagesController(): MSFrequentImagesController;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSPatternImageCell", ivar=_imageCell, attributes=(retain,nonatomic) */
    	imageCell(): MSPatternImageCell;
    /* typeEncoding=@"MSColorInspectorImageDataController", ivar=_imageDataController, attributes=(retain,nonatomic) */
    	imageDataController(): MSColorInspectorImageDataController;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	layersWithData(): cocoascript.NSArray;
    /* typeEncoding=@"MSColorHeaderInspectorItem", ivar=_mainViewHeader, attributes=(retain,nonatomic) */
    	mainViewHeader(): MSColorHeaderInspectorItem;
    /* typeEncoding=@"MSMouseTracker", ivar=_mouseTracker, attributes=(retain,nonatomic) */
    	mouseTracker(): MSMouseTracker;
    /* typeEncoding=@"NSViewController", ivar=_noPatternController, attributes=(retain,nonatomic) */
    	noPatternController(): cocoascript.NSViewController;
    /* typeEncoding=@"NSPopUpButton", ivar=_patternTileButton, attributes=(retain,nonatomic) */
    	patternTileButton(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSImageView", ivar=_patternWell, attributes=(retain,nonatomic) */
    	patternWell(): cocoascript.NSImageView;
    /* typeEncoding=@"MSGenericButtonController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	refreshDataButton(): MSGenericButtonController;
    /* typeEncoding=@"MSTileScaleViewController", ivar=_scaleController, attributes=(retain,nonatomic) */
    	scaleController(): MSTileScaleViewController;
    /* typeEncoding=@"NSArrayController", ivar=_stylesController, attributes=(retain,nonatomic) */
    	stylesController(): cocoascript.NSArrayController;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@16@0:8 */
    	presetPickerVisibilityDefaultsKey(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c24@0:8@16 */
    	allowAlternativeDisplayModesForAssetPickerController(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	assetPickerController_shouldChangeToDisplayMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetPickerDataSources(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	assetPickerHeaderAccessoryViews(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	assetType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canApplyData(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canRefreshData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	choosePatternButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	choosePatternImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	controlDidSelectAsset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	createPresetFromCurrentSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataImagesButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataSupplierManager(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	doLayersHaveSameDataSupplier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	enableSectionButtonAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	fillModeAction(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	fillType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	frequentColorsControllerMenuDidClose(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	frequentImages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	frequentImagesButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	frequentImagesController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	frequentImagesController_didChooseImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageCell(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageDataController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	imageDataController_didChooseDataSupplier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	imageDataControllerDidClearData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	imageDataControllerDidRefreshData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	imageDataControllerMenuDidClose(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isTiled(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	item_wantsSectionToCollapse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layersWithData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mainViewHeader(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mouseTracker(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	noPatternController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	patternTileButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	patternWell(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	patternWellAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	refreshDataButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scaleController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scrollableViews(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChoosePatternButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFrequentImages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFrequentImagesController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageCell(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageDataController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMainViewHeader(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMouseTracker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNoPatternController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPatternTileButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPatternWell(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScaleController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStylesController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showFrequentImages(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	styleFillForLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stylesController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateChooseImageButton(): void;
    /* typeEncoding=v16@0:8 */
    	updatePatternWellImage(): void;
    /* typeEncoding=@16@0:8 */
    	usableSupplierIdentifiers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	validate(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSColorInspectorSectionPattern: sketchInternal.MSColorInspectorSectionPattern;

