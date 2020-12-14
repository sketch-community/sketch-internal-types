// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSRenderPreparer extends NSObject {
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSImmutableDocumentData;
    /* typeEncoding=@"BCAtomicStack", ivar=_layerStack, attributes=(retain,nonatomic) */
    	layerStack(): BCAtomicStack;
    /* typeEncoding=@"NSOperationQueue", ivar=_operationQueue, attributes=(retain,nonatomic) */
    	operationQueue(): cocoascript.NSOperationQueue;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerStack(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	operationQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	prepareDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayerStack(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOperationQueue(...args: any[]): any;
  }
}

declare const MSRenderPreparer: sketchInternal.MSRenderPreparer;

