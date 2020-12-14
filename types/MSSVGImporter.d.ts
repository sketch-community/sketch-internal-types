// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSVGImporter extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"SVGElement", ivar=_graph, attributes=(retain,nonatomic) */
    	graph(): SVGElement;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"SVGImporter", ivar=_importer, attributes=(retain,nonatomic) */
    	importer(): SVGImporter;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@16@0:8 */
    	svgImporter(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	finishImporting(): void;
    /* typeEncoding=@16@0:8 */
    	firstPhaseSubtitle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	graph(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	importAsLayer(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	importIntoPage_name_progress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	importer(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	prepareToImportFromData(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16^@24 */
    	prepareToImportFromURL_error(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	prepareToImportFromXMLString(...args: any[]): any;
    /* typeEncoding=v32@0:8d16@24 */
    	scale_rootGroup(...args: any[]): any;
    /* typeEncoding=@32@0:8q16q24 */
    	secondPhaseSubtitleForValue_maximum(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGraph(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImporter(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldCollapseSinglePage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldExpandPages(...args: any[]): any;
  }
}

declare const MSSVGImporter: sketchInternal.MSSVGImporter;

