// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSUserAssetLibrary extends MSAssetLibrary {
    /* typeEncoding=@"MSFileMonitor", ivar=_fileMonitor, attributes=(retain,nonatomic) */
    	fileMonitor(): MSFileMonitor;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	canOpen(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fileMonitor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	libraryType(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	loadAsyncWithDispatchGroup_completionHandler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	loadSynchronously(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	openWithCompletionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	resolveLocationOnDisk(): void;
    /* typeEncoding=v20@0:8c16 */
    	setEnabled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFileMonitor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startMonitoring(): void;
  }
}

declare const MSUserAssetLibrary: sketchInternal.MSUserAssetLibrary;

