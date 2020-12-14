// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSelectionOverlay extends SketchControllers.MSCollectionOverlay {
    /* typeEncoding=@"MSDragGestureRecognizer", ivar=(null), attributes=(retain,nonatomic) */
    	dragGestureRecognizer(): MSDragGestureRecognizer;
    /* typeEncoding=@"NSIndexPath", ivar=(null), attributes=(copy,nonatomic) */
    	indexPathForSubselection(): cocoascript.NSIndexPath;
    /* typeEncoding=q24@0:8@16 */
    	static cornerForHandleOfKind(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=q32@0:8{CGPoint=dd}16 */
    	cornerAtPoint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dragGestureRecognizer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	endDrag(): void;
    /* typeEncoding=v24@0:8@16 */
    	handleDrag(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	indexPathForSubselection(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithLayout(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	kindOfHandleAt(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reloadData(): void;
    /* typeEncoding=v24@0:8@16 */
    	setDragGestureRecognizer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIndexPathForSubselection(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	trackMouseWithLocation(...args: any[]): any;
    /* typeEncoding=c40@0:8{CGPoint=dd}16Q32 */
    	updateCursorWithLocation_modifierFlags(...args: any[]): any;
  }
}

declare const MSSelectionOverlay: sketchInternal.MSSelectionOverlay;

