// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashMachExceptionServer extends NSObject {
    /* typeEncoding=I, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	serverThread(): number;
    /* typeEncoding=I24@0:8^@16 */
    	copySendRightForServerAndReturningError(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@28@0:8I16^@20 */
    	exceptionPortWithMask_error(...args: any[]): any;
    /* typeEncoding=@40@0:8^?16^v24^@32 */
    	initWithCallBack_context_error(...args: any[]): any;
    /* typeEncoding=I16@0:8 */
    	serverThread(...args: any[]): any;
  }
}

declare const MSPLCrashMachExceptionServer: sketchInternal.MSPLCrashMachExceptionServer;

