// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashProcessInfo extends NSObject {
    /* typeEncoding=i, ivar=_parentProcessID, attributes=(assign,nonatomic,readonly) */
    	parentProcessID(): number;
    /* typeEncoding=i, ivar=_processID, attributes=(assign,nonatomic,readonly) */
    	processID(): number;
    /* typeEncoding=@"NSString", ivar=_processName, attributes=(assign,nonatomic,readonly) */
    	processName(): cocoascript.NSString;
    /* typeEncoding={timeval=qi}, ivar=_startTime, attributes=(assign,nonatomic,readonly) */
    	startTime(): timeval;
    /* typeEncoding=c, ivar=_traced, attributes=(assign,nonatomic,readonly,getter=isTraced) */
    	traced(): boolean;
    /* typeEncoding=@16@0:8 */
    	currentProcessInfo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@20@0:8i16 */
    	initWithProcessID(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isTraced(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	parentProcessID(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	processID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processName(...args: any[]): any;
    /* typeEncoding={timeval=qi}16@0:8 */
    	startTime(...args: any[]): any;
  }
}

declare const MSPLCrashProcessInfo: sketchInternal.MSPLCrashProcessInfo;

