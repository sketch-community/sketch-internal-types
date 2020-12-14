// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPluginsPreferenceIconView extends NSView {
    /* typeEncoding=@"NSImage", ivar=_icon, attributes=(retain,nonatomic) */
    	icon(): cocoascript.NSImage;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	placeHolderImage(): cocoascript.NSImage;
    /* typeEncoding=@"NSImage", ivar=_preview, attributes=(retain,nonatomic) */
    	preview(): cocoascript.NSImage;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	centeredThumbFromImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contentPath(...args: any[]): any;
    /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	drawRect(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	generatePreview(): void;
    /* typeEncoding=@16@0:8 */
    	icon(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	placeHolderImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	preview(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
    	previewFrame(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setIcon(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPreview(...args: any[]): any;
  }
}

declare const MSPluginsPreferenceIconView: sketchInternal.MSPluginsPreferenceIconView;

