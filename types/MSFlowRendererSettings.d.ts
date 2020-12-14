// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSFlowRendererSettings extends NSObject {
    /* typeEncoding={?=ffff}, ivar=_RGBAFlowColor, attributes=(assign,nonatomic,readonly) */
    	RGBAFlowColor(): any;
    /* typeEncoding=^{CGImage=}, ivar=_backImage, attributes=(assign,nonatomic,readonly) */
    	backImage(): any;
    /* typeEncoding=^{CGImage=}, ivar=_dotImage, attributes=(assign,nonatomic,readonly) */
    	dotImage(): any;
    /* typeEncoding=^{CGColor=}, ivar=_flowColor, attributes=(assign,nonatomic,readonly) */
    	flowColor(): any;
    /* typeEncoding=^{CGImage=}, ivar=_hotspotImage, attributes=(assign,nonatomic,readonly) */
    	hotspotImage(): any;
    /* typeEncoding=^{CGImage=}, ivar=_otherPageImage, attributes=(assign,nonatomic,readonly) */
    	otherPageImage(): any;
    /* typeEncoding=^{CGImage=}, ivar=_tipImage, attributes=(assign,nonatomic,readonly) */
    	tipImage(): any;
    /* typeEncoding={?=ffff}16@0:8 */
    	RGBAFlowColor(...args: any[]): any;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	backImage(...args: any[]): any;
    /* typeEncoding=^{CGImage=}24@0:8d16 */
    	createFlowDotImage(...args: any[]): any;
    /* typeEncoding=^{CGImage=}24@0:8d16 */
    	createFlowHotspotImage(...args: any[]): any;
    /* typeEncoding=^{CGImage=}24@0:8^{CGImage=}16 */
    	createTintedImageFromImage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	dotImage(...args: any[]): any;
    /* typeEncoding=^{CGColor=}16@0:8 */
    	flowColor(...args: any[]): any;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	hotspotImage(...args: any[]): any;
    /* typeEncoding=@32@0:8^{CGColor=}16d24 */
    	initWithFlowColor_backingScale(...args: any[]): any;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	otherPageImage(...args: any[]): any;
    /* typeEncoding=^{CGImage=}16@0:8 */
    	tipImage(...args: any[]): any;
  }
}

declare const MSFlowRendererSettings: sketchInternal.MSFlowRendererSettings;

