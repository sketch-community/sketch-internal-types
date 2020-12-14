// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSVersionedArchive extends NSObject {
    /* typeEncoding=@"NSString", ivar=_alternateFolder, attributes=(retain,nonatomic) */
    	alternateFolder(): cocoascript.NSString;
    /* typeEncoding=@"NSURL", ivar=_baseURL, attributes=(retain,nonatomic) */
    	baseURL(): cocoascript.NSURL;
    /* typeEncoding=@"NSURL", ivar=_url, attributes=(retain,nonatomic) */
    	url(): cocoascript.NSURL;
    /* typeEncoding=Q, ivar=_version, attributes=(assign,nonatomic) */
    	version(): number;
    /* typeEncoding=@40@0:8@16@24q32 */
    	URLForArchiveWithName_extension_version(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24q32 */
    	globalArchiveWithName_extension_version(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	globalDirectory(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24Q32 */
    	versionedURLWithBase_extension_version(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	URLNeedingMigration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	alternateFolder(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	archiveRootObject_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	baseURL(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cleanupAfterTesting(): void;
    /* typeEncoding=@16@0:8 */
    	existingURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	existingURLBasedOnFullURL(...args: any[]): any;
    /* typeEncoding=@24@0:8^@16 */
    	existingURLFoundAtBaseURL(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	exists(...args: any[]): any;
    /* typeEncoding=@32@0:8@16q24 */
    	initWithURL_version(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAlternateFolder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBaseURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUrl(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setVersion(...args: any[]): any;
    /* typeEncoding=@32@0:8^q16^@24 */
    	unarchiveRootObjectVersion_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	url(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	version(...args: any[]): any;
  }
}

declare const MSVersionedArchive: sketchInternal.MSVersionedArchive;

