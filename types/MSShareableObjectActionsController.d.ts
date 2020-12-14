// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShareableObjectActionsController extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_layers, attributes=(assign,nonatomic,weak) */
    	layers(): cocoascript.NSArray;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	masterObjects(): cocoascript.NSSet;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	objectType(): number;
    /* typeEncoding=@"<MSForeignObjectProvider>", ivar=_provider, attributes=(retain,nonatomic) */
    	provider(): any;
    /* typeEncoding=@"MSShareableObjectReference", ivar=_selectedObjectReference, attributes=(retain,nonatomic) */
    	selectedObjectReference(): MSShareableObjectReference;
    /* typeEncoding=@"MSAssetLibrary", ivar=_sourceLibrary, attributes=(retain,nonatomic) */
    	sourceLibrary(): MSAssetLibrary;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	validateCanOpenInLibrary(): number;
    /* typeEncoding=q24@0:8@16 */
    	static validateCanOpenLibrary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=c16@0:8 */
    	containsOutOfSyncInstance(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	masterObjects(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	objectType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	provider(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedObjectReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setProvider(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSelectedObjectReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSourceLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sourceLibrary(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	updateWithForeignObjectProvider_forLayers(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	validateCanOpenInLibrary(...args: any[]): any;
  }
}

declare const MSShareableObjectActionsController: sketchInternal.MSShareableObjectActionsController;

