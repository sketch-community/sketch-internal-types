// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSImmutableModelObject extends MSModelObjectCommon {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	archiveReferenceIdentifier_bc(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	debugDescription(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    	description(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    	hash(): number;
    /* typeEncoding=@"MSModelObjectCacheGeneration", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	modelObjectCacheGeneration(): MSModelObjectCacheGeneration;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,nonatomic,readonly) */
    	objectID(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	subObjectsForTreeDiff(): cocoascript.NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    	superclass(): any;
    /* typeEncoding=#16@0:8 */
    	static mutableClass(...args: any[]): any;
    /* typeEncoding=Q24@0:8@16 */
    	static traitsForPropertyName(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	adjustModelObjectIDForCollaboration(...args: any[]): any;
    /* typeEncoding=^:24@0:8#16 */
    	allocateMigrationListForClass(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    	collaborationDiffCompareChildrenAgainst_treeComparison(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	collaborationDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	copyPropertiesFromObject(...args: any[]): any;
    /* typeEncoding=@24@0:8^{_NSZone=}16 */
    	copyWithZone(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	decodePropertiesWithUnarchiver(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	differsFromObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeAsJSON(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeObjectIDWithCoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodePropertiesWithCoder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithArchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=v48@0:8^:16q24q32@?40 */
    	enumerateMigrations_fromVersion_toVersion_block(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	influenceRectForAncestors_document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	initWithMinimalSetup(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithMutableModelObject(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithUnarchiver(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@?24 */
    	initWithUnarchiver_decodeBlock(...args: any[]): any;
    /* typeEncoding=@40@0:8@16q24q32 */
    	initWithUnarchiver_migratingFrom_toVersion(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualForCollaborationDiffToObject(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqualForDiffToObject(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	keysDifferingFromObject(...args: any[]): any;
    /* typeEncoding=^:24@0:8#16 */
    	migrationListForClass(...args: any[]): any;
    /* typeEncoding=@24@0:8^:16 */
    	migrationsInList(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	modelObjectCacheGeneration(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	newMutableCounterpart(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}32@0:8@16@24 */
    	overlayRectForAncestors_document(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	performInitWithMutableModelObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	performInitWithUnarchiver(...args: any[]): any;
    /* typeEncoding=v40@0:8@16q24q32 */
    	performMigrationsWithUnarchiver_migratingFrom_toVersion(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	pluginDiffPropertiesNotMatching_treeComparison(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	replacementObjectForJSONEncoder(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	shouldDiffSubObjectsForDifferingObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	subObjectsForTreeDiff(...args: any[]): any;
  }
}

declare const MSImmutableModelObject: sketchInternal.MSImmutableModelObject;

