// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReporter extends NSObject {
    /* typeEncoding=v16@0:8 */
    	static initialize(): void;
    /* typeEncoding=@16@0:8 */
    	static sharedReporter(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	crashReportDirectory(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	crashReportPath(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	enableCrashReporter(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	enableCrashReporterAndReturnError(...args: any[]): any;
    /* typeEncoding=@48@0:8^@16^?24^v32^@40 */
    	enableMachExceptionServerWithPreviousPortSet_callback_context_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	generateLiveReport(...args: any[]): any;
    /* typeEncoding=@24@0:8^@16 */
    	generateLiveReportAndReturnError(...args: any[]): any;
    /* typeEncoding=@20@0:8I16 */
    	generateLiveReportWithThread(...args: any[]): any;
    /* typeEncoding=@28@0:8I16^@20 */
    	generateLiveReportWithThread_error(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasPendingCrashReport(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32@40 */
    	initWithApplicationIdentifier_appVersion_appMarketingVersion_configuration(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithBundle_configuration(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithConfiguration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	loadPendingCrashReportData(...args: any[]): any;
    /* typeEncoding=@24@0:8^@16 */
    	loadPendingCrashReportDataAndReturnError(...args: any[]): any;
    /* typeEncoding=i24@0:8Q16 */
    	mapToAsyncSymbolicationStrategy(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	populateCrashReportDirectoryAndReturnError(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	purgePendingCrashReport(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	purgePendingCrashReportAndReturnError(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	queuedCrashReportDirectory(...args: any[]): any;
    /* typeEncoding=v24@0:8^{PLCrashReporterCallbacks=S^v^?}16 */
    	setCrashCallbacks(...args: any[]): any;
  }
}

declare const MSPLCrashReporter: sketchInternal.MSPLCrashReporter;

