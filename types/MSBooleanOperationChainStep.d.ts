// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBooleanOperationChainStep extends NSObject {
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	effectiveOperation(): number;
    /* typeEncoding=q, ivar=_operation, attributes=(assign,nonatomic) */
    	operation(): number;
    /* typeEncoding=@"MSPath", ivar=_path, attributes=(retain,nonatomic) */
    	path(): MSPath;
    /* typeEncoding=@32@0:8@16q24 */
    	static booleanOperationChainStepWithPath_operation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=q16@0:8 */
    	effectiveOperation(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	operation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPath(...args: any[]): any;
  }
}

declare const MSBooleanOperationChainStep: sketchInternal.MSBooleanOperationChainStep;

