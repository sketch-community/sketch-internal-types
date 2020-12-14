// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSMoveArrayItemPatchOperation extends MSPatchOperation {
    /* typeEncoding=@"MSPatchArrayRemovePosition", ivar=_fromPosition, attributes=(assign,nonatomic,readonly) */
    	fromPosition(): MSPatchArrayRemovePosition;
    /* typeEncoding=@"MSModelObject", ivar=_removedObject, attributes=(retain,nonatomic) */
    	removedObject(): MSModelObject;
    /* typeEncoding=@"MSPatchArrayAddPosition", ivar=_toPosition, attributes=(assign,nonatomic,readonly) */
    	toPosition(): MSPatchArrayAddPosition;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q24@0:8@16 */
    	applyInsertionToDocument(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	applyRemovalToDocument(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	compare(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fromPosition(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithComparisonItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertionPosition(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	removalPosition(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	removedObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setRemovedObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	toPosition(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	traits(...args: any[]): any;
  }
}

declare const MSMoveArrayItemPatchOperation: sketchInternal.MSMoveArrayItemPatchOperation;

