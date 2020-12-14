// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAppExtension extends NSObject {
    /* typeEncoding=@"NSString", ivar=_appId, attributes=(copy,nonatomic) */
    	appId(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_locale, attributes=(copy,nonatomic) */
    	locale(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_userId, attributes=(copy,nonatomic) */
    	userId(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_ver, attributes=(copy,nonatomic) */
    	ver(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	appId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValid(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	locale(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeToDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAppId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocale(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUserId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setVer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	userId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	ver(...args: any[]): any;
  }
}

declare const MSAppExtension: sketchInternal.MSAppExtension;

