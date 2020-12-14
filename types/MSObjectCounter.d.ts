// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSObjectCounter extends NSObject {
    /* typeEncoding=@, ivar=_object, attributes=(retain,nonatomic) */
    	object(): any;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	totalCount(): number;
    /* typeEncoding=@"NSCountedSet", ivar=_usageCounts, attributes=(retain,nonatomic) */
    	usageCounts(): cocoascript.NSCountedSet;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8q16 */
    	addUseCase(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	compare(...args: any[]): any;
    /* typeEncoding=q32@0:8@16q24 */
    	compare_byUse(...args: any[]): any;
    /* typeEncoding=Q24@0:8q16 */
    	countForUse(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	object(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondarySortPriorities(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUsageCounts(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	totalCount(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	usageCounts(...args: any[]): any;
  }
}

declare const MSObjectCounter: sketchInternal.MSObjectCounter;

