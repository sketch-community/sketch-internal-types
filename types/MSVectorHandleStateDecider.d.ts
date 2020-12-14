// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSVectorHandleStateDecider extends NSObject {
    /* typeEncoding=@"_TtC17SketchControllers26MSVectorComponentSpecifier", ivar=_highlightedComponent, attributes=(copy,nonatomic) */
    	highlightedComponent(): _TtC17SketchControllers26MSVectorComponentSpecifier;
    /* typeEncoding=@"MSShapeChangeContext", ivar=_selectionContext, attributes=(copy,nonatomic) */
    	selectionContext(): MSShapeChangeContext;
    /* typeEncoding=q, ivar=_visibilityAroundHighlight, attributes=(assign,nonatomic) */
    	visibilityAroundHighlight(): number;
    /* typeEncoding=q, ivar=_visibilityAroundSelectedHandles, attributes=(assign,nonatomic) */
    	visibilityAroundSelectedHandles(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	highlightedComponent(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	highlightedOrSelectedStateForHandle(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	indexPathOfPointAfterIndexPath(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	indexPathOfPointBeforeIndexPath(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isCurveAdjustmentHandleVisibleDueToHighlightedHandle(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isCurveAdjustmentHandleVisibleDueToSelectedHandles(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isCurvePointAtIndexPathSelected(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	isHandleAtIndexPath_relevantToSegmentAtIndexPath(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isHandleSelected(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isHandleVisible(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	reset(): void;
    /* typeEncoding=@16@0:8 */
    	selectionContext(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setHighlightedComponent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectionContext(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setVisibilityAroundHighlight(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setVisibilityAroundSelectedHandles(...args: any[]): any;
    /* typeEncoding=Q40@0:8@16^Q24^Q32 */
    	stateOfCurvePointAtIndexPath_curveToState_curveFromState(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	visibilityAroundHighlight(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	visibilityAroundSelectedHandles(...args: any[]): any;
  }
}

declare const MSVectorHandleStateDecider: sketchInternal.MSVectorHandleStateDecider;

