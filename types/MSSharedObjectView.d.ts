// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSSharedObjectView extends NSView {
    /* typeEncoding=Q, ivar=_borders, attributes=(assign,nonatomic) */
    	borders(): number;
    /* typeEncoding=c, ivar=_hasShadow, attributes=(assign,nonatomic) */
    	hasShadow(): boolean;
    /* typeEncoding=@"NSString", ivar=_label, attributes=(retain,nonatomic) */
    	label(): cocoascript.NSString;
    /* typeEncoding=@"NSColor", ivar=_labelBackgroundColor, attributes=(retain,nonatomic) */
    	labelBackgroundColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSColor", ivar=_labelColor, attributes=(retain,nonatomic) */
    	labelColor(): cocoascript.NSColor;
    /* typeEncoding=@"NSColorSpace", ivar=_previewColorSpace, attributes=(retain,nonatomic) */
    	previewColorSpace(): cocoascript.NSColorSpace;
    /* typeEncoding=@"NSImage", ivar=_previewImage, attributes=(retain,nonatomic) */
    	previewImage(): cocoascript.NSImage;
    /* typeEncoding=@"MSModelObject<BCSortable><MSSharedObjectStyling>", ivar=_sharedObject, attributes=(retain,nonatomic) */
    	sharedObject(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	borders(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	drawBorder(): void;
    /* typeEncoding=v32@0:8q16q24 */
    	drawBorderFrom_to(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	drawLabel(): void;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	drawSharedObject(): void;
    /* typeEncoding=v16@0:8 */
    	generatePreviewInBackground(): void;
    /* typeEncoding=c16@0:8 */
    	hasShadow(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	label(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	labelBackgroundColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	labelColor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	previewImage(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setBorders(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGSize=dd}16 */
    	setFrameSize(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setHasShadow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLabel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLabelBackgroundColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLabelColor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreviewImage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSharedObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	sharedObject(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateSharedObjectPreview(): void;
  }
}

declare const MSSharedObjectView: sketchInternal.MSSharedObjectView;

