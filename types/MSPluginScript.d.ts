// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginScript extends NSObject {
    /* typeEncoding=@"NSURL", ivar=_URL, attributes=(copy,nonatomic,readonly) */
    	URL(): cocoascript.NSURL;
    /* typeEncoding=@"NSString", ivar=_filename, attributes=(copy,nonatomic,readonly) */
    	filename(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_script, attributes=(copy,nonatomic,readonly) */
    	script(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	URL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filename(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithString_filename(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	initWithURL_error(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    	loadWithError(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reload(): void;
    /* typeEncoding=@16@0:8 */
    	script(...args: any[]): any;
  }
}

declare const MSPluginScript: sketchInternal.MSPluginScript;

