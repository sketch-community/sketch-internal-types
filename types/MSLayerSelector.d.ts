// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLayerSelector extends NSObject {
    /* typeEncoding=@"MSLayerArray", ivar=_initialSelection, attributes=(copy,nonatomic) */
    	initialSelection(): MSLayerArray;
    /* typeEncoding=@"MSPage", ivar=_page, attributes=(retain,nonatomic) */
    	page(): MSPage;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initialSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	page(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectAll(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setInitialSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPage(...args: any[]): any;
    /* typeEncoding=c60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48Q52 */
    	shouldUseArtboardSelectionModeForRect_extendSelection_options(...args: any[]): any;
    /* typeEncoding=v60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48Q52 */
    	updateSelectionWithRect_extendSelection_options(...args: any[]): any;
  }
}

declare const MSLayerSelector: sketchInternal.MSLayerSelector;

