// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentWriter extends NSObject {
    /* typeEncoding=@"NSDictionary", ivar=_UIMetadata, attributes=(copy,nonatomic) */
    	UIMetadata(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSJSONZippedArchiver", ivar=_archiver, attributes=(retain,nonatomic) */
    	archiver(): MSJSONZippedArchiver;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSData", ivar=_libraryPreview, attributes=(retain,nonatomic) */
    	libraryPreview(): cocoascript.NSData;
    /* typeEncoding=c, ivar=_preserveMetadata, attributes=(assign,nonatomic) */
    	preserveMetadata(): boolean;
    /* typeEncoding=@"NSData", ivar=_previewData, attributes=(retain,nonatomic) */
    	previewData(): cocoascript.NSData;
    /* typeEncoding=@?, ivar=_previewGenerationBlock, attributes=(copy,nonatomic) */
    	previewGenerationBlock(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	static findLibraryPreviewArtboardForDocument_outPage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static generatePreviewsForDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static metadataForNewFile(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32 */
    	static previewImageForDocument_page_rect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	UIMetadata(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	archiveTextPreviewPDFDataForTextLayers_documentData_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	archiver(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	createPreviewMetadataForTextLayers_pageMapping(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	createPreviewPDFDataForTextLayers_document_pageMapping(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	createTextPreviewMetadataForTextLayers_pageMapping(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithFileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryPreview(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	preserveMetadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewData(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	previewGenerationBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibraryPreview(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setPreserveMetadata(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewData(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setPreviewGenerationBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUIMetadata(...args: any[]): any;
    /* typeEncoding=c36@0:8@16c24^@28 */
    	writeDocumentData_isAutosave_error(...args: any[]): any;
  }
}

declare const MSDocumentWriter: sketchInternal.MSDocumentWriter;

