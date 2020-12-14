// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSKeyedUnarchiver extends MSBaseUnarchiver {
    /* typeEncoding=@"NSDictionary", ivar=_legacyImages, attributes=(retain,nonatomic) */
    	legacyImages(): cocoascript.NSDictionary;
    /* typeEncoding=@"MSKeyedUnarchiveHelper", ivar=_unarchiveHelper, attributes=(retain,nonatomic) */
    	unarchiveHelper(): MSKeyedUnarchiveHelper;
    /* typeEncoding=v16@0:8 */
    	defineReplacementClasses(): void;
    /* typeEncoding=v16@0:8 */
    	initialize(): void;
    /* typeEncoding=@32@0:8@16^@24 */
    	unarchivedObjectFromURL_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
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
    /* typeEncoding=@16@0:8 */
    	decodeRoot(...args: any[]): any;
    /* typeEncoding={CGSize=dd}40@0:8@16{CGSize=dd}24 */
    	decodeSizeForKey_withDefault(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initForReadingFromData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	legacyImages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLegacyImages(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUnarchiveHelper(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unarchiveHelper(...args: any[]): any;
  }
}

declare const MSKeyedUnarchiver: sketchInternal.MSKeyedUnarchiver;

