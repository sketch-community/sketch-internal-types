// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSStyleOverridePopupButton extends NSPopUpButton {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocumentData", ivar=_documentData, attributes=(retain,nonatomic) */
    	documentData(): MSDocumentData;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSAssetLibraryController", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	libraryController(): MSAssetLibraryController;
    /* typeEncoding=@"MSForeignObjectMenuBuilder", ivar=_menuBuilder, attributes=(retain,nonatomic) */
    	menuBuilder(): MSForeignObjectMenuBuilder;
    /* typeEncoding=@"MSAvailableOverride", ivar=_primaryOverride, attributes=(retain,nonatomic) */
    	primaryOverride(): MSAvailableOverride;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v48@0:8@16@24@32@?40 */
    	addMenuItemForStyle_withName_document_imageCallback(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	applyPreviewImage(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@?40 */
    	buildMenuForOverride_withMenuBuilder_document_imageCallback(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	libraryController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	menuBuilder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	menuWillOpen(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	primaryOverride(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDocumentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMenuBuilder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPrimaryOverride(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    	setupButtonTitleWithPrimaryOverride_document_imageCallback(...args: any[]): any;
  }
}

declare const MSStyleOverridePopupButton: sketchInternal.MSStyleOverridePopupButton;

