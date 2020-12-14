// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextLayout extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_baselineOffsets, attributes=(copy,nonatomic,readonly) */
    	baselineOffsets(): cocoascript.NSArray;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	firstBaselineOffset(): number;
    /* typeEncoding=d, ivar=_firstLineCapOffset, attributes=(assign,nonatomic,readonly) */
    	firstLineCapOffset(): number;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	lastBaselineOffset(): number;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_lineFragmentBounds, attributes=(assign,nonatomic,readonly) */
    	lineFragmentBounds(): CGRect;
    /* typeEncoding=@"NSArray", ivar=_lineFragmentRectangles, attributes=(copy,nonatomic,readonly) */
    	lineFragmentRectangles(): cocoascript.NSArray;
    /* typeEncoding=@24@0:8@16 */
    	textLayoutForLayoutManager(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	baselineOffsets(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	firstBaselineOffset(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	firstLineCapOffset(...args: any[]): any;
    /* typeEncoding=@72@0:8@16d24@32{CGRect={CGPoint=dd}{CGSize=dd}}40 */
    	initWithBaselineOffsets_firstLineCapOffset_lineFragments_lineFragmentBounds(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	lastBaselineOffset(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	lineFragmentBounds(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lineFragmentRectangles(...args: any[]): any;
  }
}

declare const MSTextLayout: sketchInternal.MSTextLayout;

