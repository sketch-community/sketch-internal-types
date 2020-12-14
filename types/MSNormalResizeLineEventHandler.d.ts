// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSNormalResizeLineEventHandler extends MSNormalBaseEventHandler {
    /* typeEncoding=@"MSShapePathLayer", ivar=_layer, attributes=(retain,nonatomic) */
    	layer(): MSShapePathLayer;
    /* typeEncoding=@"MSNormalEventHandler", ivar=_normalEventHandler, attributes=(retain,nonatomic) */
    	normalEventHandler(): MSNormalEventHandler;
    /* typeEncoding=q, ivar=_pointIndex, attributes=(assign,nonatomic) */
    	pointIndex(): number;
    /* typeEncoding=@"_TtC6Sketch16MSLineResizeTool", ivar=_tool, attributes=(assign,nonatomic,readonly) */
    	tool(): _TtC6Sketch16MSLineResizeTool;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c48@0:8{CGPoint=dd}16Q32Q40 */
    	absoluteMouseDown_clickCount_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseDragged_flags(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	absoluteMouseUp_flags(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	cursorForRadians(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithManager(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	normalEventHandler(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	pointIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setNormalEventHandler(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setPointIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tool(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updateCursor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateVisibleHandle(): void;
  }
}

declare const MSNormalResizeLineEventHandler: sketchInternal.MSNormalResizeLineEventHandler;

