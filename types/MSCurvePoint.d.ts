// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCurvePoint extends _MSCurvePoint {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isEffectivelyStraight(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isStraight(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@16@0:8 */
    	point(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	pointWithPoint(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48 */
    	pointWithPoint_curveTo_curveFrom(...args: any[]): any;
    /* typeEncoding=v32@0:8q16q24 */
    	changeCurveModeTo_usingPoint(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	currentBehaviour(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	inferCurveMode(): void;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	initWithPoint(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGPoint=dd}16{CGPoint=dd}32{CGPoint=dd}48 */
    	initWithPoint_curveTo_curveFrom(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEffectivelyStraight(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isRounded(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isStraight(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8q16 */
    	locationOfPoint(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	moveCurveFromTo(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	moveCurveToTo(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	movePointTo(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	multiplyBy(...args: any[]): any;
  }
}

declare const MSCurvePoint: sketchInternal.MSCurvePoint;

