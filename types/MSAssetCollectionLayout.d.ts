// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSAssetCollectionLayout extends NSCollectionViewFlowLayout {
    /* typeEncoding=Q, ivar=_displayMode, attributes=(assign,nonatomic) */
    	displayMode(): number;
    /* typeEncoding=Q, ivar=_itemSizeMode, attributes=(assign,nonatomic) */
    	itemSizeMode(): number;
    /* typeEncoding=@"NSIndexSet", ivar=_updatedIndexes, attributes=(retain,nonatomic) */
    	updatedIndexes(): cocoascript.NSIndexSet;
    /* typeEncoding=d24@0:8Q16 */
    	static interItemSpacingForItemSizeMode(...args: any[]): any;
    /* typeEncoding={CGSize=dd}40@0:8Q16Q24d32 */
    	static itemSizeForItemSizeMode_displayMode_collectionViewWidth(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	static layoutAttributesClass(...args: any[]): any;
    /* typeEncoding=d32@0:8Q16Q24 */
    	static lineSpacingForItemSizeMode_displayMode(...args: any[]): any;
    /* typeEncoding={NSEdgeInsets=dddd}32@0:8Q16Q24 */
    	static sectionInsetsForItemSizeMode_displayMode(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	displayMode(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	itemSizeMode(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGPoint=dd}16 */
    	layoutAttributesForDropTargetAtPoint(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	layoutAttributesForElementsInRect(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	layoutAttributesForSupplementaryViewOfKind_atIndexPath(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	recalculateLayoutParameters(): void;
    /* typeEncoding=v24@0:8Q16 */
    	setDisplayMode(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setItemSizeMode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setUpdatedIndexes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updatedIndexes(...args: any[]): any;
  }
}

declare const MSAssetCollectionLayout: sketchInternal.MSAssetCollectionLayout;

