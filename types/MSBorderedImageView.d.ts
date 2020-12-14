// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSBorderedImageView extends NSImageView {
    /* typeEncoding=@"CAShapeLayer", ivar=_backgroundLayer, attributes=(retain,nonatomic) */
    	backgroundLayer(): CAShapeLayer;
    /* typeEncoding=@"NSColor", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	borderColor(): cocoascript.NSColor;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	borderInset(): number;
    /* typeEncoding=^{CGPath=}, ivar=_borderPath, attributes=(assign,nonatomic) */
    	borderPath(): any;
    /* typeEncoding=d, ivar=_borderWidth, attributes=(assign,nonatomic) */
    	borderWidth(): number;
    /* typeEncoding=@"NSColor", ivar=_contentBackgroundColor, attributes=(retain,nonatomic) */
    	contentBackgroundColor(): cocoascript.NSColor;
    /* typeEncoding=d, ivar=_cornerRadius, attributes=(assign,nonatomic) */
    	cornerRadius(): number;
    /* typeEncoding=:, ivar=_doubleClickAction, attributes=(assign,nonatomic) */
    	doubleClickAction(): any;
    /* typeEncoding=@"MSBorderedImageViewCell", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	imageCell(): MSBorderedImageViewCell;
    /* typeEncoding=@"CALayer", ivar=_imageLayer, attributes=(retain,nonatomic) */
    	imageLayer(): CALayer;
    /* typeEncoding=c, ivar=_includeBorder, attributes=(assign,nonatomic) */
    	includeBorder(): boolean;
    /* typeEncoding=c, ivar=_selected, attributes=(assign,nonatomic,getter=isSelected) */
    	selected(): boolean;
    /* typeEncoding=#16@0:8 */
    	cellClass(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	backgroundLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	borderColor(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	borderInset(...args: any[]): any;
    /* typeEncoding=^{CGPath=}16@0:8 */
    	borderPath(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	borderWidth(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contentBackgroundColor(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	cornerRadius(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=:16@0:8 */
    	doubleClickAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageCell(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageLayer(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	includeBorder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	invalidateBorderPath(): void;
    /* typeEncoding=c16@0:8 */
    	isSelected(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	layout(): void;
    /* typeEncoding=v24@0:8@16 */
    	mouseDown(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setBackgroundLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGPath=}16 */
    	setBorderPath(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setBorderWidth(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContentBackgroundColor(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setCornerRadius(...args: any[]): any;
    /* typeEncoding=v24@0:8:16 */
    	setDoubleClickAction(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageLayer(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIncludeBorder(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setSelected(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	updateLayer(): void;
    /* typeEncoding=c16@0:8 */
    	wantsUpdateLayer(...args: any[]): any;
  }
}

declare const MSBorderedImageView: sketchInternal.MSBorderedImageView;

