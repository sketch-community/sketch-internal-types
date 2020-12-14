// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBooleanOperationChain extends NSObject {
    /* typeEncoding=Q, ivar=_elementCount, attributes=(assign,nonatomic) */
    	elementCount(): number;
    /* typeEncoding=Q, ivar=_maximumElementCount, attributes=(assign,nonatomic,readonly) */
    	maximumElementCount(): number;
    /* typeEncoding=@"MSPath", ivar=_resultPath, attributes=(retain,nonatomic) */
    	resultPath(): MSPath;
    /* typeEncoding=@"NSMutableArray", ivar=_steps, attributes=(retain,nonatomic) */
    	steps(): cocoascript.NSMutableArray;
    /* typeEncoding=@"MSPath", ivar=_subjectPath, attributes=(retain,nonatomic) */
    	subjectPath(): MSPath;
    /* typeEncoding=@24@0:8@16 */
    	static booleanOperationChainWithSubjectPath(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=q32@0:8@16q24 */
    	addClippingPath_forBooleanOperation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	calculateResultPath(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	elementCount(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	initWithSubjectPath_maximumElementCount(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	maximumElementCount(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	resultPath(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setElementCount(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setResultPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSteps(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSubjectPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	steps(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subjectPath(...args: any[]): any;
  }
}

declare const MSBooleanOperationChain: sketchInternal.MSBooleanOperationChain;

