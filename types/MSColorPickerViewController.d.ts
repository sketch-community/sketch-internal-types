// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorPickerViewController extends NSViewController {
    /* typeEncoding=@"MSColor", ivar=(null), attributes=(retain,nonatomic) */
    	color(): MSColor;
    /* typeEncoding=q, ivar=_colorModel, attributes=(assign,nonatomic) */
    	colorModel(): number;
    /* typeEncoding=@"BCHSBColorPicker", ivar=_colorPicker, attributes=(retain,nonatomic) */
    	colorPicker(): BCHSBColorPicker;
    /* typeEncoding=@"NSView", ivar=_componentsContainerView, attributes=(retain,nonatomic) */
    	componentsContainerView(): cocoascript.NSView;
    /* typeEncoding=@"MSColorComponentsController", ivar=_componentsController, attributes=(retain,nonatomic) */
    	componentsController(): MSColorComponentsController;
    /* typeEncoding=c, ivar=_connectedToColorPanel, attributes=(assign,nonatomic) */
    	connectedToColorPanel(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSColorPickerViewControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstKeyView(): cocoascript.NSView;
    /* typeEncoding=@"MSFlexibleColor", ivar=_flexibleColor, attributes=(retain,nonatomic) */
    	flexibleColor(): MSFlexibleColor;
    /* typeEncoding=@"MSGenericButtonController", ivar=_frequentColorsButton, attributes=(retain,nonatomic) */
    	frequentColorsButton(): MSGenericButtonController;
    /* typeEncoding=@"MSFrequentColorsController", ivar=_frequentColorsController, attributes=(retain,nonatomic) */
    	frequentColorsController(): MSFrequentColorsController;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	lastKeyView(): cocoascript.NSView;
    /* typeEncoding=c, ivar=_multipleValues, attributes=(assign,nonatomic) */
    	multipleValues(): boolean;
    /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	preferredFirstResponder(): cocoascript.NSView;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	color(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorComponentsControllerColorDidChange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorComponentsControllerModelDidChange(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	colorModel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorPicker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorPickerAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	componentsContainerView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	componentsController(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	connectToColorPanel(): void;
    /* typeEncoding=c16@0:8 */
    	connectedToColorPanel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	disconnectFromColorPanel(): void;
    /* typeEncoding=@24@0:8@16 */
    	documentColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstKeyView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flexibleColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	frequentColorsButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	frequentColorsController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	frequentColorsController_didChooseColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	frequentColorsControllerMenuDidClose(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDelegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastKeyView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	multipleValues(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preferredFirstResponder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	previewColorSpaceForClient(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sectionHeaderAccessoryViewControllers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColor(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	setColor_multipleValues(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setColorModel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorPicker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponentsContainerView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setComponentsController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setConnectedToColorPanel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlexibleColor(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	setFlexibleColor_multipleValues(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFrequentColors(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFrequentColorsButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFrequentColorsController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setMultipleValues(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	showFrequentColors(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	systemColorPanelDidChangeColor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateChildControllers(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
  }
}

declare const MSColorPickerViewController: sketchInternal.MSColorPickerViewController;

