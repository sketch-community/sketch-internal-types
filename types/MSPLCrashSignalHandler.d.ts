// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashSignalHandler extends NSObject {
    /* typeEncoding=v16@0:8 */
    	static initialize(): void;
    /* typeEncoding=v16@0:8 */
    	static resetHandlers(): void;
    /* typeEncoding=@16@0:8 */
    	static sharedHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c44@0:8i16^?20^v28^@36 */
    	registerHandlerForSignal_callback_context_error(...args: any[]): any;
    /* typeEncoding=c28@0:8i16^@20 */
    	registerHandlerWithSignal_error(...args: any[]): any;
  }
}

declare const MSPLCrashSignalHandler: sketchInternal.MSPLCrashSignalHandler;

