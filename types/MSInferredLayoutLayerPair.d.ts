// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInferredLayoutLayerPair extends NSObject {
    /* typeEncoding=Q, ivar=_axis, attributes=(assign,nonatomic,readonly) */
    	axis(): number;
    /* typeEncoding=Q, ivar=_layoutAnchor, attributes=(assign,nonatomic,readonly) */
    	layoutAnchor(): number;
    /* typeEncoding=@"MSImmutableLayerGroup", ivar=_oldLayerGroup, attributes=(assign,nonatomic,readonly) */
    	oldLayerGroup(): MSImmutableLayerGroup;
    /* typeEncoding=@"MSImmutableLayer", ivar=_oldLayerState, attributes=(assign,nonatomic,readonly) */
    	oldLayerState(): MSImmutableLayer;
    /* typeEncoding=@"MSLayer", ivar=_updatedLayerState, attributes=(assign,nonatomic,readonly) */
    	updatedLayerState(): MSLayer;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	axis(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	calculateChangeInSize(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	changeInSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=@56@0:8@16@24@32Q40Q48 */
    	initWithOldLayer_updatedToNewLayer_inGroup_layoutAxis_anchor(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isInstanceThatWasHidden(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	layoutAnchor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oldLayerGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oldLayerState(...args: any[]): any;
    /* typeEncoding={_NSRange=QQ}16@0:8 */
    	rangeOfOldLayerFrame(...args: any[]): any;
    /* typeEncoding=d32@0:8@16^c24 */
    	trailingMarginForLayer_detectedStack(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updatedLayerState(...args: any[]): any;
  }
}

declare const MSInferredLayoutLayerPair: sketchInternal.MSInferredLayoutLayerPair;

