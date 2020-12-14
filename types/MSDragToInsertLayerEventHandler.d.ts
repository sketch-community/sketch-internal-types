// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDragToInsertLayerEventHandler extends MSDragRectEventHandler {
    /* typeEncoding=@?, ivar=_completionBlock, attributes=(copy,nonatomic) */
    	completionBlock(): any;
    /* typeEncoding=@"MSLayer", ivar=_insertedLayer, attributes=(retain,nonatomic) */
    	insertedLayer(): MSLayer;
    /* typeEncoding=@"MSLayer", ivar=_prototypeLayer, attributes=(retain,nonatomic) */
    	prototypeLayer(): MSLayer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	allowsSwitchToInsertAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	applicableActionItemIdentifier(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	completionBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	group(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@16@0:8 */
    	imageName(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	insertAsNewLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	insertNewLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertedLayer(...args: any[]): any;
    /* typeEncoding=@96@0:8Q16{MSRenderingParameters={CGRect={CGPoint=dd}{CGSize=dd}}dd{CGSize=dd}Q}24 */
    	overlayItems_parameters(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pathForPrototypeLayer(...args: any[]): any;
    /* typeEncoding=@60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48c56 */
    	performActionWithRect_fromLayer_constrainProportions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	prototypeLayer(...args: any[]): any;
    /* typeEncoding=v56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	resizeLayer_toRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setCompletionBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInsertedLayer(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setInsertionRect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPrototypeLayer(...args: any[]): any;
  }
}

declare const MSDragToInsertLayerEventHandler: sketchInternal.MSDragToInsertLayerEventHandler;

