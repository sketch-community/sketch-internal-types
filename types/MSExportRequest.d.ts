// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSExportRequest extends NSObject {
    /* typeEncoding=d, ivar=_compression, attributes=(assign,nonatomic) */
    	compression(): number;
    /* typeEncoding=@"MSImmutableColor", ivar=_exportBackgroundColor, attributes=(copy,nonatomic) */
    	exportBackgroundColor(): MSImmutableColor;
    /* typeEncoding=@"NSString", ivar=_format, attributes=(copy,nonatomic) */
    	format(): cocoascript.NSString;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	immutableDocument(): MSImmutableDocumentData;
    /* typeEncoding=c, ivar=_includeArtboardBackground, attributes=(assign,nonatomic) */
    	includeArtboardBackground(): boolean;
    /* typeEncoding=@"NSSet", ivar=_includedLayerIDs, attributes=(copy,nonatomic) */
    	includedLayerIDs(): cocoascript.NSSet;
    /* typeEncoding=c, ivar=_interlaced, attributes=(assign,nonatomic) */
    	interlaced(): boolean;
    /* typeEncoding=@"_TtC11SketchModel24MSImmutableLayerAncestry", ivar=_layerAncestry, attributes=(retain,nonatomic) */
    	layerAncestry(): _TtC11SketchModel24MSImmutableLayerAncestry;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_options, attributes=(assign,nonatomic) */
    	options(): number;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	pasteboardType(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_progressive, attributes=(assign,nonatomic) */
    	progressive(): boolean;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_rect, attributes=(assign,nonatomic) */
    	rect(): CGRect;
    /* typeEncoding=c, ivar=_renderSymbolMasterAsInstances, attributes=(assign,nonatomic) */
    	renderSymbolMasterAsInstances(): boolean;
    /* typeEncoding=@"MSImmutableLayer", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	rootLayer(): MSImmutableLayer;
    /* typeEncoding=c, ivar=_saveForWeb, attributes=(assign,nonatomic) */
    	saveForWeb(): boolean;
    /* typeEncoding=d, ivar=_scale, attributes=(assign,nonatomic) */
    	scale(): number;
    /* typeEncoding=c, ivar=_shouldTrim, attributes=(assign,nonatomic) */
    	shouldTrim(): boolean;
    /* typeEncoding=@68@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32c64 */
    	exportRequestFromExportFormat_layer_inRect_useIDForName(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32 */
    	exportRequestFromLayerAncestry_exportFormat_inRect(...args: any[]): any;
    /* typeEncoding=@68@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32c64 */
    	exportRequestFromLayerAncestry_exportFormat_inRect_renderingSymbolMasterAsInstances(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	exportRequestsFromExportableLayer(...args: any[]): any;
    /* typeEncoding=@68@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32c64 */
    	exportRequestsFromExportableLayer_exportFormats_inRect_useIDForName(...args: any[]): any;
    /* typeEncoding=@36@0:8@16@24c32 */
    	exportRequestsFromExportableLayer_exportFormats_useIDForName(...args: any[]): any;
    /* typeEncoding=@60@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24c56 */
    	exportRequestsFromExportableLayer_inRect_useIDForName(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	exportRequestsFromExportableLayer_useIDForName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	exportRequestsFromLayerAncestry(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	exportRequestsFromLayerAncestry_exportFormats(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32 */
    	exportRequestsFromLayerAncestry_exportFormats_inRect(...args: any[]): any;
    /* typeEncoding=@56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    	exportRequestsFromLayerAncestry_inRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=d16@0:8 */
    	compression(...args: any[]): any;
    /* typeEncoding=v40@0:8@16Q24@32 */
    	configureForLayer_layerOptions_includedIDs(...args: any[]): any;
    /* typeEncoding=v40@0:8@16Q24@32 */
    	configureForLayerAncestry_layerOptions_includedIDs(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportBackgroundColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	format(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	includeArtboardBackground(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	includedLayerIDs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	interlaced(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	layerAncestry(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	objectIDsForSelfAncestorsAndChildrenOfAncestry(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	options(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	pasteboardType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	progressive(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	readSettingsFromDefaults(): void;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	rect(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	renderSymbolMasterAsInstances(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	rootLayer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	saveForWeb(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	scale(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setCompression(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportBackgroundColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFormat(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIncludeArtboardBackground(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIncludedLayerIDs(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setInterlaced(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayerAncestry(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setOptions(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setProgressive(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	setRect(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRenderSymbolMasterAsInstances(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSaveForWeb(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setScale(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setShouldTrim(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldTrim(...args: any[]): any;
  }
}

declare const MSExportRequest: sketchInternal.MSExportRequest;

