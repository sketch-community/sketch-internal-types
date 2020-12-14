// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSOverlaySettings extends NSObject {
    /* typeEncoding=Q, ivar=_layoutGridStyle, attributes=(assign,nonatomic,readonly) */
    	layoutGridStyle(): number;
    /* typeEncoding=Q, ivar=_options, attributes=(assign,nonatomic,readonly) */
    	options(): number;
    /* typeEncoding=@16@0:8 */
    	defaultsKeyPaths(...args: any[]): any;
    /* typeEncoding=@32@0:8@16Q24 */
    	settingsFromTheme_options(...args: any[]): any;
    /* typeEncoding=^{CGColor=}24@0:8Q16 */
    	colorAtIndex(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=@40@0:8[10^{CGColor}]16Q24Q32 */
    	initWithColors_options_layoutGridStyle(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualToSettings(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	layoutGridStyle(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	options(...args: any[]): any;
  }
}

declare const MSOverlaySettings: sketchInternal.MSOverlaySettings;

