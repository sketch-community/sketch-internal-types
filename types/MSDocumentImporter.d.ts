// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentImporter extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_addedLayers, attributes=(retain,nonatomic) */
    	addedLayers(): cocoascript.NSArray;
    /* typeEncoding=@"NSURL", ivar=_fileURL, attributes=(retain,nonatomic) */
    	fileURL(): cocoascript.NSURL;
    /* typeEncoding=@"MSLayerGroup", ivar=_group, attributes=(retain,nonatomic) */
    	group(): MSLayerGroup;
    /* typeEncoding=@"<MSImporter>", ivar=_importer, attributes=(retain,nonatomic) */
    	importer(): any;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"CHProgressSheet", ivar=_sheet, attributes=(retain,nonatomic) */
    	sheet(): CHProgressSheet;
    /* typeEncoding=@"MSCanvasView", ivar=(null), attributes=(assign,dynamic,nonatomic,readonly,weak) */
    	view(): MSCanvasView;
    /* typeEncoding=v40@0:8@16@24@32 */
    	importFromURL_inPage_importer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	addedLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	close(): void;
    /* typeEncoding=v16@0:8 */
    	collapseSinglePage(): void;
    /* typeEncoding=@16@0:8 */
    	defaultLocalizedImportedLayersPageName(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	expandPages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	group(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	importer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	importerDidFinish(): void;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	run(): void;
    /* typeEncoding=v24@0:8@16 */
    	setAddedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFileURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImporter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	showProgressSheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	view(...args: any[]): any;
  }
}

declare const MSDocumentImporter: sketchInternal.MSDocumentImporter;

