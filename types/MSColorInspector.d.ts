// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorInspector extends NSViewController {
    /* typeEncoding=@"_TtC17SketchControllers26MSModelObjectChangeTracker", ivar=_changeTracker, attributes=(retain,nonatomic) */
    	changeTracker(): _TtC17SketchControllers26MSModelObjectChangeTracker;
    /* typeEncoding=@"_TtC6Sketch27MSColorModePickerController", ivar=_colorModePickerController, attributes=(retain,nonatomic) */
    	colorModePickerController(): _TtC6Sketch27MSColorModePickerController;
    /* typeEncoding=@"MSColorPickerViewController", ivar=_colorPickerController, attributes=(retain,nonatomic) */
    	colorPickerController(): MSColorPickerViewController;
    /* typeEncoding=@"MSColorInspectorSectionColor", ivar=_colorSection, attributes=(retain,nonatomic) */
    	colorSection(): MSColorInspectorSectionColor;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSColorInspectorDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_disableCommandKeyDismissal, attributes=(assign,nonatomic) */
    	disableCommandKeyDismissal(): boolean;
    /* typeEncoding=c, ivar=_displayingDiverseStyles, attributes=(assign,nonatomic) */
    	displayingDiverseStyles(): boolean;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSDocument;
    /* typeEncoding=@"MSEventHandlerManager", ivar=_eventHandlerManager, attributes=(retain,nonatomic) */
    	eventHandlerManager(): MSEventHandlerManager;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	fillType(): number;
    /* typeEncoding=@"MSPersistentAssetCollection", ivar=_globalAssets, attributes=(retain,nonatomic) */
    	globalAssets(): MSPersistentAssetCollection;
    /* typeEncoding=@"MSColorInspectorSectionGradient", ivar=_gradientSection, attributes=(retain,nonatomic) */
    	gradientSection(): MSColorInspectorSectionGradient;
    /* typeEncoding=q, ivar=_gradientType, attributes=(assign,nonatomic) */
    	gradientType(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_isStacking, attributes=(assign,nonatomic) */
    	isStacking(): boolean;
    /* typeEncoding=@"MSLibraryAssetCollectionsController", ivar=_libraryAssetsController, attributes=(retain,nonatomic) */
    	libraryAssetsController(): MSLibraryAssetCollectionsController;
    /* typeEncoding=@"MSColorInspectorSectionPattern", ivar=_patternSection, attributes=(retain,nonatomic) */
    	patternSection(): MSColorInspectorSectionPattern;
    /* typeEncoding=@"MSStackView", ivar=_stackView, attributes=(retain,nonatomic) */
    	stackView(): MSStackView;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic) */
    	styleParts(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTextField", ivar=_textFieldToContinueEditing, attributes=(assign,nonatomic,weak) */
    	textFieldToContinueEditing(): cocoascript.NSTextField;
    /* typeEncoding=@96@0:8@16@24@32@40{CGRect={CGPoint=dd}{CGSize=dd}}48@80@?88 */
    	static presentColorInspectorPopoverForViewController_delegate_document_globalAssets_relativeToRect_ofView_setupHandler(...args: any[]): any;
    /* typeEncoding=@88@0:8@16@24@32{CGRect={CGPoint=dd}{CGSize=dd}}40@72@?80 */
    	static presentColorInspectorPopoverForViewController_document_globalAssets_relativeToRect_ofView_setupHandler(...args: any[]): any;
    /* typeEncoding=@88@0:8@16@24@32{CGRect={CGPoint=dd}{CGSize=dd}}40@72@?80 */
    	static presentColorInspectorPopoverWithDelegate_document_globalAssets_relativeToRect_ofView_setupHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	acceptsFirstResponder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustFirstResponder(): void;
    /* typeEncoding=v24@0:8@16 */
    	adjustInspectorToColorPopoverIfNeeded(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cancelOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	changeTracker(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	close(): void;
    /* typeEncoding=v24@0:8@16 */
    	colorChangedTo(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorDidChangeTo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorForCurrentSection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorMagnifierAction(...args: any[]): any;
    /* typeEncoding=v40@0:8@16Q24q32 */
    	colorModeController_didChangeFillType_gradientType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorModePickerController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorPickerController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	colorPickerController_colorDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorSection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentSection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	customTouchBarItemIdentifiers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	didAddAsset(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	didRemoveAssetOfType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	disableCommandKeyDismissal(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dismissIfCommandKeyDown(): void;
    /* typeEncoding=c16@0:8 */
    	displayingDiverseStyles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentAssets(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentRedoAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentUndoAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	eventHandlerManager(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	fillType(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	filteredStyleParts(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	findFrequentColors(): void;
    /* typeEncoding=v16@0:8 */
    	findFrequentImages(): void;
    /* typeEncoding=v16@0:8 */
    	findFrequentObjects(): void;
    /* typeEncoding=@16@0:8 */
    	globalAssets(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gradientSection(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	gradientType(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	initWithSender_document_handlerManager_globalAssets(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	inspectorSectionDidUpdate(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isStacking(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryAssetsController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeTouchBar(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	minimumPopoverContentViewHeight(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16q24 */
    	modeDidChangeToFillType_gradientType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	patternSection(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	popoverShouldTrackSuperviewOfAttachedToView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	popoverWillClose(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	popoverWillReturnUndoManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	popoverWillShow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	popoverWindowDidMove(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	popoverWindowSizeDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForDisplay(): void;
    /* typeEncoding=c16@0:8 */
    	previewButtonShouldShowColorVariablesButton(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	redo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reflectEffectiveStyleParts(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshTabbingCycle(): void;
    /* typeEncoding=v16@0:8 */
    	reloadTouchBars(): void;
    /* typeEncoding=v24@0:8@16 */
    	reloadTouchBarsAfterSelectionChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	restoreWithState_ms(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	revertToDefaultFirstResponder(): void;
    /* typeEncoding=v24@0:8@16 */
    	setChangeTracker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColor(...args: any[]): any;
    /* typeEncoding=v32@0:8Q16q24 */
    	setColorMode_gradientStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorModePickerController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorPickerController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorSection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorWithoutNotifying(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDisableCommandKeyDismissal(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDisplayingDiverseStyles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEventHandlerManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGlobalAssets(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGradientSection(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setGradientType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInitialColor(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsStacking(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryAssetsController(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setMaximumAvailableHeight(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setModePickerInitialMode(): void;
    /* typeEncoding=v24@0:8@16 */
    	setPatternSection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStackView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStyleParts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextFieldToContinueEditing(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	stack(): void;
    /* typeEncoding=@16@0:8 */
    	stackView(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	stylePartIsGradient(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	stylePartPreviewButtonPreviewColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	styleParts(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	stylesHaveMixedColors(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	subviewsChangedInColorPickerController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textFieldToContinueEditing(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	touchBar_makeItemForIdentifier(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	touchBarColorAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	undo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateModePickerForCurrentStyles(): void;
    /* typeEncoding=v16@0:8 */
    	validateEnableButtons(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=@16@0:8 */
    	viewRestorationState_ms(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
  }
}

declare const MSColorInspector: sketchInternal.MSColorInspector;

