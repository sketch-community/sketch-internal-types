// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSConstantBaselineTypesetter extends NSATSTypesetter {
    /* typeEncoding=@"BCRangeMap", ivar=_rangeMap, attributes=(retain,nonatomic) */
    	rangeMap(): BCRangeMap;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding={_NSRange=QQ}24@0:8Q16 */
    	constantBaselineGlyphRangeForGlyphLocation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	invalidateLayoutFromGlyphLocation(...args: any[]): any;
    /* typeEncoding=@40@0:8^d16^d24^{_NSRange=QQ}32 */
    	maxLineHeightFontFromCurrentParagraph_maxLineHeight_charcterRange(...args: any[]): any;
    /* typeEncoding=d56@0:8Q16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rangeMap(...args: any[]): any;
    /* typeEncoding=v104@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16{_NSRange=QQ}48{CGRect={CGPoint=dd}{CGSize=dd}}64d96 */
    	setLineFragmentRect_forGlyphRange_usedRect_baselineOffset(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRangeMap(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	usesFontLeading(...args: any[]): any;
    /* typeEncoding=v56@0:8^{CGRect={CGPoint=dd}{CGSize=dd}}16{_NSRange=QQ}24^{CGRect={CGPoint=dd}{CGSize=dd}}40^d48 */
    	willSetLineFragmentRect_forGlyphRange_usedRect_baselineOffset(...args: any[]): any;
  }
}

declare const MSConstantBaselineTypesetter: sketchInternal.MSConstantBaselineTypesetter;

