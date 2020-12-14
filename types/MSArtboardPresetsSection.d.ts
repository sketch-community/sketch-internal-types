// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSArtboardPresetsSection extends NSObject {
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	dictionaryRepresentation(): cocoascript.NSDictionary;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(assign,nonatomic,readonly) */
    	name(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_presets, attributes=(copy,nonatomic) */
    	presets(): cocoascript.NSArray;
    /* typeEncoding=@24@0:8@16 */
    	static sectionsWithContentsOfURL(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    	static writeSections_toURL_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	dictionaryRepresentation(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithDictionaryRepresentation(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithName_presets(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	name(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	presets(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPresets(...args: any[]): any;
  }
}

declare const MSArtboardPresetsSection: sketchInternal.MSArtboardPresetsSection;

