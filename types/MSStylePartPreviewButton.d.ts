// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSStylePartPreviewButton extends MSInspectorButton {
    /* typeEncoding=@"MSColor", ivar=_color, attributes=(retain,nonatomic) */
    	color(): MSColor;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	contentRect(): CGRect;
    /* typeEncoding=@"<MSStylePartPreviewButtonDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@, ivar=_dragOwner, attributes=(assign,nonatomic,weak) */
    	dragOwner(): any;
    /* typeEncoding=@"MSInspectorButton", ivar=_inlineButton, attributes=(retain,nonatomic) */
    	inlineButton(): MSInspectorButton;
    /* typeEncoding=@"MSStylePart", ivar=_stylePart, attributes=(retain,nonatomic) */
    	stylePart(): MSStylePart;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={NSEdgeInsets=dddd}16@0:8 */
    	alignmentRectInsets(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	color(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	colorFromStylePart(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	contentRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragOwner(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	drawButton(): void;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inlineButton(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	inlineButtonAction(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFlipped(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isPreviewingSwatch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseUp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDragOwner(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInlineButton(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setNeedsDisplay(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setStylePart(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupInlineButton(): void;
    /* typeEncoding=@16@0:8 */
    	stylePart(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateInlineButtonState(): void;
  }
}

declare const MSStylePartPreviewButton: sketchInternal.MSStylePartPreviewButton;

