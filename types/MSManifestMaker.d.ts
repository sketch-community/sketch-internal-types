// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSManifestMaker extends NSObject {
    /* typeEncoding=@"NSDictionary", ivar=_applicationMetadata, attributes=(copy,nonatomic) */
    	applicationMetadata(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSURL", ivar=_fileURL, attributes=(retain,nonatomic) */
    	fileURL(): cocoascript.NSURL;
    /* typeEncoding=c, ivar=_ignoreMirrorExportScale, attributes=(assign,nonatomic) */
    	ignoreMirrorExportScale(): boolean;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_immutableDocumentData, attributes=(assign,nonatomic,readonly) */
    	immutableDocumentData(): MSImmutableDocumentData;
    /* typeEncoding=c, ivar=_includeUnrenderedLayersInManifest, attributes=(assign,nonatomic) */
    	includeUnrenderedLayersInManifest(): boolean;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_selectiveExport, attributes=(assign,nonatomic) */
    	selectiveExport(): boolean;
    /* typeEncoding=c, ivar=_usePageIfMissingArtboard, attributes=(assign,nonatomic) */
    	usePageIfMissingArtboard(): boolean;
    /* typeEncoding=@24@0:8q16 */
    	keyForFlowAnimationType(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	manifestValueForColorSpace(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	applicationMetadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	createManifest(...args: any[]): any;
    /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	dictForRect_inRootLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fileURL(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	filesMetadataForAncestry_id(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	formatAsInteger(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	ignoreMirrorExportScale(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableDocumentData(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	includeUnrenderedLayersInManifest(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDocument(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	metadataAndExportForArtboardsOnPage(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	metadataAndExportForPage_earlierSlugs(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	metadataAndExportForPages(...args: any[]): any;
    /* typeEncoding=@104@0:8@16@24{CGAffineTransform=dddddd}32@80@88@96 */
    	metadataForChildLayersInLayer_inRootLayer_positionTransform_withAncestors_earlierSymbols_fixedByLayer(...args: any[]): any;
    /* typeEncoding=@104@0:8@16@24{CGAffineTransform=dddddd}32@80@88@96 */
    	metadataForChildLayersInSymbolInstance_inRootLayer_positionTransform_withAncestors_earlierSymbols_fixedByLayer(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	metadataForFlow(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	metadataForLayer_fixedByLayer(...args: any[]): any;
    /* typeEncoding=@104@0:8@16@24{CGAffineTransform=dddddd}32@80@88@96 */
    	metadataForLayer_inRootLayer_positionTransform_withAncestors_earlierSymbols_fixedByLayer(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	metadataForLayersInRootLayer_ancestors(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	metadataForRootLayer_onPage_earlierSlugs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=d24@0:8d16 */
    	roundValue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	selectiveExport(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setApplicationMetadata(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFileURL(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIgnoreMirrorExportScale(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIncludeUnrenderedLayersInManifest(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSelectiveExport(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setUsePageIfMissingArtboard(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	shouldExportLayerGroup_onPage(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	specialiseObjectMetadata_forSymbolInstance(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	usePageIfMissingArtboard(...args: any[]): any;
  }
}

declare const MSManifestMaker: sketchInternal.MSManifestMaker;

