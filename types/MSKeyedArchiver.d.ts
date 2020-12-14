// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSKeyedArchiver extends MSBaseArchiver {
    /* typeEncoding=@"MSKeyedArchiverHelper", ivar=_archiveHelper, attributes=(retain,nonatomic) */
    	archiveHelper(): MSKeyedArchiverHelper;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	archiveHelper(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	archiveRootObject(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	archivedDataWithRootObject_error(...args: any[]): any;
    /* typeEncoding=v28@0:8c16@20 */
    	encodeBool_forKey(...args: any[]): any;
    /* typeEncoding=v32@0:8d16@24 */
    	encodeDouble_forKey(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@24 */
    	encodeInteger_forKey(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	encodeObject_forKey(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGPoint=dd}16@32 */
    	encodePoint_forKey(...args: any[]): any;
    /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	encodeRect_forKey(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGSize=dd}16@32 */
    	encodeSize_forKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArchiveHelper(...args: any[]): any;
  }
}

declare const MSKeyedArchiver: sketchInternal.MSKeyedArchiver;

