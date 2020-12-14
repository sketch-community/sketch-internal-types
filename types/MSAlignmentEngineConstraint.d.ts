// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAlignmentEngineConstraint extends NSObject {
    /* typeEncoding={CGVector=dd}, ivar=_direction, attributes=(assign,nonatomic,readonly) */
    	direction(): CGVector;
    /* typeEncoding={BCLine=ddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	line(): BCLine;
    /* typeEncoding={CGPoint=dd}, ivar=_sourcePoint, attributes=(assign,nonatomic,readonly) */
    	sourcePoint(): CGPoint;
    /* typeEncoding=@48@0:8{CGPoint=dd}16{CGPoint=dd}32 */
    	static axisAlignedOrDiagonalConstraintFromPoint_toPoint(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16{CGPoint=dd}32 */
    	static constraintWithSourcePoint_toPoint(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGAffineTransform=dddddd}16 */
    	constraintByApplyingTransform(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding={CGVector=dd}16@0:8 */
    	direction(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGPoint=dd}16{CGVector=dd}32 */
    	initWithPoint_direction(...args: any[]): any;
    /* typeEncoding={BCLine=ddd}16@0:8 */
    	line(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	sourcePoint(...args: any[]): any;
  }
}

declare const MSAlignmentEngineConstraint: sketchInternal.MSAlignmentEngineConstraint;

