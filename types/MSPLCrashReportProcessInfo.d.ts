// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportProcessInfo extends NSObject {
    /* typeEncoding=c, ivar=_native, attributes=(assign,nonatomic,readonly) */
    	native(): boolean;
    /* typeEncoding=Q, ivar=_parentProcessID, attributes=(assign,nonatomic,readonly) */
    	parentProcessID(): number;
    /* typeEncoding=@"NSString", ivar=_parentProcessName, attributes=(assign,nonatomic,readonly) */
    	parentProcessName(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_processID, attributes=(assign,nonatomic,readonly) */
    	processID(): number;
    /* typeEncoding=@"NSString", ivar=_processName, attributes=(assign,nonatomic,readonly) */
    	processName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_processPath, attributes=(assign,nonatomic,readonly) */
    	processPath(): cocoascript.NSString;
    /* typeEncoding=@"NSDate", ivar=_processStartTime, attributes=(assign,nonatomic,readonly) */
    	processStartTime(): cocoascript.NSDate;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@68@0:8@16Q24@32@40@48Q56c64 */
    	initWithProcessName_processID_processPath_processStartTime_parentProcessName_parentProcessID_native(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	native(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	parentProcessID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentProcessName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	processID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processStartTime(...args: any[]): any;
  }
}

declare const MSPLCrashReportProcessInfo: sketchInternal.MSPLCrashReportProcessInfo;

