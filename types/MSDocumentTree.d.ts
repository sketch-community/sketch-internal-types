// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentTree extends NSObject {
    /* typeEncoding=@"BCCache", ivar=_cache, attributes=(retain,nonatomic) */
    	cache(): BCCache;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_documentData, attributes=(assign,nonatomic,readonly) */
    	documentData(): MSImmutableDocumentData;
    /* typeEncoding=@"NSMapTable", ivar=_parentByObject, attributes=(retain,nonatomic) */
    	parentByObject(): cocoascript.NSMapTable;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	ancestorLayersOfObject(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	ancestorsOfObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocumentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentByObject(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	parentForObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setParentByObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	storeParentsForLayersContainedInParent(...args: any[]): any;
  }
}

declare const MSDocumentTree: sketchInternal.MSDocumentTree;

