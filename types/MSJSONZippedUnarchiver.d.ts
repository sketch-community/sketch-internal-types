// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSJSONZippedUnarchiver extends MSJSONUnarchiver {
    /* typeEncoding=@"BCJSONZippedDecoder", ivar=_zipDecoder, attributes=(retain,nonatomic) */
    	zipDecoder(): BCJSONZippedDecoder;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c24@0:8@16 */
    	containsFileAtSubpath(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	decodeReferenceObjectOfClass_withIdentifier(...args: any[]): any;
    /* typeEncoding=@32@0:8#16@24 */
    	decodeReferencesOfClass_forKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	decoder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	filePathsInSubpath_error(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setZipDecoder(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	unarchivedObjectAtSubpath_error(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	unarchivedRawDataAtSubpath_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zipDecoder(...args: any[]): any;
  }
}

declare const MSJSONZippedUnarchiver: sketchInternal.MSJSONZippedUnarchiver;

