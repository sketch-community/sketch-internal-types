// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSUpdateController extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_hasAvailableUpdates, attributes=(assign,nonatomic) */
    	hasAvailableUpdates(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=Q, ivar=_unavailableUpdateCount, attributes=(assign,nonatomic) */
    	unavailableUpdateCount(): number;
    /* typeEncoding=c, ivar=_updateInProgress, attributes=(assign,nonatomic) */
    	updateInProgress(): boolean;
    /* typeEncoding=v24@0:8@16 */
    	appCastFetchFailedWithError(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	bestValidUpdateInAppcast_forUpdater(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	checkNormally(): void;
    /* typeEncoding=v16@0:8 */
    	checkQuietly(): void;
    /* typeEncoding=v16@0:8 */
    	checkSilently(): void;
    /* typeEncoding=@24@0:8@16 */
    	checkerWithAppcast(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	commandEnabled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	commandLabel(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	feedURLStringForUpdater(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	fetchAppcastWithCompletion(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasAvailableUpdates(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	parseAppcast_withCompletion(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasAvailableUpdates(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setUnavailableUpdateCount(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setUpdateInProgress(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	storeResultsFromChecker(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	unavailableUpdateCount(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	updateInProgress(...args: any[]): any;
  }
}

declare const MSUpdateController: sketchInternal.MSUpdateController;

