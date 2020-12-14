// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSGroupLayout extends _MSGroupLayout {
    /* typeEncoding=@"MSLayerGroup", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	group(): MSLayerGroup;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isInferredLayout(): boolean;
    /* typeEncoding=Q24@0:8Q16 */
    	adjustConstraintForResizingSubLayer(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	axis(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@?24 */
    	changeLayout_inBlock(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	desiredGroupLayerOrder(...args: any[]): any;
    /* typeEncoding=v32@0:8q16@24 */
    	didChangeLayout_info(...args: any[]): any;
    /* typeEncoding=c24@0:8q16 */
    	fixGeometryWithOptions(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	group(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	groupDidResizeFromSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	inferredLayoutParentOrNil(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isChangingLayout(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isInferredLayout(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isInferredLayoutOrInherits(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layersToConsiderForGroupBounds(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	layoutAnchor(...args: any[]): any;
    /* typeEncoding=Q24@0:8Q16 */
    	layoutAnchorByResolvingPossibleConflictWithParent(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originsOfContainedLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	postLayoutChangeCleanup(): void;
    /* typeEncoding=v24@0:8@16 */
    	setOriginsOfContainedLayers(...args: any[]): any;
    /* typeEncoding=c48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	shouldResizeToFitBounds(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	usedLayoutAnchor(...args: any[]): any;
    /* typeEncoding=@24@0:8q16 */
    	willChangeLayout(...args: any[]): any;
  }
}

declare const MSGroupLayout: sketchInternal.MSGroupLayout;

