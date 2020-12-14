// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArchiveHeader extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	archiveReferenceIdentifier_bc(): cocoascript.NSString;
    /* typeEncoding=q, ivar=_compatibilityVersion, attributes=(assign,nonatomic) */
    	compatibilityVersion(): number;
    /* typeEncoding=@"NSDictionary", ivar=_metadata, attributes=(retain,nonatomic) */
    	metadata(): cocoascript.NSDictionary;
    /* typeEncoding=@, ivar=_root, attributes=(retain,nonatomic) */
    	root(): any;
    /* typeEncoding=q, ivar=_version, attributes=(assign,nonatomic) */
    	version(): number;
    /* typeEncoding=@16@0:8 */
    	static metadataForNewHeader(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=q16@0:8 */
    	compatibilityVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeAsJSON(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	root(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setCompatibilityVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMetadata(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRoot(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setVersion(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	version(...args: any[]): any;
  }
}

declare const MSArchiveHeader: sketchInternal.MSArchiveHeader;

