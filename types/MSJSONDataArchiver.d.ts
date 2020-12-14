// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSJSONDataArchiver extends MSJSONArchiver {
    /* typeEncoding=@"NSMutableData", ivar=_archivedData, attributes=(retain,nonatomic) */
    	archivedData(): cocoascript.NSMutableData;
    /* typeEncoding=@"BCJSONEncoder", ivar=_dataEncoder, attributes=(retain,nonatomic) */
    	dataEncoder(): BCJSONEncoder;
    /* typeEncoding=@32@0:8@16^@24 */
    	archiveStringWithRootObject_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	archiveRootObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	archivedData(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	archivedDataWithRootObject_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataEncoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	encoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	replacementObjectForObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArchivedData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDataEncoder(...args: any[]): any;
  }
}

declare const MSJSONDataArchiver: sketchInternal.MSJSONDataArchiver;

