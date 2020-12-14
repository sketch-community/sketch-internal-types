// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSNewsTrigger extends BCSingleton {
    /* typeEncoding=@"NSURLSession", ivar=_urlSession, attributes=(retain,nonatomic) */
    	urlSession(): cocoascript.NSURLSession;
    /* typeEncoding=@"NSWindowController", ivar=_windowController, attributes=(retain,nonatomic) */
    	windowController(): cocoascript.NSWindowController;
    /* typeEncoding=v16@0:8 */
    	checkForNews(): void;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	checkForNews(): void;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUrlSession(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWindowController(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldShowNewsWithID(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	showURL_newsID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	url(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	urlSession(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	validateResult(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	windowController(...args: any[]): any;
  }
}

declare const MSNewsTrigger: sketchInternal.MSNewsTrigger;

