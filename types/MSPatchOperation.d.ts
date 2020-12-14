// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPatchOperation extends NSObject {
    /* typeEncoding=@"NSString", ivar=_affectedLayerID, attributes=(retain,nonatomic) */
    	affectedLayerID(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	archiveReferenceIdentifier_bc(): cocoascript.NSString;
    /* typeEncoding=@"MSPatchArrayAddPosition", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	insertionPosition(): MSPatchArrayAddPosition;
    /* typeEncoding=Q, ivar=_traits, attributes=(assign,nonatomic,readonly) */
    	traits(): number;
    /* typeEncoding=@24@0:8@16 */
    	static patchFromComparisonItem(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	affectedLayerID(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	applyInsertionToDocument(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	applyPropertyChangeToDocument(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	applyRemovalToDocument(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	compare(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeAsJSON(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	hasTrait(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithComparisonItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertionPosition(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAffectedLayerID(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	traits(...args: any[]): any;
  }
}

declare const MSPatchOperation: sketchInternal.MSPatchOperation;

