// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSWrapperCrashesHelper extends NSObject {
    /* typeEncoding=@"<MSCrashHandlerSetupDelegate>", ivar=_crashHandlerSetupDelegate, attributes=(assign,nonatomic,weak) */
    	crashHandlerSetupDelegate(): any;
    /* typeEncoding=@24@0:8@16 */
    	static buildHandledErrorReportWithErrorID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static getCrashHandlerSetupDelegate(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	static sendCrashReportsOrAwaitUserConfirmationForFilteredIds(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	static sendErrorAttachments_withIncidentIdentifier(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	static setAutomaticProcessing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static setCrashHandlerSetupDelegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static sharedInstance(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	static trackModelException_withProperties_withAttachments(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static unprocessedCrashReports(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	crashHandlerSetupDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCrashHandlerSetupDelegate(...args: any[]): any;
  }
}

declare const MSWrapperCrashesHelper: sketchInternal.MSWrapperCrashesHelper;

