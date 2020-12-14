// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFontData extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	archiveReferenceIdentifier_bc(): cocoascript.NSString;
    /* typeEncoding=@"NSData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	data(): cocoascript.NSData;
    /* typeEncoding=@"NSObject<OS_dispatch_semaphore>", ivar=_dataLock, attributes=(assign,nonatomic,readonly) */
    	dataLock(): any;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=^{__CTFont=}, ivar=_fontRef, attributes=(assign,nonatomic) */
    	fontRef(): any;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sha1(): cocoascript.NSData;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@32@0:8@16@24 */
    	decodeReferenceFromJSONZipArchive_withReference(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	archiveReferenceIdentifier_bc(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataLock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	decodeWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeAsJSON(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeReferenceInJSONZipArchive(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=^{__CTFont=}16@0:8 */
    	fontRef(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=@24@0:8^{__CTFont=}16 */
    	initWithCTFontRef(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithData_sha(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@40@0:8@16q24q32 */
    	initWithUnarchiver_migratingFrom_toVersion(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	replacementObjectForJSONEncoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setData(...args: any[]): any;
    /* typeEncoding=v24@0:8^{__CTFont=}16 */
    	setFontRef(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSha1(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sha1(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	waitForDataLock(): void;
  }
}

declare const MSFontData: sketchInternal.MSFontData;

