// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPersistentAssetCollection extends MSAssetCollection {
    /* typeEncoding=@"MSVersionedArchive", ivar=_archive, attributes=(retain,nonatomic) */
    	archive(): MSVersionedArchive;
    /* typeEncoding=c, ivar=_isDirty, attributes=(assign,nonatomic) */
    	isDirty(): boolean;
    /* typeEncoding=@24@0:8@16 */
    	static assetCollectionByMigratingPresetsFromSources(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static assetCollectionFromCurrentBundleWithName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static assetCollectionWithName(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static assetCollectionWithURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	static defaultMigrationArchiveForPresetNamed(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static defaultMigrationSources(...args: any[]): any;
    /* typeEncoding=#16@0:8 */
    	static immutableClass(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	static sharedGlobalAssets(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v32@0:8q16@24 */
    	addNoiseImagesIfNeededForVersion_withName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	archive(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	cleanupAfterTesting(): void;
    /* typeEncoding=v16@0:8 */
    	invalidateImmutableObjectAndAncestors(): void;
    /* typeEncoding=c16@0:8 */
    	isDirty(...args: any[]): any;
    /* typeEncoding=v24@0:8q16 */
    	migrateForLocalizationIfNeeded(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	resourceNeedingMigration(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	save(): void;
    /* typeEncoding=v16@0:8 */
    	saveIfNeeded(): void;
    /* typeEncoding=v24@0:8@16 */
    	setArchive(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsDirty(...args: any[]): any;
  }
}

declare const MSPersistentAssetCollection: sketchInternal.MSPersistentAssetCollection;

