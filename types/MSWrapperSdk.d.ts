// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSWrapperSdk extends NSObject {
    /* typeEncoding=@"NSString", ivar=_liveUpdateDeploymentKey, attributes=(copy,nonatomic) */
    	liveUpdateDeploymentKey(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_liveUpdatePackageHash, attributes=(copy,nonatomic) */
    	liveUpdatePackageHash(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_liveUpdateReleaseLabel, attributes=(copy,nonatomic) */
    	liveUpdateReleaseLabel(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_wrapperRuntimeVersion, attributes=(copy,nonatomic) */
    	wrapperRuntimeVersion(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_wrapperSdkName, attributes=(copy,nonatomic) */
    	wrapperSdkName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_wrapperSdkVersion, attributes=(copy,nonatomic) */
    	wrapperSdkVersion(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24@32@40@48@56 */
    	initWithWrapperSdkVersion_wrapperSdkName_wrapperRuntimeVersion_liveUpdateReleaseLabel_liveUpdateDeploymentKey_liveUpdatePackageHash(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValid(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	liveUpdateDeploymentKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	liveUpdatePackageHash(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	liveUpdateReleaseLabel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeToDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLiveUpdateDeploymentKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLiveUpdatePackageHash(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLiveUpdateReleaseLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWrapperRuntimeVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWrapperSdkName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWrapperSdkVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	wrapperRuntimeVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	wrapperSdkName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	wrapperSdkVersion(...args: any[]): any;
  }
}

declare const MSWrapperSdk: sketchInternal.MSWrapperSdk;

