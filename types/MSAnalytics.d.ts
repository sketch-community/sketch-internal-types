// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAnalytics extends BCSingleton {
    /* typeEncoding=@"NSTimer", ivar=_dailyTimer, attributes=(retain,nonatomic) */
    	dailyTimer(): cocoascript.NSTimer;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSGoogleAnalyticsWrapper", ivar=_googleAnalytics, attributes=(retain,nonatomic) */
    	googleAnalytics(): MSGoogleAnalyticsWrapper;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSTimer", ivar=_hourlyTimer, attributes=(retain,nonatomic) */
    	hourlyTimer(): cocoascript.NSTimer;
    /* typeEncoding=c, ivar=_isEnabled, attributes=(assign,nonatomic) */
    	isEnabled(): boolean;
    /* typeEncoding=@"NSTimer", ivar=_monthlyTimer, attributes=(retain,nonatomic) */
    	monthlyTimer(): cocoascript.NSTimer;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@"NSTimer", ivar=_weeklyTimer, attributes=(retain,nonatomic) */
    	weeklyTimer(): cocoascript.NSTimer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v40@0:8@16@24@32 */
    	actionController_didFinishActionWithID_context(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	actionController_didInstantActionWithID_context(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	actionController_willBeginActionWithID_context(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dailyTimer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	googleAnalytics(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	hourlyTimer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEnabled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	monthlyTimer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	sendAppInfo(): void;
    /* typeEncoding=v24@0:8@16 */
    	setDailyTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGoogleAnalytics(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHourlyTimer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMonthlyTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWeeklyTimer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startTracking(): void;
    /* typeEncoding=v16@0:8 */
    	stopTracking(): void;
    /* typeEncoding=v40@0:8@16q24@?32 */
    	trackEvent_withInterval_conditional(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	trackEvent_withValue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	trackScreenWithName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	weeklyTimer(...args: any[]): any;
  }
}

declare const MSAnalytics: sketchInternal.MSAnalytics;

