// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFirstLineHeightTypesetter extends NSATSTypesetter {
    /* typeEncoding=@"<MSFirstLineTypesetterDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=d, ivar=_forcedBaselineOffset, attributes=(assign,nonatomic) */
    	forcedBaselineOffset(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	forcedBaselineOffset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setForcedBaselineOffset(...args: any[]): any;
    /* typeEncoding=v56@0:8^{CGRect={CGPoint=dd}{CGSize=dd}}16{_NSRange=QQ}24^{CGRect={CGPoint=dd}{CGSize=dd}}40^d48 */
    	willSetLineFragmentRect_forGlyphRange_usedRect_baselineOffset(...args: any[]): any;
  }
}

declare const MSFirstLineHeightTypesetter: sketchInternal.MSFirstLineHeightTypesetter;

