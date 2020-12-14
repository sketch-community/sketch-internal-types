// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSEkranoplanRenderer extends NSObject {
    /* typeEncoding=@"NSView<MSTiledRendererHostView>", ivar=hostView, attributes=(assign,nonatomic,weak) */
    	hostView(): any;
    /* typeEncoding=@"CALayer", ivar=layer, attributes=(assign,nonatomic,readonly) */
    	layer(): CALayer;
    /* typeEncoding=@"CAMetalLayer", ivar=_metalLayer, attributes=(retain,nonatomic) */
    	metalLayer(): CAMetalLayer;
    /* typeEncoding=@"MSRenderInstruction", ivar=_renderedInstruction, attributes=(copy) */
    	renderedInstruction(): MSRenderInstruction;
    /* typeEncoding=@"_TtC11SketchModel23MSResolvedDocumentMaker", ivar=_resolvedDocumentMaker, attributes=(retain,nonatomic) */
    	resolvedDocumentMaker(): _TtC11SketchModel23MSResolvedDocumentMaker;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	hostView(...args: any[]): any;
    /* typeEncoding=@28@0:8@?16c24 */
    	initWithCompletionHandler_syncFirstFrame(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isDrawing(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metalLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	renderedInstruction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	resolvedDocumentMaker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHostView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMetalLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRenderedInstruction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setResolvedDocumentMaker(...args: any[]): any;
    /* typeEncoding=v32@0:8@16c24c28 */
    	updateContentWithRenderInstruction_synchronously_hasUserFocus(...args: any[]): any;
  }
}

declare const MSEkranoplanRenderer: sketchInternal.MSEkranoplanRenderer;

