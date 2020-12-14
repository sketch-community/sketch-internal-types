// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFastPathBuilder extends NSObject {
    /* typeEncoding=@24@0:8@16 */
    	pathForMaskImage(...args: any[]): any;
    /* typeEncoding=v56@0:8{CGPoint=dd}16@32^{CGPoint=dd}40^{CGPoint=dd}48 */
    	addPoint_toPath_cachedPoint1_cachedPoint2(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	buildLineSegments(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	convertSegmentsIntoPath(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=v32@0:8@16^{CGPoint=dd}24 */
    	flushPath_cachedPoint2(...args: any[]): any;
    /* typeEncoding=@24@0:8^{CGImage=}16 */
    	initWithMask(...args: any[]): any;
    /* typeEncoding=v56@0:8{CGPoint=dd}16{CGPoint=dd}32@48 */
    	insertLineStart_end_intoDictionary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	path(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	pointFromValue(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	removeSegment_fromSegmentPath(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	unwindOneSegmentPath_intoPath(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	valueFromPoint(...args: any[]): any;
  }
}

declare const MSFastPathBuilder: sketchInternal.MSFastPathBuilder;

