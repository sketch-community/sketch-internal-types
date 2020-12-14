// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSEventHandlerManager extends NSObject {
    /* typeEncoding=@"MSEventHandler", ivar=_currentHandler, attributes=(retain,nonatomic) */
    	currentHandler(): MSEventHandler;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"<MSEventHandlerManagerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,weak) */
    	document(): MSDocument;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding={CGPoint=dd}, ivar=_lastEventLocationInWindow, attributes=(assign,nonatomic) */
    	lastEventLocationInWindow(): CGPoint;
    /* typeEncoding=Q, ivar=_lastEventType, attributes=(assign,nonatomic) */
    	lastEventType(): number;
    /* typeEncoding=q, ivar=_lastMouseDownClickCount, attributes=(assign,nonatomic) */
    	lastMouseDownClickCount(): number;
    /* typeEncoding=@"MSNormalEventHandler", ivar=_normalHandler, attributes=(retain,nonatomic) */
    	normalHandler(): MSNormalEventHandler;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	currentHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	documentDidChange(...args: any[]): any;
    /* typeEncoding=@24@0:8#16 */
    	handlerForClass(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDelegate(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	lastEventLocationInWindow(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	lastEventType(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	lastMouseDownClickCount(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	normalHandler(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColorSpace=}16d24 */
    	overlayItemImages_backingScale(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	recordEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sendMouseDownEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sendMouseDraggedEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sendMouseMovedEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sendMouseUpEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentHandler(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    	setCurrentHandler_force(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setLastEventLocationInWindow(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setLastEventType(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setLastMouseDownClickCount(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNormalHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8#16 */
    	switchToEventHandlerClass(...args: any[]): any;
    /* typeEncoding=@24@0:8#16 */
    	toggleHandlerClass(...args: any[]): any;
  }
}

declare const MSEventHandlerManager: sketchInternal.MSEventHandlerManager;

