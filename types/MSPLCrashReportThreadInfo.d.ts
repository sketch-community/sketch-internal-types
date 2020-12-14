// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportThreadInfo extends NSObject {
    /* typeEncoding=c, ivar=_crashed, attributes=(assign,nonatomic,readonly) */
    	crashed(): boolean;
    /* typeEncoding=@"NSArray", ivar=_registers, attributes=(assign,nonatomic,readonly) */
    	registers(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_stackFrames, attributes=(assign,nonatomic,readonly) */
    	stackFrames(): cocoascript.NSArray;
    /* typeEncoding=q, ivar=_threadNumber, attributes=(assign,nonatomic,readonly) */
    	threadNumber(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	crashed(...args: any[]): any;
    /* typeEncoding=@44@0:8q16@24c32@36 */
    	initWithThreadNumber_stackFrames_crashed_registers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	registers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	stackFrames(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	threadNumber(...args: any[]): any;
  }
}

declare const MSPLCrashReportThreadInfo: sketchInternal.MSPLCrashReportThreadInfo;

