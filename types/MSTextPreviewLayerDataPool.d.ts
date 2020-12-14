// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextPreviewLayerDataPool extends BCObjectPool {
    /* typeEncoding=@"NSData", ivar=_metadata, attributes=(assign,nonatomic,weak) */
    	metadata(): cocoascript.NSData;
    /* typeEncoding=@"NSData", ivar=_pdfData, attributes=(assign,nonatomic,weak) */
    	pdfData(): cocoascript.NSData;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithPDFData_metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pdfData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	recycleTextPreviewLayerData(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeCachedPages(): void;
    /* typeEncoding=v24@0:8@16 */
    	setMetadata(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPdfData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	vendTextPreviewLayerData(...args: any[]): any;
  }
}

declare const MSTextPreviewLayerDataPool: sketchInternal.MSTextPreviewLayerDataPool;

