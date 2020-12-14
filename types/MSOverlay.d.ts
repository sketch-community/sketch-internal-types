// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverlay extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_hidden, attributes=(assign,nonatomic,getter=isHidden) */
    	hidden(): boolean;
    /* typeEncoding=@"NSView<MSTiledRendererHostView>", ivar=_hostView, attributes=(assign,nonatomic,weak) */
    	hostView(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_visibleRect, attributes=(assign,nonatomic) */
    	visibleRect(): CGRect;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	hostView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isHidden(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGPoint=dd}16q32Q40 */
    	mouseDownAtPoint_clickCount_modifierFlags(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHidden(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHostView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setNeedsDisplay(): void;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setVisibleRect(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	trackMouseWithLocation(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	updateCursorWithLocation_modifierFlags(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	visibleRect(...args: any[]): any;
  }
}

declare const MSOverlay: sketchInternal.MSOverlay;

