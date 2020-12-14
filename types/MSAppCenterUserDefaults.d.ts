// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAppCenterUserDefaults extends NSObject {
    /* typeEncoding=v16@0:8 */
    	resetSharedInstance(): void;
    /* typeEncoding=@16@0:8 */
    	shared(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	getAppCenterKeyFrom(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	migrateKeys_forService(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	objectForKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	removeObjectForKey(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	setObject_forKey(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	swapKeys_newKey_value(...args: any[]): any;
  }
}

declare const MSAppCenterUserDefaults: sketchInternal.MSAppCenterUserDefaults;

