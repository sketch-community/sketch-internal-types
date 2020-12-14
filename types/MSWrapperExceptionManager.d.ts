// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSWrapperExceptionManager extends NSObject {
    /* typeEncoding=v24@0:8@16 */
    	correlateLastSavedWrapperExceptionToReport(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	deleteAllWrapperExceptions(): void;
    /* typeEncoding=v24@0:8@16 */
    	deleteWrapperExceptionWithBaseFilename(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	deleteWrapperExceptionWithUUIDString(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	load(): void;
    /* typeEncoding=@24@0:8@16 */
    	loadWrapperExceptionWithBaseFilename(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	loadWrapperExceptionWithUUIDString(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	saveWrapperException(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	saveWrapperException_withBaseFilename(...args: any[]): any;
  }
}

declare const MSWrapperExceptionManager: sketchInternal.MSWrapperExceptionManager;

