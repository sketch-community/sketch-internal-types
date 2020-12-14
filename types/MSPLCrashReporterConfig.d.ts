// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReporterConfig extends NSObject {
    /* typeEncoding=c, ivar=_shouldRegisterUncaughtExceptionHandler, attributes=(assign,nonatomic,readonly) */
    	shouldRegisterUncaughtExceptionHandler(): boolean;
    /* typeEncoding=Q, ivar=_signalHandlerType, attributes=(assign,nonatomic,readonly) */
    	signalHandlerType(): number;
    /* typeEncoding=Q, ivar=_symbolicationStrategy, attributes=(assign,nonatomic,readonly) */
    	symbolicationStrategy(): number;
    /* typeEncoding=@16@0:8 */
    	static defaultConfiguration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8Q16Q24 */
    	initWithSignalHandlerType_symbolicationStrategy(...args: any[]): any;
    /* typeEncoding=@36@0:8Q16Q24c32 */
    	initWithSignalHandlerType_symbolicationStrategy_shouldRegisterUncaughtExceptionHandler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldRegisterUncaughtExceptionHandler(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	signalHandlerType(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	symbolicationStrategy(...args: any[]): any;
  }
}

declare const MSPLCrashReporterConfig: sketchInternal.MSPLCrashReporterConfig;

