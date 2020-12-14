// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDiff extends NSObject {
    /* typeEncoding=@"MSSubtreeRoot", ivar=_firstObjectRoot, attributes=(retain,nonatomic) */
    	firstObjectRoot(): MSSubtreeRoot;
    /* typeEncoding=@"MSSubtreeRoot", ivar=_secondObjectRoot, attributes=(retain,nonatomic) */
    	secondObjectRoot(): MSSubtreeRoot;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	contentDirtyDiffRectForPage(...args: any[]): any;
    /* typeEncoding=^{?={?=iiii}^{?}}32@0:8@16d24 */
    	createDirtyRegionForPage_zoomLevel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstObjectRoot(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithFirstObjectRoot_secondObjectRoot(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondObjectRoot(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFirstObjectRoot(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSecondObjectRoot(...args: any[]): any;
  }
}

declare const MSDiff: sketchInternal.MSDiff;

