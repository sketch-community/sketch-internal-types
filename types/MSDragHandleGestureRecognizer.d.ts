// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDragHandleGestureRecognizer extends MSDragToMoveOrCopyGestureRecognizer {
    /* typeEncoding=@"MSAlignmentEngineConstraint", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	effectiveLockingConstraint(): MSAlignmentEngineConstraint;
    /* typeEncoding=@"MSAlignmentEngineConstraint", ivar=_lockingConstraint, attributes=(copy,nonatomic) */
    	lockingConstraint(): MSAlignmentEngineConstraint;
    /* typeEncoding={CGPoint=dd}, ivar=_originalHandleLocation, attributes=(assign,nonatomic) */
    	originalHandleLocation(): CGPoint;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	effectiveLockingConstraint(...args: any[]): any;
    /* typeEncoding=@32@0:8@16:24 */
    	initWithTarget_action(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lockingConstraint(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	originalHandleLocation(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reset(): void;
    /* typeEncoding=v24@0:8@16 */
    	setLockingConstraint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setOriginalHandleLocation(...args: any[]): any;
  }
}

declare const MSDragHandleGestureRecognizer: sketchInternal.MSDragHandleGestureRecognizer;

