// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBezierInterpreter extends NSObject {
    /* typeEncoding=@"NSBezierPath", ivar=_bezierPath, attributes=(retain,nonatomic) */
    	bezierPath(): cocoascript.NSBezierPath;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_rect, attributes=(assign,nonatomic) */
    	rect(): CGRect;
    /* typeEncoding=@56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	pointsFromBezierPath_inRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	bezierPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	points(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBezierPath(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setRect(...args: any[]): any;
  }
}

declare const MSBezierInterpreter: sketchInternal.MSBezierInterpreter;

