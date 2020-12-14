// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAbstractErrorLog extends MSLogWithProperties {
    /* typeEncoding=@"NSDate", ivar=_appLaunchTimestamp, attributes=(retain,nonatomic) */
    	appLaunchTimestamp(): cocoascript.NSDate;
    /* typeEncoding=@"NSString", ivar=_architecture, attributes=(copy,nonatomic) */
    	architecture(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_id, attributes=(copy,nonatomic) */
    	errorId(): cocoascript.NSString;
    /* typeEncoding=@"NSNumber", ivar=_errorThreadId, attributes=(retain,nonatomic) */
    	errorThreadId(): cocoascript.NSNumber;
    /* typeEncoding=@"NSString", ivar=_errorThreadName, attributes=(copy,nonatomic) */
    	errorThreadName(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_fatal, attributes=(assign,nonatomic,getter=isFatal) */
    	fatal(): boolean;
    /* typeEncoding=@"NSNumber", ivar=_parentProcessId, attributes=(retain,nonatomic) */
    	parentProcessId(): cocoascript.NSNumber;
    /* typeEncoding=@"NSString", ivar=_parentProcessName, attributes=(copy,nonatomic) */
    	parentProcessName(): cocoascript.NSString;
    /* typeEncoding=@"NSNumber", ivar=_processId, attributes=(retain,nonatomic) */
    	processId(): cocoascript.NSNumber;
    /* typeEncoding=@"NSString", ivar=_processName, attributes=(copy,nonatomic) */
    	processName(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	appLaunchTimestamp(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	architecture(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	errorId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	errorThreadId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	errorThreadName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFatal(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValid(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentProcessId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentProcessName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeToDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAppLaunchTimestamp(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setArchitecture(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setErrorId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setErrorThreadId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setErrorThreadName(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setFatal(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setParentProcessId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setParentProcessName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProcessId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProcessName(...args: any[]): any;
  }
}

declare const MSAbstractErrorLog: sketchInternal.MSAbstractErrorLog;

