// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSForeignObjectMenuBuilder extends MSSortableObjectMenuBuilder {
    /* typeEncoding=@"MSForeignObjectCollector", ivar=_collector, attributes=(retain,nonatomic) */
    	collector(): MSForeignObjectCollector;
    /* typeEncoding=@?, ivar=_filter, attributes=(copy,nonatomic) */
    	filter(): any;
    /* typeEncoding=c, ivar=_requiresLocalSubmenu, attributes=(assign,nonatomic) */
    	requiresLocalSubmenu(): boolean;
    /* typeEncoding=@?24@0:8@16 */
    	filterForReplacingSymbolInstances(...args: any[]): any;
    /* typeEncoding=@?36@0:8@16@24c32 */
    	symbolFilterForOverride_inDocument_restrictToMatchingSize(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=v56@0:8@16@24:32@40@48 */
    	addStyleOverridesToMenu_withTarget_action_forOverride_inDocument(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24@32@40:48 */
    	addStyleResetToMenu_withPrimaryOverride_document_target_action(...args: any[]): any;
    /* typeEncoding=v56@0:8@16@24:32@40@48 */
    	addSymbolOverridesToMenu_withTarget_action_forOverride_inDocument(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	buildMenuItemsForMenu_withAction(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24:32 */
    	buildMenuItemsForMenu_withTarget_selector(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24:32 */
    	buildMenuItemsForSymbolOverrideReplacement_withTarget_action(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	collector(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    	filter(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	gatherSymbolsForMenus(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithCollector_delegate(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithProvider_delegate(...args: any[]): any;
    /* typeEncoding=@44@0:8@16c24@28:36 */
    	menuItemForLibrary_mainMenu_target_selector(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24:32 */
    	overrideMenuItemsForSymbolMasterRefs_withTarget_action(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	requiresLocalSubmenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCollector(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    	setFilter(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setRequiresLocalSubmenu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	sketchrunnerMSForeignObjectMenuBuilder_menuWillOpen(...args: any[]): any;
  }
}

declare const MSForeignObjectMenuBuilder: sketchInternal.MSForeignObjectMenuBuilder;

