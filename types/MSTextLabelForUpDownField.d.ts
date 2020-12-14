// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextLabelForUpDownField extends NSTextField {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSPanGestureRecognizer", ivar=_dragRecognizer, attributes=(retain,nonatomic) */
    	dragRecognizer(): cocoascript.NSPanGestureRecognizer;
    /* typeEncoding=@, ivar=_flagsMonitor, attributes=(retain,nonatomic) */
    	flagsMonitor(): any;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSMouseTracker", ivar=_mouseTracker, attributes=(retain,nonatomic) */
    	mouseTracker(): MSMouseTracker;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSArray", ivar=_textFields, attributes=(copy,nonatomic) */
    	textFields(): cocoascript.NSArray;
    /* typeEncoding=@"NSTextField<MSUpDownProtocol>", ivar=_upDownTextField, attributes=(assign,nonatomic,weak) */
    	upDownTextField(): any;
    /* typeEncoding=@24@0:8Q16 */
    	resizeCursorForFlags(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	canScrub(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	clickShouldDismissPopover(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cursorUpdate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v24@0:8@16 */
    	didDrag(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragRecognizer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	flagsMonitor(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	gestureRecognizer_shouldAttemptToRecognizeWithEvent(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mouseTracker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDragRecognizer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFlagsMonitor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMouseTracker(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldTrackFlags(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextFields(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpDownTextField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupTextLabelForUpDownField(): void;
    /* typeEncoding=@16@0:8 */
    	textField(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textFields(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackMouse(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	upDownTextField(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateCursor(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidMoveToWindow(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	visibleRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	windowStatusChanged(...args: any[]): any;
  }
}

declare const MSTextLabelForUpDownField: sketchInternal.MSTextLabelForUpDownField;

