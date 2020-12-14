// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSForeignObjectProvider extends NSObject {
    /* typeEncoding=@"MSDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentDocument(): MSDocumentData;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,readonly,weak) */
    	document(): MSDocument;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	foreignObjects(): cocoascript.NSArray;
    /* typeEncoding=@"MSAssetLibraryController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	libraryController(): MSAssetLibraryController;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	objectType(): number;
    /* typeEncoding=@32@0:8@16@24 */
    	static providerForLayers_inDocument(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	static shareableObjectTypeForLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	currentDocument(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	currentDocumentIsLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignObjects(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryController(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	localObjectsForDocument(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	masterIsOutOfSyncWithInstance(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	masterObjectForInstance(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	objectType(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	shareableObjectForInstance_inContainerOfType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tempDocument(...args: any[]): any;
  }
}

declare const MSForeignObjectProvider: sketchInternal.MSForeignObjectProvider;

