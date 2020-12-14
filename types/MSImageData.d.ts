// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImageData extends NSObject {
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
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSImage", ivar=_image, attributes=(retain,nonatomic) */
    	image(): cocoascript.NSImage;
    /* typeEncoding=@"BCReadWriteLock", ivar=_imageLock, attributes=(assign,nonatomic,readonly) */
    	imageLock(): BCReadWriteLock;
    /* typeEncoding=@"NSData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sha1(): cocoascript.NSData;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static decodeReferenceFromJSONZipArchive_withReference(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static errorImage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=^{CGImage=}48@0:8Q16^{CGColorSpace=}24@32@40 */
    	CGImageAtLevelOfDetail_colorSpace_cache_owner(...args: any[]): any;
    /* typeEncoding=^{CGImage=}40@0:8^{CGColorSpace=}16@24@32 */
    	CGImageForColorSpace_cache_owner(...args: any[]): any;
    /* typeEncoding=^{CGImage=}56@0:8{CGSize=dd}16^{CGColorSpace=}32@40@48 */
    	CGImageSuitableForDrawingWithSize_colorSpace_cache_owner(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	NSImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	archiveReferenceIdentifier_bc(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	assetType(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	correctInvalidGamma(): void;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dataLock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	decodeWithUnarchiver(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	doesBitmapImageRepRequireDePackingOrDeindexing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeAsJSON(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeReferenceInJSONZipArchive(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	ensureBitmapImageRepIsNotIndexedNotPacked(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	hash(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	image(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageDataByCorrectingInvalidGamma(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageLock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initDefault(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithData_sha(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithImage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithLegacyHash(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@40@0:8@16q24q32 */
    	initWithUnarchiver_migratingFrom_toVersion(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isAssetEqual(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isLegacy(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	replacementObjectForJSONEncoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSha1(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sha1(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	treeAsDictionary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	waitForDataLock(): void;
  }
}

declare const MSImageData: sketchInternal.MSImageData;

