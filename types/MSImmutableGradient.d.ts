// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableGradient extends _MSImmutableGradient {
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasOpacity(): boolean;
    /* typeEncoding=@32@0:8@16@24 */
    	static gradientFromStops_colorSpace(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	NSGradientWithColorSpace(...args: any[]): any;
    /* typeEncoding=@64@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48@56 */
    	angularGradientImageInRect_colorSpace_tint(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	conditionedEllipseLength(...args: any[]): any;
    /* typeEncoding={CGAffineTransform=dddddd}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	ellipseTransformInRect(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	firstPoint(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasOpacity(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	interpolatedStartAndStopColorForStops(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	lastPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	migratePropertiesFromV119OrEarlierWithUnarchiver(...args: any[]): any;
    /* typeEncoding=^{CGImage=}72@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48@56@64 */
    	newAngularGradientImageInRect_stops_colorSpace_tint(...args: any[]): any;
    /* typeEncoding=^{CGGradient=}24@0:8^{CGColorSpace=}16 */
    	newCGGradientForColorSpace(...args: any[]): any;
    /* typeEncoding=^{CGGradient=}32@0:8^{CGColorSpace=}16@?24 */
    	newCGGradientForColorSpace_colorConverter(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8Q16 */
    	pointAtIndex(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sortedStops(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	stopAtIndex(...args: any[]): any;
  }
}

declare const MSImmutableGradient: sketchInternal.MSImmutableGradient;

