// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSWrapperExceptionManager extends NSObject {
    /* typeEncoding=v24@0:8@16 */
    	static correlateLastSavedWrapperExceptionToReport(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	static deleteAllWrapperExceptions(): void;
    /* typeEncoding=v24@0:8@16 */
    	static deleteWrapperExceptionWithBaseFilename(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static deleteWrapperExceptionWithUUIDString(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	static load(): void;
    /* typeEncoding=@24@0:8@16 */
    	static loadWrapperExceptionWithBaseFilename(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static loadWrapperExceptionWithUUIDString(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	static saveWrapperException(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	static saveWrapperException_withBaseFilename(...args: any[]): any;
  }
}

declare const MSWrapperExceptionManager: sketchInternal.MSWrapperExceptionManager;

