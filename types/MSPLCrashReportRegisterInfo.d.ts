// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportRegisterInfo extends NSObject {
    /* typeEncoding=@"NSString", ivar=_registerName, attributes=(assign,nonatomic,readonly) */
    	registerName(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_registerValue, attributes=(assign,nonatomic,readonly) */
    	registerValue(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8@16Q24 */
    	initWithRegisterName_registerValue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	registerName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	registerValue(...args: any[]): any;
  }
}

declare const MSPLCrashReportRegisterInfo: sketchInternal.MSPLCrashReportRegisterInfo;

