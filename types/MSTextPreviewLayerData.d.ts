// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTextPreviewLayerData extends NSObject {
    /* typeEncoding=@"NSMutableDictionary", ivar=_layerIDsToPages, attributes=(assign,nonatomic,readonly) */
    	layerIDsToPages(): cocoascript.NSMutableDictionary;
    /* typeEncoding=@"MSTextPreviewLayerMetadata", ivar=_metadata, attributes=(retain,nonatomic) */
    	metadata(): MSTextPreviewLayerMetadata;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=^{CGPDFPage=}24@0:8@16 */
    	findPageForLayer(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	findPreviewRectForLayerID(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithPDFData_metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerIDsToPages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	metadata(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeCachedPages(): void;
    /* typeEncoding=v24@0:8@16 */
    	setMetadata(...args: any[]): any;
  }
}

declare const MSTextPreviewLayerData: sketchInternal.MSTextPreviewLayerData;

