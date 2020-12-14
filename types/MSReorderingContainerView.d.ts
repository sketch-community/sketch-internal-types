// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSReorderingContainerView extends NSView {
    /* typeEncoding=@"<MSReorderingContainerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSArray", ivar=_subViewDestinationFrames, attributes=(retain,nonatomic) */
    	subViewDestinationFrames(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	destinationFramesForSubviews(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingEntered(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	draggingUpdated(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	draggingView(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	hoverIndexForDraggingInfo(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	moveDraggedViewToRowAtIndex(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	numberOfReorderableSubviews(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	performDragOperation(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	reorderSubviewsAnimated(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSubViewDestinationFrames(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	startOffsetForStacking(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subViewDestinationFrames(...args: any[]): any;
  }
}

declare const MSReorderingContainerView: sketchInternal.MSReorderingContainerView;

