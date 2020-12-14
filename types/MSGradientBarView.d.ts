// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSGradientBarView extends BCColorPickerSliderView {
    /* typeEncoding=@"<MSGradientBarViewDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"MSGradient", ivar=_gradient, attributes=(retain,nonatomic) */
    	gradient(): MSGradient;
    /* typeEncoding=Q, ivar=_selectedStopIndex, attributes=(assign,nonatomic) */
    	selectedStopIndex(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	acceptsFirstResponder(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	activeBounds(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=c16@0:8 */
    	becomeFirstResponder(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canBeKeyView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canBecomeKeyView(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canDoAdvancedGradientStopModifications(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	centerStopBetween(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	contentBounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteBackward(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteForward(...args: any[]): any;
    /* typeEncoding=v80@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16{CGRect={CGPoint=dd}{CGSize=dd}}48 */
    	drawBackgroundInRect_dirtyRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	drawForeground(): void;
    /* typeEncoding=v24@0:8d16 */
    	drawHighlightedSelectionMarkerAtPosition(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	drawSelectionMarkerAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gradient(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertBacktab(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertTab(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertText(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseDragged(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	moveDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	moveLeft(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	moveLeftAndModifySelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	moveRight(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	moveRightAndModifySelection(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	moveSelectedStopBy(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	moveUp(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	nextStop(...args: any[]): any;
    /* typeEncoding=d24@0:8Q16 */
    	positionForIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previousStop(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8Q16 */
    	rectForMarkerAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedStop(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	selectedStopIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGradient(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setSelectedStopIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setSelectedStopToPercentage(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	stopIndexForEvent(...args: any[]): any;
  }
}

declare const MSGradientBarView: sketchInternal.MSGradientBarView;

