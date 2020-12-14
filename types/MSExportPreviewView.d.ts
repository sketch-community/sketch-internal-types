// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportPreviewView extends NSView {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"MSExportPreviewViewModel", ivar=_viewModel, attributes=(retain,nonatomic) */
    	viewModel(): MSExportPreviewViewModel;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=v24@0:8@16 */
    	beginDragWithEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	cursorUpdate(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16q24 */
    	draggingSession_sourceOperationMaskForDraggingContext(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	imageDrawRect(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithViewModel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseUp(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	pasteboardPropertyListForType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setViewModel(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setup(): void;
    /* typeEncoding=@16@0:8 */
    	viewModel(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	writableTypesForPasteboard(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16@24 */
    	writingOptionsForType_pasteboard(...args: any[]): any;
  }
}

declare const MSExportPreviewView: sketchInternal.MSExportPreviewView;

