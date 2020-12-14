// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportFormatViewController extends NSViewController {
    /* typeEncoding=d, ivar=_designedFormatPopUpButtonWidth, attributes=(assign,nonatomic) */
    	designedFormatPopUpButtonWidth(): number;
    /* typeEncoding=c, ivar=_drawOldFashioned, attributes=(assign,nonatomic) */
    	drawOldFashioned(): boolean;
    /* typeEncoding=d, ivar=_expandedRemoveWidth, attributes=(assign,nonatomic) */
    	expandedRemoveWidth(): number;
    /* typeEncoding=@"NSArray", ivar=_exportFormats, attributes=(retain,nonatomic) */
    	exportFormats(): cocoascript.NSArray;
    /* typeEncoding=@"NSPopUpButton", ivar=_formatPopup, attributes=(retain,nonatomic) */
    	formatPopup(): cocoascript.NSPopUpButton;
    /* typeEncoding=@"NSView", ivar=_removeButtonContainerView, attributes=(retain,nonatomic) */
    	removeButtonContainerView(): cocoascript.NSView;
    /* typeEncoding=c, ivar=_removeButtonHidden, attributes=(assign,nonatomic,getter=isRemoveButtonHidden) */
    	removeButtonHidden(): boolean;
    /* typeEncoding=@"NSButton", ivar=_removeSizeButton, attributes=(retain,nonatomic) */
    	removeSizeButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSTextFieldWithDropDownMenu", ivar=_scaleField, attributes=(retain,nonatomic) */
    	scaleField(): MSTextFieldWithDropDownMenu;
    /* typeEncoding=@"NSMenu", ivar=_scalePopupMenu, attributes=(retain,nonatomic) */
    	scalePopupMenu(): cocoascript.NSMenu;
    /* typeEncoding=@"NSView", ivar=_sizeView, attributes=(retain,nonatomic) */
    	sizeView(): cocoascript.NSView;
    /* typeEncoding=@"MSExportFormatNamingTextField", ivar=_suffixTextField, attributes=(retain,nonatomic) */
    	suffixTextField(): MSExportFormatNamingTextField;
    /* typeEncoding=v16@0:8 */
    	initialize(): void;
    /* typeEncoding=@28@0:8d16S24 */
    	scaleDisplayStringForValue_suffix(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v56@0:8d16@24q32{CGSize=dd}40 */
    	applyEditedScaleFieldValue_toExportFormat_scaleType_normalSize(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	commitScaleStringEdit_withCompletionBlock(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	designedFormatPopUpButtonWidth(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	drawOldFashioned(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	expandedRemoveWidth(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	exportFormatCanBeScaled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportFormats(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	exportSelection(...args: any[]): any;
    /* typeEncoding=v40@0:8@16q24@?32 */
    	findSizeOfLayer_forScaleType_completionBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstExportFormat(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	formatPopup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	formatPopupAction(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRemoveButtonHidden(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepare(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	removeButtonContainerView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeExportFormat(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	removeSizeButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scaleField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	scaleFieldAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	scaleMenuAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scalePopupMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setDesignedFormatPopUpButtonWidth(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDrawOldFashioned(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setExpandedRemoveWidth(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportFormats(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFormatPopup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRemoveButtonContainerView(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRemoveButtonHidden(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRemoveSizeButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScaleField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScalePopupMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSizeView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSuffixTextField(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	sizeByRemovingSuffixes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sizeView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	suffixTextField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateRemoveButtonLayout(): void;
    /* typeEncoding=v16@0:8 */
    	updateTextFieldProperties(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSExportFormatViewController: sketchInternal.MSExportFormatViewController;

