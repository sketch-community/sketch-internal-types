// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTooltipHostingView extends NSView {
    /* typeEncoding=@"NSView", ivar=_toolTipProvider, attributes=(assign,nonatomic,weak) */
    	toolTipProvider(): cocoascript.NSView;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	awakeFromNib(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    	observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	refreshToolTip(): void;
    /* typeEncoding=v24@0:8@16 */
    	setToolTipProvider(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setupTooltipHostingView(): void;
    /* typeEncoding=@16@0:8 */
    	toolTipProvider(...args: any[]): any;
  }
}

declare const MSTooltipHostingView: sketchInternal.MSTooltipHostingView;

