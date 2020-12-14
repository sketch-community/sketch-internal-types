// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSZoomTool extends NSObject {
    /* typeEncoding=c, ivar=_activatedByKey, attributes=(assign,nonatomic,readonly) */
    	activatedByKey(): boolean;
    /* typeEncoding=c, ivar=_active, attributes=(assign,nonatomic,readonly,getter=isActive) */
    	active(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=d, ivar=_zoomValue, attributes=(assign,nonatomic) */
    	zoomValue(): number;
    /* typeEncoding=c16@0:8 */
    	activatedByKey(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	applyZoomCursor(): void;
    /* typeEncoding=v20@0:8c16 */
    	beginZoomToolModeActivatedByKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	endZoomToolModeInView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	flagsChanged(): void;
    /* typeEncoding=c16@0:8 */
    	isActive(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	mouseDown_inView(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	mouseDragged_inView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	mouseMoved(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	mouseUp_inView(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldZoomIntoRect(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8@16@24 */
    	zoomPointFromEvent_inView(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	zoomRect(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValueAfterZoomIn(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValueAfterZoomInUnCapped(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValueAfterZoomOut(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValueAfterZoomOutUnCapped(...args: any[]): any;
  }
}

declare const MSZoomTool: sketchInternal.MSZoomTool;

