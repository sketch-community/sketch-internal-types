// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorReplacementUpdater extends NSObject {
    /* typeEncoding=@"MSColor", ivar=_color, attributes=(assign,nonatomic,readonly) */
    	color(): MSColor;
    /* typeEncoding=@"NSColorSpace", ivar=_colorSpace, attributes=(assign,nonatomic,readonly) */
    	colorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_ignoreAlphaWhenMatching, attributes=(assign,nonatomic,readonly) */
    	ignoreAlphaWhenMatching(): boolean;
    /* typeEncoding=@"MSImmutableColor", ivar=_immutableColor, attributes=(assign,nonatomic,readonly) */
    	immutableColor(): MSImmutableColor;
    /* typeEncoding=@"MSImmutableColor", ivar=_immutableReplacementColor, attributes=(assign,nonatomic,readonly) */
    	immutableReplacementColor(): MSImmutableColor;
    /* typeEncoding=c, ivar=_replaceAlphaOfOriginalColor, attributes=(assign,nonatomic,readonly) */
    	replaceAlphaOfOriginalColor(): boolean;
    /* typeEncoding=@"MSColor", ivar=_replacementColor, attributes=(assign,nonatomic,readonly) */
    	replacementColor(): MSColor;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	color(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	colorSpace(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	ignoreAlphaWhenMatching(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableReplacementColor(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24@32c40c44 */
    	initWithColor_replacementColor_colorSpace_ignoreAlphaWhenMatching_replaceAlphaOfOriginalColor(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	replaceAlphaOfOriginalColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	replacementColor(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldUpdateColor(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldUpdateImmutableColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	updateColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	updateImmutableColor(...args: any[]): any;
  }
}

declare const MSColorReplacementUpdater: sketchInternal.MSColorReplacementUpdater;

