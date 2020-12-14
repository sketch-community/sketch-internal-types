// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorReplacement extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=_ignoreAlphaWhenMatchingOriginalColor, attributes=(assign,nonatomic,readonly) */
    	ignoreAlphaWhenMatchingOriginalColor(): boolean;
    /* typeEncoding=@"MSColor", ivar=_originalColor, attributes=(assign,nonatomic,readonly) */
    	originalColor(): MSColor;
    /* typeEncoding=c, ivar=_replaceAlphaOfOriginalColor, attributes=(assign,nonatomic,readonly) */
    	replaceAlphaOfOriginalColor(): boolean;
    /* typeEncoding=@"MSColor", ivar=_replacementColor, attributes=(assign,nonatomic,readonly) */
    	replacementColor(): MSColor;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	ignoreAlphaWhenMatchingOriginalColor(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24c32c36 */
    	initWithOriginalColor_replacementColor_ignoreAlphaWhenMatchingOriginalColor_replaceAlphaOfOriginalColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalColor(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	replaceAlphaOfOriginalColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	replacementColor(...args: any[]): any;
  }
}

declare const MSColorReplacement: sketchInternal.MSColorReplacement;

