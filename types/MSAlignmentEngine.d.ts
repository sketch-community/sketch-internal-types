// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAlignmentEngine extends NSObject {
    /* typeEncoding=@"MSAlignmentEngineResult", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	alignmentResult(): MSAlignmentEngineResult;
    /* typeEncoding=@"MSAlignmentEngineConstraint", ivar=_constraint, attributes=(assign,nonatomic,readonly) */
    	constraint(): MSAlignmentEngineConstraint;
    /* typeEncoding=@"_TtC17SketchControllers22MSAlignmentEngineCycle", ivar=_currentCycle, attributes=(assign,nonatomic,readonly) */
    	currentCycle(): _TtC17SketchControllers22MSAlignmentEngineCycle;
    /* typeEncoding=@"<MSAlignmentEngineDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=d, ivar=_snapDistance, attributes=(assign,nonatomic) */
    	snapDistance(): number;
    /* typeEncoding=@24@0:8@16 */
    	enumeratorForPossibleSnapTargetLayersInGroup(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	snapTargetsForCentersOfLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	addOrthogonalTargetsThroughPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addTarget(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    	addTargetAtPoint(...args: any[]): any;
    /* typeEncoding=v48@0:8{BCLineSegment={CGPoint=dd}{CGVector=dd}}16 */
    	addTargetWithLineSegment(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	addTargets(...args: any[]): any;
    /* typeEncoding=v100@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48{CGAffineTransform=dddddd}52 */
    	addTargetsForRect_includeCenter_transform(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	alignmentResult(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8{CGPoint=dd}16Q32 */
    	applyDelegateAlignment_snappedAxes(...args: any[]): any;
    /* typeEncoding=@40@0:8{CGPoint=dd}16@32 */
    	beginCycleWithPoint_constraint(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	canSnapOnAxis(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	constraint(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentCycle(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding={BCLineSegment={CGPoint=dd}{CGVector=dd}}64@0:8{BCLineSegment={CGPoint=dd}{CGVector=dd}}16{CGPoint=dd}48 */
    	extendGuide_toIncludePoint(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCycle(...args: any[]): any;
    /* typeEncoding=@40@0:8@16{CGPoint=dd}24 */
    	makeGuideFromAlignedTarget_point(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}32@0:8{CGPoint=dd}16 */
    	roundPoint(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setSnapDistance(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	snapDistance(...args: any[]): any;
  }
}

declare const MSAlignmentEngine: sketchInternal.MSAlignmentEngine;

