// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPasteboardImageProvider extends NSObject {
    /* typeEncoding=@"NSData", ivar=_data, attributes=(retain,nonatomic) */
    	data(): cocoascript.NSData;
    /* typeEncoding=@"NSOperationQueue", ivar=_queue, attributes=(assign,nonatomic,readonly) */
    	queue(): cocoascript.NSOperationQueue;
    /* typeEncoding=@"MSExportRequest", ivar=_request, attributes=(copy,nonatomic) */
    	request(): MSExportRequest;
    /* typeEncoding=v32@0:8@16@24 */
    	preparePasteboard_withExportRequest(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	pasteboard_provideDataForType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	queue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	request(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRequest(...args: any[]): any;
  }
}

declare const MSPasteboardImageProvider: sketchInternal.MSPasteboardImageProvider;

