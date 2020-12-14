// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSReplaceColorSheetController extends CHSheetController {
    /* typeEncoding=@"NSButton", ivar=_cancelButton, attributes=(assign,nonatomic,weak) */
    	cancelButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSMenu", ivar=_frequentColorsMenu, attributes=(retain,nonatomic) */
    	frequentColorsMenu(): cocoascript.NSMenu;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSButton", ivar=_ignoreAlphaWhenMatchingOriginalColorButton, attributes=(assign,nonatomic,weak) */
    	ignoreAlphaWhenMatchingOriginalColorButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSButton", ivar=_keepAlphaOfOriginalColorButton, attributes=(assign,nonatomic,weak) */
    	keepAlphaOfOriginalColorButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSStylePartPreviewButton", ivar=_originalColorButton, attributes=(assign,nonatomic,weak) */
    	originalColorButton(): MSStylePartPreviewButton;
    /* typeEncoding=@"NSButton", ivar=_replaceButton, attributes=(assign,nonatomic,weak) */
    	replaceButton(): cocoascript.NSButton;
    /* typeEncoding=@"MSColorWell", ivar=_replacementColorButton, attributes=(assign,nonatomic,weak) */
    	replacementColorButton(): MSColorWell;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	cancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	commitOriginalColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	confirm(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	disableUI(): void;
    /* typeEncoding=@24@0:8@16 */
    	documentColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	frequentColorsMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	ignoreAlphaWhenMatchingOriginalColorButton(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initialColorPickerColorForColorWell(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	keepAlphaOfOriginalColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pickOriginalColor(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	previewButtonShouldShowColorVariablesButton(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshOriginalColorButtonFromSelection(): void;
    /* typeEncoding=@16@0:8 */
    	replaceButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	replacementColorAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	replacementColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCancelButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFrequentColorsMenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIgnoreAlphaWhenMatchingOriginalColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setKeepAlphaOfOriginalColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setReplaceButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setReplacementColorButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showColorVariablesPopoverMenu(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	swatchReferenceForColor_inDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	toggleIgnoreAlpha(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateFrequentColorsMenu(): void;
    /* typeEncoding=v16@0:8 */
    	validateIgnoreAlphaWhenMatchingOriginalColorButton(): void;
    /* typeEncoding=v16@0:8 */
    	validateKeepAlphaOfOriginalColorButton(): void;
    /* typeEncoding=v16@0:8 */
    	validateOriginalColorButton(): void;
    /* typeEncoding=v16@0:8 */
    	validateReplaceButton(): void;
    /* typeEncoding=v16@0:8 */
    	validateReplacementColorButton(): void;
    /* typeEncoding=v16@0:8 */
    	validateUI(): void;
    /* typeEncoding=v16@0:8 */
    	windowDidLoad(): void;
  }
}

declare const MSReplaceColorSheetController: sketchInternal.MSReplaceColorSheetController;

