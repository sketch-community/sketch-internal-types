// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSJSONZippedArchiver extends MSJSONArchiver {
    /* typeEncoding=@"BCJSONZippedEncoder", ivar=_zipEncoder, attributes=(retain,nonatomic) */
    	zipEncoder(): BCJSONZippedEncoder;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	encodableReferenceToOriginal(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	encodeObject_toSubpath_error(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	encodeRawData_toSubpath_error(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	encodeRawDataWithCompression_toSubpath_error(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeReferenceObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	encodeReferences_forKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	encoder(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	finishEncodingError(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	replacementObjectForObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setZipEncoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	zipEncoder(...args: any[]): any;
  }
}

declare const MSJSONZippedArchiver: sketchInternal.MSJSONZippedArchiver;

