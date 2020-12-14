// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentZippedJSONReader extends MSDocumentReader {
    /* typeEncoding=@"MSJSONZippedUnarchiver", ivar=_unarchiver, attributes=(retain,nonatomic) */
    	unarchiver(): MSJSONZippedUnarchiver;
    /* typeEncoding=q16@0:8 */
    	documentCompatibilityVersion(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	documentVersion(...args: any[]): any;
    /* typeEncoding=q40@0:8^{CGImageSource=}16{CGSize=dd}24 */
    	maximumPixelSizeForImageSource_maximumSize(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	UIMetadata(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	containsPreviewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithFileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryPreviewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	open(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    	previewBitmapImageRepWithSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    	previewImageWithMaximumSize(...args: any[]): any;
    /* typeEncoding=@32@0:8^c16^@24 */
    	readImmutableDataWithCorruptionDetected_error(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUnarchiver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unarchiver(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	workspaceItems(...args: any[]): any;
  }
}

declare const MSDocumentZippedJSONReader: sketchInternal.MSDocumentZippedJSONReader;

