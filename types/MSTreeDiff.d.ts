// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSTreeDiff extends NSObject {
    /* typeEncoding=Q, ivar=_allTraits, attributes=(assign,nonatomic) */
    	allTraits(): number;
    /* typeEncoding=c, ivar=_allTraitsCompared, attributes=(assign,nonatomic) */
    	allTraitsCompared(): boolean;
    /* typeEncoding=Q, ivar=_combinedTraits, attributes=(assign,nonatomic) */
    	combinedTraits(): number;
    /* typeEncoding=Q, ivar=_containedTraits, attributes=(assign,nonatomic,readonly) */
    	containedTraits(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	currentPageHasChanged(): boolean;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	diffs(): cocoascript.NSArray;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_firstDoc, attributes=(assign,nonatomic,readonly) */
    	firstDoc(): MSImmutableDocumentData;
    /* typeEncoding=@"NSMutableArray", ivar=_firstObjectAncestorStack, attributes=(retain,nonatomic) */
    	firstObjectAncestorStack(): cocoascript.NSMutableArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	haveComponentsChanged(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	haveSymbolInstancesChanged(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	haveSymbolMastersChanged(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	haveSymbolOverrideValuesChanged(): boolean;
    /* typeEncoding=@"NSSet", ivar=_keysAffectedByDiff, attributes=(assign,nonatomic,readonly) */
    	keysAffectedByDiff(): cocoascript.NSSet;
    /* typeEncoding=@"NSMutableArray", ivar=_mutableDiffs, attributes=(retain,nonatomic) */
    	mutableDiffs(): cocoascript.NSMutableArray;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_secondDoc, attributes=(assign,nonatomic,readonly) */
    	secondDoc(): MSImmutableDocumentData;
    /* typeEncoding=@"NSMutableArray", ivar=_secondObjectAncestorStack, attributes=(retain,nonatomic) */
    	secondObjectAncestorStack(): cocoascript.NSMutableArray;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	selectionHasChanged(): boolean;
    /* typeEncoding=c, ivar=_traitsCalculated, attributes=(assign,nonatomic) */
    	traitsCalculated(): boolean;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v40@0:8@16@24Q32 */
    	addDiffPairForFirstObject_secondObject_indexInParent(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	affectsAnyKeyIn(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	affectsKey(...args: any[]): any;
    /* typeEncoding=c32@0:8Q16^c24 */
    	allChangedPropertiesExhibitTrait_allKeysWereCompared(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	allTraits(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allTraitsCompared(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	buildPropertyTraitsIfNeeded(): void;
    /* typeEncoding=@24@0:8@16 */
    	cacheGenerationSetFromSymbolArray(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	changedIndexesTree(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	combinedTraits(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	containedTraits(...args: any[]): any;
    /* typeEncoding=c24@0:8Q16 */
    	containsLayerWithTraits(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    	contentDirtyDiffRectForPage(...args: any[]): any;
    /* typeEncoding=^{?={?=iiii}^{?}}32@0:8@16d24 */
    	createDirtyRegionForPage_zoomLevel(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	currentPageHasChanged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	description(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24Q32 */
    	diffObject_withObject_indexInParent(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	diffObjects_withObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	diffs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstDoc(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	firstObjectAncestorStack(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	haveComponentsChanged(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	haveLocalSymbolsChanged(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	haveSymbolInstancesChanged(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	haveSymbolMastersChanged(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	haveSymbolOverrideValuesChanged(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithFirstDocument_secondDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	keysAffectedByDiff(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	mutableDiffs(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondDoc(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	secondObjectAncestorStack(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	selectionHasChanged(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setAllTraits(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAllTraitsCompared(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    	setCombinedTraits(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFirstObjectAncestorStack(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setMutableDiffs(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setSecondObjectAncestorStack(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setTraitsCalculated(...args: any[]): any;
    /* typeEncoding=c32@0:8Q16^c24 */
    	someChangedPropertiesExhibitTrait_allKeysWereCompared(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	traitsCalculated(...args: any[]): any;
  }
}

declare const MSTreeDiff: sketchInternal.MSTreeDiff;

