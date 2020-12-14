// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSThread extends NSObject {
    /* typeEncoding=@"MSException", ivar=_exception, attributes=(retain,nonatomic) */
    	exception(): MSException;
    /* typeEncoding=@"NSMutableArray", ivar=_frames, attributes=(retain,nonatomic) */
    	frames(): cocoascript.NSMutableArray;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"NSNumber", ivar=_threadId, attributes=(retain,nonatomic) */
    	threadId(): cocoascript.NSNumber;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exception(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	frames(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValid(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeToDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setException(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFrames(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setThreadId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	threadId(...args: any[]): any;
  }
}

declare const MSThread: sketchInternal.MSThread;

