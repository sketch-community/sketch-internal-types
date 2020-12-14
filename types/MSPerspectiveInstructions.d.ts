// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPerspectiveInstructions extends NSObject {
    /* typeEncoding={CGPoint=dd}, ivar=_bottomLeft, attributes=(assign,nonatomic) */
    	bottomLeft(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_bottomRight, attributes=(assign,nonatomic) */
    	bottomRight(): CGPoint;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_rect, attributes=(assign,nonatomic) */
    	rect(): CGRect;
    /* typeEncoding={CGPoint=dd}, ivar=_topLeft, attributes=(assign,nonatomic) */
    	topLeft(): CGPoint;
    /* typeEncoding={CGPoint=dd}, ivar=_topRight, attributes=(assign,nonatomic) */
    	topRight(): CGPoint;
    /* typeEncoding=@24@0:8@16 */
    	applyToImage(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	bottomLeft(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	bottomRight(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rect(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setBottomLeft(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setBottomRight(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setRect(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setTopLeft(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setTopRight(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	topLeft(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	topRight(...args: any[]): any;
  }
}

declare const MSPerspectiveInstructions: sketchInternal.MSPerspectiveInstructions;

