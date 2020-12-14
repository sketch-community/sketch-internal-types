// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSJSONUnarchiver extends MSBaseUnarchiver {
    /* typeEncoding=@"NSSet", ivar=_allowedClasses, attributes=(retain,nonatomic) */
    	allowedClasses(): cocoascript.NSSet;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"BCJSONDecoder", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	decoder(): BCJSONDecoder;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"NSMutableDictionary", ivar=_references, attributes=(retain,nonatomic) */
    	references(): cocoascript.NSMutableDictionary;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	static defineReplacementClasses(): void;
    /* typeEncoding=v16@0:8 */
    	static load(): void;
    /* typeEncoding=v24@0:8#16 */
    	static registerGenericClass(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static unarchiverFromCoder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	addReference_withIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	allowedClasses(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	containsValueForKey(...args: any[]): any;
    /* typeEncoding=c28@0:8@16c24 */
    	decodeBoolForKey_withDefault(...args: any[]): any;
    /* typeEncoding=d32@0:8@16d24 */
    	decodeDoubleForKey_withDefault(...args: any[]): any;
    /* typeEncoding=q32@0:8@16q24 */
    	decodeIntegerForKey_withDefault(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	decodeObjectForKey(...args: any[]): any;
    /* typeEncoding=@32@0:8#16@24 */
    	decodeObjectOfClass_forKey(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	decodeObjectOfClasses_forKey(...args: any[]): any;
    /* typeEncoding={CGPoint=dd}40@0:8@16{CGPoint=dd}24 */
    	decodePointForKey_withDefault(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	decodeRectForKey_withDefault(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	decodeReferenceObjectOfClass_withIdentifier(...args: any[]): any;
    /* typeEncoding={CGSize=dd}40@0:8@16{CGSize=dd}24 */
    	decodeSizeForKey_withDefault(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	decoder(...args: any[]): any;
    /* typeEncoding=c32@0:8@16#24 */
    	decoder_shouldInstantiateObjectOfClass(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c32@0:8#16@24 */
    	isClass_inAllowedSet(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	referenceObjectWithIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	references(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAllowedClasses(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setArchiveVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setReferences(...args: any[]): any;
  }
}

declare const MSJSONUnarchiver: sketchInternal.MSJSONUnarchiver;

