// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSErrorReport extends NSObject {
    /* typeEncoding=@"NSDate", ivar=_appErrorTime, attributes=(assign,nonatomic,readonly) */
    	appErrorTime(): cocoascript.NSDate;
    /* typeEncoding=Q, ivar=_appProcessIdentifier, attributes=(assign,nonatomic,readonly) */
    	appProcessIdentifier(): number;
    /* typeEncoding=@"NSDate", ivar=_appStartTime, attributes=(assign,nonatomic,readonly) */
    	appStartTime(): cocoascript.NSDate;
    /* typeEncoding=@"MSDevice", ivar=_device, attributes=(assign,nonatomic,readonly) */
    	device(): MSDevice;
    /* typeEncoding=@"NSString", ivar=_exceptionName, attributes=(copy,nonatomic,readonly) */
    	exceptionName(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_exceptionReason, attributes=(copy,nonatomic,readonly) */
    	exceptionReason(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_incidentIdentifier, attributes=(copy,nonatomic,readonly) */
    	incidentIdentifier(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_reporterKey, attributes=(copy,nonatomic,readonly) */
    	reporterKey(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_signal, attributes=(copy,nonatomic) */
    	signal(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	appErrorTime(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	appProcessIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	appStartTime(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	device(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exceptionName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exceptionReason(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	incidentIdentifier(...args: any[]): any;
    /* typeEncoding=@88@0:8@16@24@32@40@48@56@64@72Q80 */
    	initWithErrorId_reporterKey_signal_exceptionName_exceptionReason_appStartTime_appErrorTime_device_appProcessIdentifier(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAppKill(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	reporterKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSignal(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	signal(...args: any[]): any;
  }
}

declare const MSErrorReport: sketchInternal.MSErrorReport;

