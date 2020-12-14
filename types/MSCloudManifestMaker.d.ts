// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSCloudManifestMaker extends MSManifestMaker {
    /* typeEncoding=@"<MSCloudManifestMakerDelegate>", ivar=_delegate, attributes=(retain,nonatomic) */
    	delegate(): any;
    /* typeEncoding=@"NSSet", ivar=_objectsToExport, attributes=(retain,nonatomic) */
    	objectsToExport(): cocoascript.NSSet;
    /* typeEncoding=@"NSString", ivar=_organizationID, attributes=(retain,nonatomic) */
    	organizationID(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	createManifest(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	filesMetadataForAncestry_id(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	objectsToExport(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	organizationID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setObjectsToExport(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOrganizationID(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    	shouldExportLayerGroup_onPage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	validate(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	validateObjectID(...args: any[]): any;
  }
}

declare const MSCloudManifestMaker: sketchInternal.MSCloudManifestMaker;

