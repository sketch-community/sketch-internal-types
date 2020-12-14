// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSubtreeRoot extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_ancestorsOfObject, attributes=(retain,nonatomic) */
    	ancestorsOfObject(): cocoascript.NSArray;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_document, attributes=(retain,nonatomic) */
    	document(): MSImmutableDocumentData;
    /* typeEncoding=@"MSModelObjectIndexPair", ivar=_object, attributes=(retain,nonatomic) */
    	object(): MSModelObjectIndexPair;
    /* typeEncoding=@"MSImmutableLayerGroup<MSWebExportableRootLayer>", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	webExportableRootLayer(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	ancestorsOfObject(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	contentDirtyDiffRectForPage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelObjectAncestors(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	object(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	page(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAncestorsOfObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	webExportableRootLayer(...args: any[]): any;
  }
}

declare const MSSubtreeRoot: sketchInternal.MSSubtreeRoot;

