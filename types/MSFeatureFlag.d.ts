// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFeatureFlag extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isAvailable(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    	isEnabled(): boolean;
    /* typeEncoding=v16@0:8 */
    	switchToUserDefaultsStorageStrategy(): void;
    /* typeEncoding=c16@0:8 */
    	usesDisabledStorageStrategy(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAvailable(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsEnabled(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	toggle(): void;
    /* typeEncoding=c24@0:8@16 */
    	validateMenuItem(...args: any[]): any;
  }
}

declare const MSFeatureFlag: sketchInternal.MSFeatureFlag;

