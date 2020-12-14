// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableRect extends _MSImmutableRect {
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	origin(): CGPoint;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rect(): CGRect;
    /* typeEncoding={CGSize=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	size(): CGSize;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithRect(...args: any[]): any;
    /* typeEncoding=@52@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48 */
    	initWithRect_constrainProportions(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	origin(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rect(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	size(...args: any[]): any;
  }
}

declare const MSImmutableRect: sketchInternal.MSImmutableRect;

