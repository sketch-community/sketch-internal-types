// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextPreviewData extends NSObject {
    /* typeEncoding=@"NSMapTable", ivar=_table, attributes=(assign,nonatomic,readonly) */
    	table(): cocoascript.NSMapTable;
    /* typeEncoding=@16@0:8 */
    	static sharedPreviewData(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=^{CGPDFPage=}32@0:8@16@24 */
    	findPreviewPageForDocument_layer(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	findPreviewRectForDocument_layerID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	layerDataForDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	table(...args: any[]): any;
  }
}

declare const MSTextPreviewData: sketchInternal.MSTextPreviewData;

