// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSWebExporter extends NSObject {
    /* typeEncoding=c, ivar=_cancelled, attributes=(assign,nonatomic) */
    	cancelled(): boolean;
    /* typeEncoding=@"NSBundle", ivar=_clientBundle, attributes=(retain,nonatomic) */
    	clientBundle(): cocoascript.NSBundle;
    /* typeEncoding=@"SCKOrganization", ivar=_cloudOrganization, attributes=(retain,nonatomic) */
    	cloudOrganization(): SCKOrganization;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSURL", ivar=_destinationURL, attributes=(retain,nonatomic) */
    	destinationURL(): cocoascript.NSURL;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	documentFileSize(): number;
    /* typeEncoding=@"NSObject<OS_dispatch_queue>", ivar=_exportingQueue, attributes=(retain,nonatomic) */
    	exportingQueue(): any;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_immutableDocumentData, attributes=(retain,nonatomic) */
    	immutableDocumentData(): MSImmutableDocumentData;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
    	name(): cocoascript.NSString;
    /* typeEncoding=c, ivar=_selectiveExport, attributes=(assign,nonatomic) */
    	selectiveExport(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=@24@0:8@16 */
    	static documentURLInDirectory(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@?40 */
    	static exportArtboardsOfDocument_withName_toLocalURL_completionBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static exportBitmapImageForRequest(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@?40 */
    	static exportSelectedArtboardsOfDocument_withName_toLocalURL_completionBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static exportViewportBitmapImageForRequest(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static imageURLWithHash_inDirectory(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v36@0:8@?16c24@28 */
    	callCompletionBlock_withDidExport_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cancel(): void;
    /* typeEncoding=c16@0:8 */
    	cancelled(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	clientBundle(...args: any[]): any;
    /* typeEncoding=@48@0:8@16@24Q32d40 */
    	cloudManifestMaker_fileMetadataForAncestry_layerBehavior_atScale(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	cloudOrganization(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	destinationURL(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	documentFileSize(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	exportArtboardsAndManifestForCloud_error(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	exportArtboardsWithCompletionBlock(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	exportDocumentPreviews(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	exportDocumentWithUIMetadata_completionBlock(...args: any[]): any;
    /* typeEncoding=@32@0:8@16d24 */
    	exportImageMetadataForRequest_manifestScale(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exportingQueue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableDocumentData(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithDocument_name_localURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	metadataForDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    	saveManifestFile_withError(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	selectiveExport(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setCancelled(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setClientBundle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCloudOrganization(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDestinationURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setExportingQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImmutableDocumentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setName(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSelectiveExport(...args: any[]): any;
  }
}

declare const MSWebExporter: sketchInternal.MSWebExporter;

