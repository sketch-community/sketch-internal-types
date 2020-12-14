// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAttributeConverter extends NSObject {
    /* typeEncoding=@"NSString", ivar=_attributeName, attributes=(copy,nonatomic,readonly) */
    	attributeName(): cocoascript.NSString;
    /* typeEncoding=@?, ivar=_conversionBlock, attributes=(copy,nonatomic,readonly) */
    	conversionBlock(): any;
    /* typeEncoding=@32@0:8@16@?24 */
    	static converterWithAttributeName_block(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	attributeName(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	conversionBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	convertAttributes(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@?24 */
    	initWithAttributeName_block(...args: any[]): any;
  }
}

declare const MSAttributeConverter: sketchInternal.MSAttributeConverter;

