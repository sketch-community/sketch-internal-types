// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInsertTextEventHandler extends MSDragToInsertLayerEventHandler {
    /* typeEncoding=@"MSTextLayer", ivar=_textLayer, attributes=(retain,nonatomic) */
    	textLayer(): MSTextLayer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	allowsSwitchToInsertAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	handleDrag(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=@60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48c56 */
    	performActionWithRect_fromLayer_constrainProportions(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8{CGPoint=dd}16 */
    	rectForInsertingTextLayerAtPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectTextLayerAndEdit(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTextLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	textLayer(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGPoint=dd}16d32 */
    	textLayerAtPoint_zoomValue(...args: any[]): any;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16q48 */
    	textLayerWithRect_behavior(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16d32 */
    	tryToEditExistingTextLayerAtPoint_zoomValue(...args: any[]): any;
  }
}

declare const MSInsertTextEventHandler: sketchInternal.MSInsertTextEventHandler;

