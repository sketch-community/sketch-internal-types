// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSInferredLayoutApplier extends NSObject {
    /* typeEncoding=@"MSLayerGroup", ivar=_groupAfter, attributes=(retain,nonatomic) */
    	groupAfter(): MSLayerGroup;
    /* typeEncoding=@"MSImmutableLayerGroup", ivar=_groupBefore, attributes=(retain,nonatomic) */
    	groupBefore(): MSImmutableLayerGroup;
    /* typeEncoding=v32@0:8@16@24 */
    	static applyInferredLayoutRulesInGroup_recordedState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8d16 */
    	adjustGroupBoundsWithChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	applyInferredLayoutRules(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	applyInferredLayoutToLayer_becauseOfChangeInRegion(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	axis(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	changedLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupAfter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	groupBefore(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithGroup_recordedState(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	layer_isFixedOnAxis(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	layer_isPinnedMaxOnAxis(...args: any[]): any;
    /* typeEncoding=c32@0:8@16Q24 */
    	layer_isPinnedMinOnAxis(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	layoutAnchor(...args: any[]): any;
    /* typeEncoding=Q32@0:8@16@24 */
    	layoutChangeForLayer_becauseOfChangeInRegion(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	originalRectOfLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGroupAfter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setGroupBefore(...args: any[]): any;
  }
}

declare const MSInferredLayoutApplier: sketchInternal.MSInferredLayoutApplier;

