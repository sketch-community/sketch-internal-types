// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDragToMoveOrCopyGestureRecognizer extends MSDragGestureRecognizer {
    /* typeEncoding=Q, ivar=_alignModifierMask, attributes=(assign,nonatomic) */
    	alignModifierMask(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isAligned) */
    	aligned(): boolean;
    /* typeEncoding=@"NSNumber", ivar=_alignmentAxis, attributes=(assign,nonatomic,readonly) */
    	alignmentAxis(): cocoascript.NSNumber;
    /* typeEncoding=d, ivar=_alignmentDistance, attributes=(assign,nonatomic) */
    	alignmentDistance(): number;
    /* typeEncoding=@"NSArray", ivar=_copiedItems, attributes=(copy,nonatomic) */
    	copiedItems(): cocoascript.NSArray;
    /* typeEncoding=@, ivar=_draggedItem, attributes=(retain,nonatomic) */
    	draggedItem(): any;
    /* typeEncoding=@"NSArray", ivar=_originalDragPositions, attributes=(copy,nonatomic) */
    	originalDragPositions(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=_originalDraggedItems, attributes=(copy,nonatomic) */
    	originalDraggedItems(): cocoascript.NSArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldCopyDraggedItems(): boolean;
    /* typeEncoding=c, ivar=_shouldInterpretAlignment, attributes=(assign,nonatomic) */
    	shouldInterpretAlignment(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldSnap(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	alignModifierMask(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	alignmentAxis(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	alignmentDistance(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	copiedItems(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	draggedItem(...args: any[]): any;
    /* typeEncoding=@32@0:8@16:24 */
    	initWithTarget_action(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isAligned(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}24@0:8@16 */
    	locationInLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalDragPositions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalDraggedItems(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	recalculateAlignmentAxis(): void;
    /* typeEncoding=v16@0:8 */
    	reset(): void;
    /* typeEncoding=v24@0:8Q16 */
    	setAlignModifierMask(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setAlignmentDistance(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCopiedItems(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDraggedItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalDragPositions(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalDraggedItems(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldInterpretAlignment(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setState(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldCopyDraggedItems(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldInterpretAlignment(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldSnap(...args: any[]): any;
    /* typeEncoding={CGVector=dd}24@0:8@16 */
    	translationInLayer(...args: any[]): any;
  }
}

declare const MSDragToMoveOrCopyGestureRecognizer: sketchInternal.MSDragToMoveOrCopyGestureRecognizer;

