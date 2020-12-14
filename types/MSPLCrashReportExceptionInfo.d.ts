// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportExceptionInfo extends NSObject {
    /* typeEncoding=@"NSString", ivar=_name, attributes=(assign,nonatomic,readonly) */
    	exceptionName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_reason, attributes=(assign,nonatomic,readonly) */
    	exceptionReason(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_stackFrames, attributes=(assign,nonatomic,readonly) */
    	stackFrames(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	exceptionName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exceptionReason(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithExceptionName_reason(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithExceptionName_reason_stackFrames(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stackFrames(...args: any[]): any;
  }
}

declare const MSPLCrashReportExceptionInfo: sketchInternal.MSPLCrashReportExceptionInfo;

