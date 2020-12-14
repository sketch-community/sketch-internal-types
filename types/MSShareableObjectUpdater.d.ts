// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSShareableObjectUpdater extends NSObject {
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	allSharedObjects(): cocoascript.NSSet;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canPerformNewColorAction(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	canPerformNewStyleAction(): boolean;
    /* typeEncoding=@"<MSShareableObjectUpdaterDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSSet", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	foreignSharedObjects(): cocoascript.NSSet;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasOutOfSyncColors(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasOutOfSyncStyles(): boolean;
    /* typeEncoding=@"MSLayerArray", ivar=_lastProcessedLayers, attributes=(retain,nonatomic) */
    	lastProcessedLayers(): MSLayerArray;
    /* typeEncoding=@"MSModelObjectCacheGeneration", ivar=_lastProcessedModelGeneration, attributes=(retain,nonatomic) */
    	lastProcessedModelGeneration(): MSModelObjectCacheGeneration;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemTitleForCreateNewColorAction(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemTitleForCreateNewStyleAction(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemTitleForDetachAction(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemTitleForResetColorAction(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemTitleForResetStyleAction(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemTitleForSyncAction(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemTitleForUnlinkAction(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	menuItemTitleForUnlinkAndSyncAction(): cocoascript.NSString;
    /* typeEncoding=@"MSLayerArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectedLayers(): MSLayerArray;
    /* typeEncoding=@"MSStyle", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectedStyle(): MSStyle;
    /* typeEncoding=@"MSModelObject<BCSortable><MSSharedObjectStyling>", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shareableObject(): any;
    /* typeEncoding=Q, ivar=_shareableObjectType, attributes=(assign,nonatomic) */
    	shareableObjectType(): number;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	allSharedObjects(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canPerformNewColorAction(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	canPerformNewStyleAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	foreignSharedObjects(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasOutOfSyncColors(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasOutOfSyncStyles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastProcessedLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	lastProcessedModelGeneration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localObjectContainer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemTitleForCreateNewColorAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemTitleForCreateNewStyleAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemTitleForDetachAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemTitleForResetColorAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemTitleForResetStyleAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemTitleForSyncAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemTitleForUnlinkAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuItemTitleForUnlinkAndSyncAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	performCreateNewColorAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	performCreateNewStyleAction(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	performDetachAction(): void;
    /* typeEncoding=v16@0:8 */
    	performResetAction(): void;
    /* typeEncoding=v16@0:8 */
    	performSyncAndOrUnlinkAction(): void;
    /* typeEncoding=@16@0:8 */
    	selectedColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	selectedStyle(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLastProcessedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLastProcessedModelGeneration(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setShareableObjectType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	shareableObject(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	shareableObjectType(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	syncBehaviour(...args: any[]): any;
  }
}

declare const MSShareableObjectUpdater: sketchInternal.MSShareableObjectUpdater;

