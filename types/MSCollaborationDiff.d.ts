// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCollaborationDiff extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_changes, attributes=(retain,nonatomic) */
    	changes(): cocoascript.NSArray;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_currentDoc, attributes=(retain,nonatomic) */
    	currentDoc(): MSImmutableDocumentData;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_oldDoc, attributes=(retain,nonatomic) */
    	oldDoc(): MSImmutableDocumentData;
    /* typeEncoding=@32@0:8@16@24 */
    	static changesBetweenOldDocument_currentDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	changes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	currentDoc(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithOldDocument_currentDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	oldDoc(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setChanges(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCurrentDoc(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOldDoc(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	treeComparison_compareChildrenOf_against(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24@32 */
    	treeComparison_isObject_theSameObjectAs(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	treeComparison_propertiesOfObject_notMatching(...args: any[]): any;
  }
}

declare const MSCollaborationDiff: sketchInternal.MSCollaborationDiff;

