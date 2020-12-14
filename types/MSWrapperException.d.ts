// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSWrapperException extends NSObject {
    /* typeEncoding=@"NSData", ivar=_exceptionData, attributes=(retain,nonatomic) */
    	exceptionData(): cocoascript.NSData;
    /* typeEncoding=@"MSException", ivar=_modelException, attributes=(retain,nonatomic) */
    	modelException(): MSException;
    /* typeEncoding=@"NSNumber", ivar=_processId, attributes=(copy,nonatomic) */
    	processId(): cocoascript.NSNumber;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exceptionData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelException(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeToDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExceptionData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setModelException(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProcessId(...args: any[]): any;
  }
}

declare const MSWrapperException: sketchInternal.MSWrapperException;

