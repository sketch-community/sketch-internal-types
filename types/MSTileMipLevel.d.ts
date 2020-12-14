// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTileMipLevel extends NSObject {
    /* typeEncoding=c, ivar=_clearBeforeUpload, attributes=(assign) */
    	clearBeforeUpload(): boolean;
    /* typeEncoding=^{CGColorSpace=}, ivar=_currentColorSpace, attributes=(assign,nonatomic) */
    	currentColorSpace(): any;
    /* typeEncoding=^{?={?=iiii}^{?}}, ivar=_dirtyRegion, attributes=(assign,nonatomic) */
    	dirtyRegion(): any;
    /* typeEncoding=d, ivar=_scale, attributes=(assign,nonatomic) */
    	scale(): number;
    /* typeEncoding=d, ivar=_scaleRangeMax, attributes=(assign,nonatomic,readonly) */
    	scaleRangeMax(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	tileCount(): number;
    /* typeEncoding=@"NSMutableArray", ivar=_tiles, attributes=(retain,nonatomic) */
    	tiles(): cocoascript.NSMutableArray;
    /* typeEncoding=@24@0:8d16 */
    	tileMipLevelWithScaleRangeMax(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    	addTile(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	clearBeforeUpload(...args: any[]): any;
    /* typeEncoding=Q48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	countExistingTilesForVisibleRect(...args: any[]): any;
    /* typeEncoding=^{CGColorSpace=}16@0:8 */
    	currentColorSpace(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=^{?={?=iiii}^{?}}16@0:8 */
    	dirtyRegion(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	enqueueRenderableTilesForVisibleRect(...args: any[]): any;
    /* typeEncoding=@24@0:8{?=ii}16 */
    	findWritableTileAt(...args: any[]): any;
    /* typeEncoding=@24@0:8d16 */
    	initWithScaleRangeMax(...args: any[]): any;
    /* typeEncoding=c24@0:8^{CGColorSpace=}16 */
    	isCurrentColorSpaceEqualTo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	removeAllTiles(): void;
    /* typeEncoding=v16@0:8 */
    	removeAllTilesAndClearDirtyRegion(): void;
    /* typeEncoding=v24@0:8^{?={?=iiii}^{?}}16 */
    	removeAllTilesAndResetDirtyRegion(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	scale(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    	scaleRangeMax(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setClearBeforeUpload(...args: any[]): any;
    /* typeEncoding=v24@0:8^{CGColorSpace=}16 */
    	setCurrentColorSpace(...args: any[]): any;
    /* typeEncoding=v24@0:8^{?={?=iiii}^{?}}16 */
    	setDirtyRegion(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    	setScale(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTiles(...args: any[]): any;
    /* typeEncoding=v32@0:8{?=iiii}16 */
    	subtractDirtyRect(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	tileCount(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	tiles(...args: any[]): any;
    /* typeEncoding=v24@0:8^{?={?=iiii}^{?}}16 */
    	unionDirtyRegion(...args: any[]): any;
  }
}

declare const MSTileMipLevel: sketchInternal.MSTileMipLevel;

