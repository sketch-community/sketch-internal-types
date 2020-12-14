// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentReader extends MSArchiveReader {
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	UIMetadata(): cocoascript.NSDictionary;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	compatibilityVersion(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	containsPreviewImage(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	documentWasMigrated(): boolean;
    /* typeEncoding=@"NSError", ivar=_error, attributes=(retain,nonatomic) */
    	error(): cocoascript.NSError;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	libraryPreviewImage(): cocoascript.NSImage;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	metadata(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	missingFonts(): cocoascript.NSArray;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	previewImage(): cocoascript.NSImage;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	version(): number;
    /* typeEncoding=@"NSDictionary", ivar=_workspaceItems, attributes=(assign,nonatomic,readonly) */
    	workspaceItems(): cocoascript.NSDictionary;
    /* typeEncoding=@24@0:8@16 */
    	readerForDocumentAtURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	UIMetadata(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	compatibilityVersion(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsLibraryPreviewImage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsPreviewImage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	documentWasMigrated(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryPreviewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	missingFonts(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	open(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    	previewImageWithMaximumSize(...args: any[]): any;
    /* typeEncoding=@32@0:8^c16^@24 */
    	readDataWithCorruptionDetected_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^c16^@24 */
    	readImmutableDataWithCorruptionDetected_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	repair(): void;
    /* typeEncoding=v24@0:8@16 */
    	setError(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	version(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	workspaceItems(...args: any[]): any;
  }
}

declare const MSDocumentReader: sketchInternal.MSDocumentReader;

