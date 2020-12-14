// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSColorSpaceConverter extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocumentData", ivar=_documentData, attributes=(assign,nonatomic,readonly) */
    	documentData(): MSDocumentData;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=_oldColorSpace, attributes=(assign,nonatomic,readonly) */
    	oldColorSpace(): number;
    /* typeEncoding=@"NSColorSpace", ivar=_oldNSColorSpace, attributes=(assign,nonatomic,readonly) */
    	oldNSColorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=Q, ivar=_targetColorSpace, attributes=(assign,nonatomic,readonly) */
    	targetColorSpace(): number;
    /* typeEncoding=@"NSColorSpace", ivar=_targetNSColorSpace, attributes=(assign,nonatomic,readonly) */
    	targetNSColorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c24@0:8@16 */
    	_shouldUpdateColorObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=@40@0:8Q16Q24@32 */
    	initForConversionFromColorSpace_to_withData(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	oldColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oldNSColorSpace(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldUpdateColor(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldUpdateImmutableColor(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	targetColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	targetNSColorSpace(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	updateColor(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	updateImmutableColor(...args: any[]): any;
  }
}

declare const MSColorSpaceConverter: sketchInternal.MSColorSpaceConverter;

