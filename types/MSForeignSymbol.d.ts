// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSForeignSymbol extends _MSForeignSymbol {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	remoteSymbolID(): cocoascript.NSString;
    /* typeEncoding=@24@0:8@16 */
    	static foreignObjectCollectionInDocument(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static foreignSymbolWithMaster_inLibrary(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	static masterFromDocument_withID(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	childCollaborationObjectWithID_removing(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	containsNestedStylesOutOfDateWithLibrary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	correctInvalidGamma(): void;
    /* typeEncoding=c40@0:8#16@24@32 */
    	doesStyleOfClass_withID_differInRemoteDocument(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	enumerateSharedStyleItemsForMaster_usingBlock(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithOriginalObject_inLibrary(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isOutOfDateWithLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localShareID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	remoteShareID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	remoteSymbolID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocalObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocalShareID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	syncSymbolPrivateStylesWithRemote_updatingPrivateStylesWithBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	syncWithRemote(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@?24 */
    	syncWithRemote_updatingPrivateStylesWithBlock(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	tooltipForObject_MSAssetSyncSheetObject(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	type_MSAssetSyncSheetObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unlinkFromRemote(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateAfterPatching(): void;
    /* typeEncoding=v24@0:8@16 */
    	visitInDocument(...args: any[]): any;
  }
}

declare const MSForeignSymbol: sketchInternal.MSForeignSymbol;

