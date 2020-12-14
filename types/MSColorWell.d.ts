// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorWell extends MSStylePartPreviewButton {
    /* typeEncoding=c, ivar=_canDisplayPopover, attributes=(assign,nonatomic) */
    	canDisplayPopover(): boolean;
    /* typeEncoding=:, ivar=_colorChangedAction, attributes=(assign,nonatomic) */
    	colorChangedAction(): any;
    /* typeEncoding=@, ivar=_colorChangedTarget, attributes=(assign,nonatomic,weak) */
    	colorChangedTarget(): any;
    /* typeEncoding=@"MSNativeColorPanelPresenter", ivar=_colorPanelPresenter, attributes=(retain,nonatomic) */
    	colorPanelPresenter(): MSNativeColorPanelPresenter;
    /* typeEncoding=@"BCPopover", ivar=_colorPopover, attributes=(retain,nonatomic) */
    	colorPopover(): BCPopover;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSColorWellDelegate>", ivar=(null), attributes=(assign,dynamic,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,weak) */
    	document(): MSDocument;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSColor", ivar=_initialColor, attributes=(retain,nonatomic) */
    	initialColor(): cocoascript.NSColor;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=c16@0:8 */
    	canDisplayPopover(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	closeNativeColorPanel(): void;
    /* typeEncoding=:16@0:8 */
    	colorChangedAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorChangedTarget(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	colorInspector_didChangeToColor(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	colorInspectorShouldAdjustInspectorToPopover(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorPanelPresenter(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	colorPanelPresenter_didChangeColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorPopover(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	companionPopoverForColorPanelPresenter(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dismissColorPicker(): void;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initialColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	prepareWithDocument_initialColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	presentColorPicker(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	presentColorPopover(): void;
    /* typeEncoding=v20@0:8c16 */
    	setCanDisplayPopover(...args: any[]): any;
    /* typeEncoding=v24@0:8:16 */
    	setColorChangedAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorChangedTarget(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorPanelPresenter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColorPopover(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInitialColor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	showNativeColorPanel(): void;
    /* typeEncoding=v24@0:8@16 */
    	windowDidResignKey(...args: any[]): any;
  }
}

declare const MSColorWell: sketchInternal.MSColorWell;

