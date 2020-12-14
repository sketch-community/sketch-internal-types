// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSHighLevelExporter extends NSObject {
    /* typeEncoding=@"<MSHighLevelExportDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"MSRenderingDriver", ivar=_driver, attributes=(assign,nonatomic,readonly) */
    	driver(): MSRenderingDriver;
    /* typeEncoding=@24@0:8@16 */
    	exporterWithDelegate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	driver(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	export(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	exportLayers(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	exportPage(...args: any[]): any;
    /* typeEncoding=@64@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56 */
    	exportRequestsForLayer_inRect_exportFormats(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	formatsToExport(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	fullURLForOutputURL_format(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDelegate(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithDelegate_driver(...args: any[]): any;
    /* typeEncoding=c40@0:8@16^@24^@32 */
    	outputFileWithName_URL_existing(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	prepareExportRequest_layer(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	rectToExportForPage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	suffixForScale(...args: any[]): any;
  }
}

declare const MSHighLevelExporter: sketchInternal.MSHighLevelExporter;

