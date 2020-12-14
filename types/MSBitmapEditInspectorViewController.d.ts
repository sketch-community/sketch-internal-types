// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBitmapEditInspectorViewController extends NSViewController {
    /* typeEncoding=@"NSButton", ivar=_cropButton, attributes=(retain,nonatomic) */
    	cropButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSTextField", ivar=_cropLabel, attributes=(retain,nonatomic) */
    	cropLabel(): cocoascript.NSTextField;
    /* typeEncoding=q, ivar=_currentMode, attributes=(assign,nonatomic) */
    	currentMode(): number;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSBitmapEditEventHandler", ivar=_eventHandler, attributes=(assign,nonatomic) */
    	eventHandler(): MSBitmapEditEventHandler;
    /* typeEncoding=@"NSButton", ivar=_fillButton, attributes=(retain,nonatomic) */
    	fillButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSTextField", ivar=_fillLabel, attributes=(retain,nonatomic) */
    	fillLabel(): cocoascript.NSTextField;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasSelection(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_heightField, attributes=(retain,nonatomic) */
    	heightField(): MSInlineUpDownTextField;
    /* typeEncoding=@"NSButton", ivar=_invertButton, attributes=(retain,nonatomic) */
    	invertButton(): cocoascript.NSButton;
    /* typeEncoding=@"NSTextField", ivar=_invertLabel, attributes=(retain,nonatomic) */
    	invertLabel(): cocoascript.NSTextField;
    /* typeEncoding=@"NSButton", ivar=_magicWandButton, attributes=(retain,nonatomic) */
    	magicWandButton(): cocoascript.NSButton;
    /* typeEncoding=@"BCPopover", ivar=_popover, attributes=(retain,nonatomic) */
    	popover(): BCPopover;
    /* typeEncoding=@"NSColor", ivar=_previouslySelectedColor, attributes=(retain,nonatomic) */
    	previouslySelectedColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSButton", ivar=_rectSelectionButton, attributes=(retain,nonatomic) */
    	rectSelectionButton(): cocoascript.NSButton;
    /* typeEncoding={CGSize=dd}, ivar=_selectionSize, attributes=(assign,nonatomic) */
    	selectionSize(): CGSize;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSInlineUpDownTextField", ivar=_widthField, attributes=(retain,nonatomic) */
    	widthField(): MSInlineUpDownTextField;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	actionButtons(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	colorInspector_didChangeToColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorMagnifierAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorizeAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cropAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cropButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cropLabel(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	currentMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dismissViewController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	eventHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fillLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	finishEditing(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	heightField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	invertAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	invertButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	invertLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	magicWandAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	magicWandButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	popover(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForDisplay(): void;
    /* typeEncoding=@16@0:8 */
    	previouslySelectedColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	rectSelectionAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rectSelectionButton(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refresh(): void;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectionDidChangeTo(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	selectionSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCropButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCropLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setCurrentMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEventHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFillLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHeightField(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInvertButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInvertLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMagicWandButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPopover(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviouslySelectedColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRectSelectionButton(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setSelectionSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWidthField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=v16@0:8 */
    	viewWillDisappear(): void;
    /* typeEncoding=@16@0:8 */
    	views(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	widthField(...args: any[]): any;
  }
}

declare const MSBitmapEditInspectorViewController: sketchInternal.MSBitmapEditInspectorViewController;

