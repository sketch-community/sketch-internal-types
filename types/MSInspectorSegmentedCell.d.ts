// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInspectorSegmentedCell extends NSSegmentedCell {
    /* typeEncoding=c, ivar=_drawHighlighted, attributes=(assign,nonatomic) */
    	drawHighlighted(): boolean;
    /* typeEncoding={CGPoint=dd}, ivar=_highlightLocation, attributes=(assign,nonatomic) */
    	highlightLocation(): CGPoint;
    /* typeEncoding=@"NSMutableDictionary", ivar=_images, attributes=(retain,nonatomic) */
    	images(): cocoascript.NSMutableDictionary;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}88@0:8Q16{CGRect={CGPoint=dd}{CGSize=dd}}24{CGRect={CGPoint=dd}{CGSize=dd}}56 */
    	clipRectForSegment_inRect_cellFrame(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	drawHighlighted(...args: any[]): any;
    /* typeEncoding=v64@0:8q16{CGRect={CGPoint=dd}{CGSize=dd}}24@56 */
    	drawSegment_inFrame_withView(...args: any[]): any;
    /* typeEncoding=v64@0:8d16{CGRect={CGPoint=dd}{CGSize=dd}}24d56 */
    	drawSeparatorAt_inRect_yInset(...args: any[]): any;
    /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	drawWithFrame_inView(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawingRectForBounds(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    	highlightLocation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	images(...args: any[]): any;
    /* typeEncoding=q56@0:8d16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	segmentForX_frame(...args: any[]): any;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16^d48 */
    	segmentWidthsForFrame_total(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setDrawHighlighted(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	setHighlightLocation(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHighlighted(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImages(...args: any[]): any;
    /* typeEncoding=v60@0:8{CGPoint=dd}16{CGPoint=dd}32@48c56 */
    	stopTracking_at_inView_mouseIsUp(...args: any[]): any;
  }
}

declare const MSInspectorSegmentedCell: sketchInternal.MSInspectorSegmentedCell;

