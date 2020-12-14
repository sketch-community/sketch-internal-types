// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSJSONArchiver extends MSBaseArchiver {
    /* typeEncoding=@"BCJSONEncoder", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	encoder(): BCJSONEncoder;
    /* typeEncoding=v32@0:8@16@24 */
    	static archiveObject_coder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static archiverFromCoder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	static defineClassAliases(): void;
    /* typeEncoding=v16@0:8 */
    	static load(): void;
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
    	encoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	replacementObjectForObject(...args: any[]): any;
  }
}

declare const MSJSONArchiver: sketchInternal.MSJSONArchiver;

