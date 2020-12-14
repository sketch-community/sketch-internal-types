// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTileRenderPass extends NSObject {
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_documentData, attributes=(retain,nonatomic) */
    	documentData(): MSImmutableDocumentData;
    /* typeEncoding=@"MSImmutablePage", ivar=_page, attributes=(retain,nonatomic) */
    	page(): MSImmutablePage;
    /* typeEncoding=d, ivar=_zoomValue, attributes=(assign,nonatomic) */
    	zoomValue(): number;
    /* typeEncoding=@40@0:8@16@24d32 */
    	tileRenderPassWithPage_inDocument_zoomValue(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	page(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPage(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setZoomValue(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	zoomValue(...args: any[]): any;
  }
}

declare const MSTileRenderPass: sketchInternal.MSTileRenderPass;

