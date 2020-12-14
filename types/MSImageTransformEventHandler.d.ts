// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImageTransformEventHandler extends MSTransformEventHandler {
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	bounds(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v16@0:8 */
    	handlerGotFocus(): void;
    /* typeEncoding=v16@0:8 */
    	handlerWillLoseFocus(): void;
    /* typeEncoding=@16@0:8 */
    	instructions(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8q16 */
    	layerPointForCorner(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	newLayerRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	perspectiveImage(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}56@0:8q16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	pointForCorner_rect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toolbarIdentifier(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	transformLayers(): void;
  }
}

declare const MSImageTransformEventHandler: sketchInternal.MSImageTransformEventHandler;

