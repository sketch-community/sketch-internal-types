// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSJSONArchiveReference extends NSObject {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSObject<MSCoding>", ivar=_referencedObject, attributes=(assign,nonatomic,readonly) */
    	referencedObject(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	encodeAsJSON(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithJSONDecoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithReferenceObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	referencedObject(...args: any[]): any;
  }
}

declare const MSJSONArchiveReference: sketchInternal.MSJSONArchiveReference;

