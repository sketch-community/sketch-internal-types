// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSNormalResizeEventHandler extends MSNormalBaseEventHandler {
    /* typeEncoding=q, ivar=_handle, attributes=(assign,nonatomic) */
    	handle(): number;
    /* typeEncoding=@"NSNumberFormatter", ivar=_lengthFormatter, attributes=(assign,nonatomic,readonly) */
    	lengthFormatter(): cocoascript.NSNumberFormatter;
    /* typeEncoding=@"MSNormalEventHandler", ivar=_normalEventHandler, attributes=(retain,nonatomic) */
    	normalEventHandler(): MSNormalEventHandler;
    /* typeEncoding=@"MSDragGestureRecognizer", ivar=_resizeGestureRecognizer, attributes=(assign,nonatomic,readonly) */
    	resizeGestureRecognizer(): MSDragGestureRecognizer;
    /* typeEncoding=@"_TtC17SketchControllers15MSResizeSession", ivar=_resizeSession, attributes=(assign,nonatomic,readonly) */
    	resizeSession(): _TtC17SketchControllers15MSResizeSession;
    /* typeEncoding=@"_TtC17SketchControllers14MSOverlayLabel", ivar=_sizeLabel, attributes=(assign,nonatomic,readonly) */
    	sizeLabel(): _TtC17SketchControllers14MSOverlayLabel;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	finishResizing(): void;
    /* typeEncoding=q16@0:8 */
    	handle(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lengthFormatter(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	mouseDraggedOutsideViewShouldMoveScrollOrigin(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	normalEventHandler(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	oppositeCorner(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	prepareForResize(): void;
    /* typeEncoding=@16@0:8 */
    	resizeGestureRecognizer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	resizeLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	resizeSession(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setHandle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNormalEventHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sizeLabel(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updateCursor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	updateResize(...args: any[]): any;
  }
}

declare const MSNormalResizeEventHandler: sketchInternal.MSNormalResizeEventHandler;

