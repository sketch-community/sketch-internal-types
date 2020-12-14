// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportSignalInfo extends NSObject {
    /* typeEncoding=Q, ivar=_address, attributes=(assign,nonatomic,readonly) */
    	address(): number;
    /* typeEncoding=@"NSString", ivar=_code, attributes=(assign,nonatomic,readonly) */
    	code(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(assign,nonatomic,readonly) */
    	name(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	address(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	code(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24Q32 */
    	initWithSignalName_code_address(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
  }
}

declare const MSPLCrashReportSignalInfo: sketchInternal.MSPLCrashReportSignalInfo;

