// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPathController extends NSObject {
    /* typeEncoding=@"MSShapeChangeContext", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	changeContext(): MSShapeChangeContext;
    /* typeEncoding=@"NSArray", ivar=_content, attributes=(copy,nonatomic) */
    	content(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectedObjects(): cocoascript.NSArray;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic) */
    	selectionComponents(): cocoascript.NSArray;
    /* typeEncoding=@16@0:8 */
    	keyPathsForValuesAffectingSelectedObjects(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	changeContext(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	changeCurveMode(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	content(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentCurveMode(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	didChangeSelection(): void;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	invalidateChangeContext(): void;
    /* typeEncoding=v24@0:8@16 */
    	remove(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	runChange(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	runChange_context(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectNext(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	selectPrevious(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectionComponents(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectionComponent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectionComponents(...args: any[]): any;
  }
}

declare const MSPathController: sketchInternal.MSPathController;

