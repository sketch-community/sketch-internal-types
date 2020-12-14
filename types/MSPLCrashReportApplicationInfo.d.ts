// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportApplicationInfo extends NSObject {
    /* typeEncoding=@"NSString", ivar=_applicationIdentifier, attributes=(assign,nonatomic,readonly) */
    	applicationIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_applicationMarketingVersion, attributes=(assign,nonatomic,readonly) */
    	applicationMarketingVersion(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_applicationVersion, attributes=(assign,nonatomic,readonly) */
    	applicationVersion(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	applicationIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	applicationMarketingVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	applicationVersion(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithApplicationIdentifier_applicationVersion_applicationMarketingVersion(...args: any[]): any;
  }
}

declare const MSPLCrashReportApplicationInfo: sketchInternal.MSPLCrashReportApplicationInfo;

