// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSErrorLogFormatter extends NSObject {
    /* typeEncoding=@32@0:8@16@24 */
    	static addProcessInfoAndApplicationPathTo_fromCrashReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static addressesFromReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static anonymizedPathFromPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static errorIdForCrashReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static errorLogFromCrashReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static errorReportFromCrashReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static errorReportFromLog(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	static extractBinaryImagesFromReport_is64bit(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static extractExceptionReasonFromReport(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	static extractRegistersFromCrashedThread_is64bit(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	static extractThreadsFromReport_crashedThread_is64bit(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static findCrashedThreadInReport(...args: any[]): any;
    /* typeEncoding=@28@0:8Q16c24 */
    	static formatAddress_is64bit(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static formatStackFrame_report(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static getAppLaunchTimeFromReport(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static getCrashTimeFromReport(...args: any[]): any;
    /* typeEncoding=q32@0:8@16@24 */
    	static imageTypeForImagePath_processPath(...args: any[]): any;
    /* typeEncoding=c40@0:8Q16Q24@32 */
    	static isBinaryWithStart_end_inAddresses(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	static isCodeType64bit(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	static selectorForRegisterWithName_ofThread_report(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24Q32 */
    	static selectorRegisterValueFromReport_ofCrashedThread_codeType(...args: any[]): any;
    /* typeEncoding=@24@0:8^{__CFUUID=}16 */
    	static uuidRefToString(...args: any[]): any;
  }
}

declare const MSErrorLogFormatter: sketchInternal.MSErrorLogFormatter;

