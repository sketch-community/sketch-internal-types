// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSErrorLogFormatter extends NSObject {
    /* typeEncoding=@32@0:8@16@24 */
    	addProcessInfoAndApplicationPathTo_fromCrashReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	addressesFromReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	anonymizedPathFromPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	errorIdForCrashReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	errorLogFromCrashReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	errorReportFromCrashReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	errorReportFromLog(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	extractBinaryImagesFromReport_is64bit(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	extractExceptionReasonFromReport(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	extractRegistersFromCrashedThread_is64bit(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	extractThreadsFromReport_crashedThread_is64bit(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	findCrashedThreadInReport(...args: any[]): any;
    /* typeEncoding=@28@0:8Q16c24 */
    	formatAddress_is64bit(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	formatStackFrame_report(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	getAppLaunchTimeFromReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	getCrashTimeFromReport(...args: any[]): any;
    /* typeEncoding=q32@0:8@16@24 */
    	imageTypeForImagePath_processPath(...args: any[]): any;
    /* typeEncoding=c40@0:8Q16Q24@32 */
    	isBinaryWithStart_end_inAddresses(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	isCodeType64bit(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	selectorForRegisterWithName_ofThread_report(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24Q32 */
    	selectorRegisterValueFromReport_ofCrashedThread_codeType(...args: any[]): any;
    /* typeEncoding=@24@0:8^{__CFUUID=}16 */
    	uuidRefToString(...args: any[]): any;
  }
}

declare const MSErrorLogFormatter: sketchInternal.MSErrorLogFormatter;

