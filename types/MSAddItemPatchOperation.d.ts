// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAddItemPatchOperation extends MSPatchOperation {
    /* typeEncoding=@"MSImmutableModelObject", ivar=_insertedObject, attributes=(assign,nonatomic,readonly) */
    	insertedObject(): MSImmutableModelObject;
    /* typeEncoding=@"MSPatchArrayAddPosition", ivar=_position, attributes=(assign,nonatomic,readonly) */
    	position(): MSPatchArrayAddPosition;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q24@0:8@16 */
    	applyInsertionToDocument(...args: any[]): any;
    /* typeEncoding=q24@0:8@16 */
    	compare(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	debugDescription(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithComparisonItem(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertedObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	insertionPosition(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	position(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	traits(...args: any[]): any;
  }
}

declare const MSAddItemPatchOperation: sketchInternal.MSAddItemPatchOperation;

