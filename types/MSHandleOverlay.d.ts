// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSHandleOverlay extends SketchControllers.MSCollectionOverlay {
    /* typeEncoding=@"MSClickGestureRecognizer", ivar=(null), attributes=(retain,nonatomic) */
    	clickGestureRecognizer(): MSClickGestureRecognizer;
    /* typeEncoding=@"MSDragHandleGestureRecognizer", ivar=(null), attributes=(retain,nonatomic) */
    	dragGestureRecognizer(): MSDragHandleGestureRecognizer;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(copy,nonatomic) */
    	draggedIndexPaths(): cocoascript.NSSet;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	clickGestureRecognizer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragGestureRecognizer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	dragHandle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	draggedIndexPaths(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithLayout(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	maybeEndEditing(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setClickGestureRecognizer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDragGestureRecognizer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDraggedIndexPaths(...args: any[]): any;
  }
}

declare const MSHandleOverlay: sketchInternal.MSHandleOverlay;

