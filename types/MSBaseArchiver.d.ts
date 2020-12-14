// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBaseArchiver extends NSObject {
    /* typeEncoding=c, ivar=_archiveObjectIDs, attributes=(assign,nonatomic) */
    	archiveObjectIDs(): boolean;
    /* typeEncoding=c, ivar=_omitDefaultValues, attributes=(assign,nonatomic) */
    	omitDefaultValues(): boolean;
    /* typeEncoding=@"NSMutableDictionary", ivar=_references, attributes=(retain,nonatomic) */
    	references(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@24@0:8@16 */
    	archivedDataWithHeaderAndRootObject(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	archivedDataWithRootObject_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	archiveObjectIDs(...args: any[]): any;
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
    /* typeEncoding=v32@0:8@16@24 */
    	encodeReferences_forKey(...args: any[]): any;
    /* typeEncoding=v40@0:8{CGSize=dd}16@32 */
    	encodeSize_forKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	omitDefaultValues(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	referenceObjectForObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	references(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setArchiveObjectIDs(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setOmitDefaultValues(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setReferences(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldEncodeAsReference(...args: any[]): any;
  }
}

declare const MSBaseArchiver: sketchInternal.MSBaseArchiver;

