// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLegacyDocumentReader extends MSDocumentReader {
    /* typeEncoding=Q, ivar=_documentFileState, attributes=(assign,nonatomic,readonly) */
    	documentFileState(): number;
    /* typeEncoding=@"BCStructuredFile", ivar=_file, attributes=(retain,nonatomic) */
    	file(): BCStructuredFile;
    /* typeEncoding=@"NSURL", ivar=_fileURL, attributes=(copy,nonatomic,readonly) */
    	fileURL(): cocoascript.NSURL;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	UIMetadata(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsPreviewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=Q16@0:8 */
    	documentFileState(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	documentWasMigrated(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	file(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithFileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	open(...args: any[]): any;
    /* typeEncoding=@32@0:8^c16^@24 */
    	readImmutableDataWithCorruptionDetected_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	repair(): void;
    /* typeEncoding=v24@0:8@16 */
    	setFile(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	validate(...args: any[]): any;
  }
}

declare const MSLegacyDocumentReader: sketchInternal.MSLegacyDocumentReader;

