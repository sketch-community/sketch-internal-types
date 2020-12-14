// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPDFImporter extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"<PDFParser>", ivar=_parser, attributes=(retain,nonatomic) */
    	parser(): any;
    /* typeEncoding=@"MSPDFScanner", ivar=_scanner, attributes=(retain,nonatomic) */
    	scanner(): MSPDFScanner;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSString", ivar=_type, attributes=(retain,nonatomic) */
    	type(): cocoascript.NSString;
    /* typeEncoding=@16@0:8 */
    	epsImporter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pdfImporter(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	finishImporting(): void;
    /* typeEncoding=@16@0:8 */
    	firstPhaseSubtitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	importAsLayer(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	importIntoPage_name_progress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parser(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	prepareToImportFromData(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16^@24 */
    	prepareToImportFromURL_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	scanner(...args: any[]): any;
    /* typeEncoding=@32@0:8q16q24 */
    	secondPhaseSubtitleForValue_maximum(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setParser(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setScanner(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldCollapseSinglePage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldExpandPages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	type(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	unwrappedLayer(...args: any[]): any;
  }
}

declare const MSPDFImporter: sketchInternal.MSPDFImporter;

