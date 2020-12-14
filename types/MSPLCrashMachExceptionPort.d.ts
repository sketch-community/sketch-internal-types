// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashMachExceptionPort extends NSObject {
    /* typeEncoding=i, ivar=_behavior, attributes=(assign,nonatomic,readonly) */
    	behavior(): number;
    /* typeEncoding=i, ivar=_flavor, attributes=(assign,nonatomic,readonly) */
    	flavor(): number;
    /* typeEncoding=I, ivar=_mask, attributes=(assign,nonatomic,readonly) */
    	mask(): number;
    /* typeEncoding=I, ivar=_port, attributes=(assign,nonatomic,readonly) */
    	server_port(): number;
    /* typeEncoding=@32@0:8I16I20^@24 */
    	static exceptionPortsForTask_mask_error(...args: any[]): any;
    /* typeEncoding=@32@0:8I16I20^@24 */
    	static exceptionPortsForThread_mask_error(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	behavior(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=i16@0:8 */
    	flavor(...args: any[]): any;
    /* typeEncoding=@32@0:8I16I20i24i28 */
    	initWithServerPort_mask_behavior_flavor(...args: any[]): any;
    /* typeEncoding=I16@0:8 */
    	mask(...args: any[]): any;
    /* typeEncoding=c36@0:8I16^@20^@28 */
    	registerForTask_previousPortSet_error(...args: any[]): any;
    /* typeEncoding=c36@0:8I16^@20^@28 */
    	registerForThread_previousPortSet_error(...args: any[]): any;
    /* typeEncoding=I16@0:8 */
    	server_port(...args: any[]): any;
  }
}

declare const MSPLCrashMachExceptionPort: sketchInternal.MSPLCrashMachExceptionPort;

