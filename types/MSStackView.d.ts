// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSStackView extends NSView {
    /* typeEncoding=c, ivar=_autoupdatesMaximumHeight, attributes=(assign,nonatomic) */
    	autoupdatesMaximumHeight(): boolean;
    /* typeEncoding=@"NSColor", ivar=_backgroundColor, attributes=(retain,nonatomic) */
    	backgroundColor(): cocoascript.NSColor;
    /* typeEncoding=@, ivar=_keyResponder, attributes=(assign,nonatomic,weak) */
    	keyResponder(): any;
    /* typeEncoding=q, ivar=_maximumHeight, attributes=(assign,nonatomic) */
    	maximumHeight(): number;
    /* typeEncoding=d, ivar=_minimumHeight, attributes=(assign,nonatomic) */
    	minimumHeight(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v28@0:8Q16c24 */
    	adjustHeight_hasScrollViews(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	adjustScroll(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	adjustScrollViewsToFitMaximumHeight(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	autoupdatesMaximumHeight(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=@16@0:8 */
    	backgroundColor(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	doStack(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFlipped(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	keyDown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	keyResponder(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	maximumHeight(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	minimumHeight(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	refreshMaximumHeightFromSubviews(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAutoupdatesMaximumHeight(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBackgroundColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setKeyResponder(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setMaximumHeight(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setMinimumHeight(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	stack(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	totalRequiredHeight(...args: any[]): any;
  }
}

declare const MSStackView: sketchInternal.MSStackView;

