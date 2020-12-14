// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextLayerEventHandler extends MSTextInputEventHandler {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSNumber", ivar=_firstBaselineOffsetBeforeEditing, attributes=(retain,nonatomic) */
    	firstBaselineOffsetBeforeEditing(): cocoascript.NSNumber;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSTextLayer", ivar=_textLayer, attributes=(retain,nonatomic) */
    	textLayer(): MSTextLayer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	absoluteFrameForRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	adjustForegroundColor(): void;
    /* typeEncoding=@16@0:8 */
    	attributedStringValue(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@16@0:8 */
    	defaultTextStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstBaselineOffset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstBaselineOffsetBeforeEditing(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@16@0:8 */
    	immutableTextLayer(...args: any[]): any;
    /* typeEncoding=v36@0:8@16@24c32 */
    	layoutManager_didCompleteLayoutForTextContainer_atEnd(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadFollowingBackgroundChangesToDocument(): void;
    /* typeEncoding=v24@0:8@16 */
    	setFirstBaselineOffsetBeforeEditing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setListType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupTextLayer(): void;
    /* typeEncoding=@16@0:8 */
    	stringValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	textDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	textViewDidChangeSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateTextViewStyling(): void;
    /* typeEncoding=v24@0:8@16 */
    	viewDidScroll(...args: any[]): any;
  }
}

declare const MSTextLayerEventHandler: sketchInternal.MSTextLayerEventHandler;

