// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSharedStylesPopUpButtonCell extends NSPopUpButtonCell {
    /* typeEncoding=@"<MSSharedStylesPopUpButtonCellDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=c, ivar=_localIsOutOfSync, attributes=(assign,nonatomic) */
    	localIsOutOfSync(): boolean;
    /* typeEncoding=@"NSImage", ivar=_previewImage, attributes=(retain,nonatomic) */
    	previewImage(): cocoascript.NSImage;
    /* typeEncoding=@"MSShareableObjectReference", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	sharedObject(): MSShareableObjectReference;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	drawBorderAndBackgroundWithFrame_inView(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}64@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56 */
    	drawDefaultTitle_withFrame_inView(...args: any[]): any;
    /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
    	drawImageWithFrame_inView(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawSharedObjectMainTitle(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawSharedObjectSecondaryTitle(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawSharedObjectTitleWithFrame(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}64@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56 */
    	drawTitle_withFrame_inView(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	imageRectForBounds(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	localIsOutOfSync(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setLocalIsOutOfSync(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMenuItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedObject(...args: any[]): any;
  }
}

declare const MSSharedStylesPopUpButtonCell: sketchInternal.MSSharedStylesPopUpButtonCell;

