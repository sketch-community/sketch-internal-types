// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextInputEventHandler extends MSEventHandler {
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	absoluteFrameForRect(): CGRect;
    /* typeEncoding=@"NSAttributedString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	attributedStringValue(): cocoascript.NSAttributedString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"MSImmutableTextStyle", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	defaultTextStyle(): MSImmutableTextStyle;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSImmutableTextLayer", ivar=_immutableTextLayer, attributes=(assign,nonatomic,readonly) */
    	immutableTextLayer(): MSImmutableTextLayer;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	stringValue(): cocoascript.NSString;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTextStorage", ivar=_textStorage, attributes=(retain,nonatomic) */
    	textStorage(): cocoascript.NSTextStorage;
    /* typeEncoding=@"MSTextLayerTextView", ivar=_textView, attributes=(retain,nonatomic) */
    	textView(): MSTextLayerTextView;
    /* typeEncoding=@"MSTextWindow", ivar=_textViewWindow, attributes=(retain,nonatomic) */
    	textViewWindow(): MSTextWindow;
    /* typeEncoding=@"NSTimer", ivar=_updateInsertionPointColorTimer, attributes=(retain,nonatomic) */
    	updateInsertionPointColorTimer(): cocoascript.NSTimer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	absoluteFrameForRect(...args: any[]): any;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	addTextView(): void;
    /* typeEncoding=v16@0:8 */
    	adjustForegroundColor(): void;
    /* typeEncoding=v16@0:8 */
    	adjustTextViewFrame(): void;
    /* typeEncoding=@24@0:8@16 */
    	applyTextColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyTextTransform(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	attributedStringValue(...args: any[]): any;
    /* typeEncoding=d24@0:8@16 */
    	baselineAdjustmentForLayoutManager(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	beginEditing(): void;
    /* typeEncoding=c16@0:8 */
    	canDuplicate(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	canvasColorSpaceForTextLayerTextView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	colorMagnifierAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	defaultTextStyle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dispatchTryPutFirstFocusBack(): void;
    /* typeEncoding=v24@0:8@?16 */
    	doTextModification(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	documentColorSpaceForTextLayerTextView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=c16@0:8 */
    	handlesHistoryCoalescing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableTextLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertionPointColor(...args: any[]): any;
    /* typeEncoding=v36@0:8@16@24c32 */
    	layoutManager_didCompleteLayoutForTextContainer_atEnd(...args: any[]): any;
    /* typeEncoding=c72@0:8@16N^{CGRect={CGPoint=dd}{CGSize=dd}}24N^{CGRect={CGPoint=dd}{CGSize=dd}}32N^d40@48{_NSRange=QQ}56 */
    	layoutManager_shouldSetLineFragmentRect_lineFragmentUsedRect_baselineOffset_inTextContainer_forGlyphRange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	magnifyWithEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	makeLowercase(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	makeTextView(): void;
    /* typeEncoding=v16@0:8 */
    	makeTextWindow(): void;
    /* typeEncoding=v24@0:8@16 */
    	makeUppercase(...args: any[]): any;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	newTextLayerImageFromWindowBackingStore(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadFollowingBackgroundChangesToDocument(): void;
    /* typeEncoding=v24@0:8@16 */
    	removeTextTransform(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeTextView(): void;
    /* typeEncoding=v16@0:8 */
    	scheduleUpdateInsertionPointColorTimer(): void;
    /* typeEncoding=v24@0:8@16 */
    	scrollWheel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectAll(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectionTouchBar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextStorage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextViewWindow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpdateInsertionPointColorTimer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldExitOnContentViewResize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stringValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textStorage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textView(...args: any[]): any;
    /* typeEncoding=c32@0:8@16:24 */
    	textView_doCommandBySelector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	textViewDidChangeSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textViewWindow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	tryPutFirstFocusBack(): void;
    /* typeEncoding=@16@0:8 */
    	undoManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updateInsertionPointColorTimer(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	viewDidScroll(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	willStartExporting(): void;
    /* typeEncoding=v24@0:8@16 */
    	windowDidResignKey(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	windowFrameForDrawView(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	zoomValueWillChangeTo(...args: any[]): any;
  }
}

declare const MSTextInputEventHandler: sketchInternal.MSTextInputEventHandler;

