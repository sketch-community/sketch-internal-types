// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportMachineInfo extends NSObject {
    /* typeEncoding=Q, ivar=_logicalProcessorCount, attributes=(assign,nonatomic,readonly) */
    	logicalProcessorCount(): number;
    /* typeEncoding=@"NSString", ivar=_modelName, attributes=(assign,nonatomic,readonly) */
    	modelName(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_processorCount, attributes=(assign,nonatomic,readonly) */
    	processorCount(): number;
    /* typeEncoding=@"MSPLCrashReportProcessorInfo", ivar=_processorInfo, attributes=(assign,nonatomic,readonly) */
    	processorInfo(): MSPLCrashReportProcessorInfo;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@48@0:8@16@24Q32Q40 */
    	initWithModelName_processorInfo_processorCount_logicalProcessorCount(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	logicalProcessorCount(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	processorCount(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processorInfo(...args: any[]): any;
  }
}

declare const MSPLCrashReportMachineInfo: sketchInternal.MSPLCrashReportMachineInfo;

