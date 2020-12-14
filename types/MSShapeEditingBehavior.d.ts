// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShapeEditingBehavior extends NSObject {
    /* typeEncoding=c, ivar=_allowClosingPathUsingMouse, attributes=(assign,nonatomic) */
    	allowClosingPathUsingMouse(): boolean;
    /* typeEncoding=c, ivar=_allowSelectionOnly, attributes=(assign,nonatomic) */
    	allowSelectionOnly(): boolean;
    /* typeEncoding=c, ivar=_isNewShape, attributes=(assign,nonatomic,readonly) */
    	isNewShape(): boolean;
    /* typeEncoding=v16@0:8 */
    	initialize(): void;
    /* typeEncoding=c16@0:8 */
    	allowClosingPathUsingMouse(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowSelectionOnly(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canInsertPoints(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@20@0:8c16 */
    	initForDrawingNewShape(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isAddingPoints(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isNewShape(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAllowClosingPathUsingMouse(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAllowSelectionOnly(...args: any[]): any;
    /* typeEncoding=c40@0:8@16Q24@32 */
    	shouldClosePathWhenMouseDownOnHandleAtIndexPath_modifierFlags_context(...args: any[]): any;
  }
}

declare const MSShapeEditingBehavior: sketchInternal.MSShapeEditingBehavior;

