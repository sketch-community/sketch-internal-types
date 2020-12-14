// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSModelObject extends MSModelObjectCommon {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	UIMetadataKey(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	affectedLayerIDForPatching(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=@"MSDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly,weak) */
    	documentData(): MSDocumentData;
    /* typeEncoding=q, ivar=_faultingState, attributes=(assign,nonatomic) */
    	faultingState(): number;
    /* typeEncoding=@"MSForeignObject", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	foreignObject(): MSForeignObject;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasBeenInvalidated(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSImmutableModelObject", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	immutableModelObject(): MSImmutableModelObject;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isFault(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	isForeign(): boolean;
    /* typeEncoding=@"MSModelObjectCacheGeneration", ivar=_modelObjectCacheGeneration, attributes=(retain,nonatomic) */
    	modelObjectCacheGeneration(): MSModelObjectCacheGeneration;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,dynamic,nonatomic) */
    	objectID(): cocoascript.NSString;
    /* typeEncoding=@"MSModelObject", ivar=_parentObject, attributes=(assign,nonatomic,weak) */
    	parentObject(): MSModelObject;
    /* typeEncoding=@"MSLayerGroup<MSRootLayer>", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	parentRoot(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=c16@0:8 */
    	allowsFaulting(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	immutableClass(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	persistsObjectID(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	refaultContentsOfArray_against(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	UIMetadataKey(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	addObject_toStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	addObjectsFromArray_toStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	affectedLayerIDForPatching(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	breakConnectionWith(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	cachedValueForKey(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@?24 */
    	cachedValueForKey_setUsingBlock(...args: any[]): any;
    /* typeEncoding=@28@0:8@16c24 */
    	childCollaborationObjectWithID_removing(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearCache(): void;
    /* typeEncoding=v24@0:8@16 */
    	clearCachedValueForKey(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    	copyPropertiesToObject_options(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	copyWithOptions(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	correctInvalidGamma(): void;
    /* typeEncoding=v16@0:8 */
    	didMoveToDocument(): void;
    /* typeEncoding=v16@0:8 */
    	didMoveToParentObject(): void;
    /* typeEncoding=@16@0:8 */
    	documentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	enumerateFaultedDescendantsUsingBlock(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    	faultingState(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	fireFaultIfNeeded(): void;
    /* typeEncoding=@16@0:8 */
    	foreignObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	generateObjectID(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasBeenInvalidated(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	immutableModelObject(...args: any[]): any;
    /* typeEncoding=@28@0:8c16@?20 */
    	initWithDefaults_block(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithImmutableModelObject(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	insertObject_afterObject_inStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v48@0:8@16Q24@32@40 */
    	insertObject_atIndex_ofStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	insertObject_beforeObject_inStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	insertObjects_afterObject_inStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    	insertObjects_beforeObject_inStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	invalidateImmutableObject(): void;
    /* typeEncoding=v16@0:8 */
    	invalidateImmutableObjectAndAncestors(): void;
    /* typeEncoding=v16@0:8 */
    	invalidateModelCacheGeneration(): void;
    /* typeEncoding=v32@0:8@16@24 */
    	invalidateModelCacheGenerationForObject_property(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isDescendantOfObject(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isFault(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isForeign(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	matchesImmutable(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	metadataForKey(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	metadataForKey_inDictionary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelObjectCacheGeneration(...args: any[]): any;
    /* typeEncoding=v48@0:8Q16Q24@32@40 */
    	moveObjectFromIndex_toIndex_ofStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	notifyDidMove(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	notifyWillMoveToParentObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	object_didChangeProperty(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	parentRoot(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	performInitWithImmutableModelObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	pluginDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refaultAgainst(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refaultChildrenAgainst(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	removeAllObjectsFromStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	removeObject_fromStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v40@0:8Q16@24@32 */
    	removeObjectAtIndex_fromStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	removeObjectsAtIndexes_fromStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	removeObjectsInArray_fromStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	replaceContentsWithArray_inStorage_forRelationship(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	setAsParentOnChildren(): void;
    /* typeEncoding=v24@0:8q16 */
    	setFaultingState(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setModelObjectCacheGeneration(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setObjectID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setParentObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setPrimitiveParent(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	storeMetadata_forKey(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    	storeMetadata_forKey_inDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	syncPropertiesFromObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	updateCachedValue_forKey(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	updateSwatchReferencesFrom_to(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	willMoveToDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	willMoveToParentObject(...args: any[]): any;
  }
}

declare const MSModelObject: sketchInternal.MSModelObject;

