// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextLayerTextView extends NSTextView {
    /* typeEncoding=@"MSHangingGlyphView", ivar=_hangingGlyphView, attributes=(assign,nonatomic,weak) */
    	hangingGlyphView(): MSHangingGlyphView;
    /* typeEncoding=@"<MSTextLayerTextViewDelegate>", ivar=_textLayerTextViewDelegate, attributes=(assign,nonatomic,weak) */
    	textLayerTextViewDelegate(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	canvasColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	changeColorWithColor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v24@0:8:16 */
    	doCommandBySelector(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentColorSpace(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hangingGlyphView(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	hitTest(...args: any[]): any;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	initWithFrame_textContainer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	makeTouchBar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	paste(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	pasteWithOptions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	pasteWithStyle(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	readSelectionFromPasteboard(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	readablePasteboardTypes(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rectForSelectedRange(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectSimilar(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHangingGlyphView(...args: any[]): any;
    /* typeEncoding=v52@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48 */
    	setNeedsDisplayInRect_avoidAdditionalLayout(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextLayerTextViewDelegate(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldIgnoreAlreadyApplicableColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textLayerTextViewDelegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	writablePasteboardTypes(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	writeSelectionToPasteboard_type(...args: any[]): any;
  }
}

declare const MSTextLayerTextView: sketchInternal.MSTextLayerTextView;

