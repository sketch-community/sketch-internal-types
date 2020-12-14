// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSThemeImageView extends NSImageView {
    /* typeEncoding=@"<MSThemeImageViewDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    	delegate(): any;
    /* typeEncoding=@"NSString", ivar=_imageName, attributes=(copy,nonatomic) */
    	imageName(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	delegate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setImageName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setThemedImage(): void;
    /* typeEncoding=v16@0:8 */
    	viewDidChangeEffectiveAppearance(): void;
  }
}

declare const MSThemeImageView: sketchInternal.MSThemeImageView;

