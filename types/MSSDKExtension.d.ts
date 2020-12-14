// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSDKExtension extends NSObject {
    /* typeEncoding=@"NSString", ivar=_epoch, attributes=(copy,nonatomic) */
    	epoch(): cocoascript.NSString;
    /* typeEncoding=@"NSUUID", ivar=_installId, attributes=(retain,nonatomic) */
    	installId(): cocoascript.NSUUID;
    /* typeEncoding=@"NSString", ivar=_libVer, attributes=(copy,nonatomic) */
    	libVer(): cocoascript.NSString;
    /* typeEncoding=q, ivar=_seq, attributes=(assign,nonatomic) */
    	seq(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	epoch(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	installId(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValid(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libVer(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	seq(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeToDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setEpoch(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInstallId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLibVer(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setSeq(...args: any[]): any;
  }
}

declare const MSSDKExtension: sketchInternal.MSSDKExtension;

