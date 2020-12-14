// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportMachExceptionInfo extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_codes, attributes=(assign,nonatomic,readonly) */
    	codes(): cocoascript.NSArray;
    /* typeEncoding=Q, ivar=_type, attributes=(assign,nonatomic,readonly) */
    	type(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	codes(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16@24 */
    	initWithType_codes(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	type(...args: any[]): any;
  }
}

declare const MSPLCrashReportMachExceptionInfo: sketchInternal.MSPLCrashReportMachExceptionInfo;

