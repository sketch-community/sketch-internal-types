// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBaseUnarchiver extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_actualSymbolIDs, attributes=(retain,nonatomic) */
    	actualSymbolIDs(): cocoascript.NSArray;
    /* typeEncoding=q, ivar=_archiveVersion, attributes=(assign,nonatomic) */
    	archiveVersion(): number;
    /* typeEncoding=c, ivar=_corruptionDetected, attributes=(assign,nonatomic) */
    	corruptionDetected(): boolean;
    /* typeEncoding=@, ivar=_currentObject, attributes=(assign,nonatomic,weak) */
    	currentObject(): any;
    /* typeEncoding=q, ivar=_currentVersion, attributes=(assign,nonatomic) */
    	currentVersion(): number;
    /* typeEncoding=@"NSPointerArray", ivar=_decodedObjectStack, attributes=(retain,nonatomic) */
    	decodedObjectStack(): cocoascript.NSPointerArray;
    /* typeEncoding=@24@0:8@16 */
    	static unarchivedObjectFromData(...args: any[]): any;
    /* typeEncoding=@40@0:8@16^q24^@32 */
    	static unarchivedObjectFromData_actualVersion_error(...args: any[]): any;
    /* typeEncoding=@48@0:8@16q24^c32^@40 */
    	static unarchivedObjectFromData_asVersion_corruptionDetected_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	actualSymbolIDs(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	archiveVersion(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	containsValueForKey(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	corruptionDetected(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentObject(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	currentVersion(...args: any[]): any;
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
    /* typeEncoding=@32@0:8#16@24 */
    	decodeReferencesOfClass_forKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	decodeRoot(...args: any[]): any;
    /* typeEncoding={CGSize=dd}40@0:8@16{CGSize=dd}24 */
    	decodeSizeForKey_withDefault(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	decodedObjectStack(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initForReadingFromData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	instanciateObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setActualSymbolIDs(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setArchiveVersion(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setCorruptionDetected(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentObject(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	setCurrentVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDecodedObjectStack(...args: any[]): any;
    /* typeEncoding=@40@0:8q16^c24^@32 */
    	unarchivedObjectAsVersion_corruptionDetected_error(...args: any[]): any;
  }
}

declare const MSBaseUnarchiver: sketchInternal.MSBaseUnarchiver;

