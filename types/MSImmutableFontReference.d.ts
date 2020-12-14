// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableFontReference extends _MSImmutableFontReference {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isEmbedded) */
    	embedded(): boolean;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	fontFamilyName(): cocoascript.NSString;
    /* typeEncoding=@"NSData", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	fontFileData(): cocoascript.NSData;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	fontFileName(): cocoascript.NSString;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isForeign) */
    	foreign(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	shouldStoreFontData(): boolean;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly,getter=isUsed) */
    	used(): boolean;
    /* typeEncoding=c16@0:8 */
    	static persistsObjectID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	fontFileData(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isEmbedded(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isForeign(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isUsed(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	shouldStoreFontData(...args: any[]): any;
  }
}

declare const MSImmutableFontReference: sketchInternal.MSImmutableFontReference;

