const PAGE = 'Page'
const SIDEPANEL = 'SidePanel'
const APPLET_SIZE = "AppletSize"
const APPLET_TYPES = "AppletTypes"
const APPLET_MODES = "AppletModes"
const WORKFLOW = 'Workflow'
const LEGACY = "Legacy"
const DIALOG = "Dialog"

export const newTagsTransition = {
    to: 'adform-buyside-tag-list-selection',
    type: PAGE,
};

export const personalizedHomeTransition = {
    to: 'adform-all-personalizedHome-dashboard',
    type: PAGE,
};

export const viewNotificationListsTransition = {
    to: 'adform-all-notification-list',
    type: SIDEPANEL,
};

export const viewRecentsListsTransition = {
    to: 'adform-all-recents-list',
    type: SIDEPANEL,
};

export const viewProductUpdatesListsTransition = {
    to: 'adform-all-productUpdate-list',
    type: SIDEPANEL,
};

export const viewFavoritesListTransition = {
    to: 'adform-all-favorites-list',
    type: SIDEPANEL,
    size: APPLET_SIZE.LARGE,
};

export const allUserProfileSelectionListTransition = {
    to: 'adform-all-user-profile-selection-list',
    type: SIDEPANEL,
    size: APPLET_SIZE.SMALL,
    hasCancel: true,
};

export const viewHeatmapExample = {
    to: 'adform-aap-examples-heatmap',
    type: PAGE,
};

export const campaignsOrdersLineitemsListTransition = {
    to: 'adform-buyside-campaign-list',
    type: PAGE,
};

export const campaignsOverviewTransition = {
    to: 'adform-buyside-campaign-overview',
    type: PAGE,
};

export const selectKpiTransition = {
    to: 'adform-buyside-campaign-order-goalSelectionList',
    type: SIDEPANEL,
    size: APPLET_SIZE.SMALL,
};

export const viewChangeLogTransition = {
    to: 'adform-iframe-buyside-campaign-list-entityChangeLog',
    type: SIDEPANEL,
};

export const viewBudgetOverviewTransition = {
    to: 'adform-iframe-buyside-campaign-dashboard-budgetOverview',
    type: SIDEPANEL,
};

export const viewMarathonExportTransition = {
    to: 'adform-iframe-buyside-campaign-lightDetail-marathonExport',
    type: SIDEPANEL,
};

export const destinationListTransition = {
    to: 'adform-dmp-destination-list',
    type: PAGE,
};

export const destinationDetailTransition = {
    to: 'adform-dmp-destination-detail',
    type: PAGE,
};

export const ruleDetailsTransition = {
    to: 'adform-dmp-rule-lightDetail',
    type: SIDEPANEL,
};

export const audiencesSelectionTransition = {
    to: 'adform-dmp-audience-lightList-selection',
    type: SIDEPANEL,
};

export const audienceDetailTransition = {
    to: 'adform-dmp-audience-detail',
    type: PAGE,
};

export const audiencesListTransition = {
    to: 'adform-dmp-audiences-list',
    type: PAGE,
};

export const standaloneAudienceTransition = {
    to: 'AudienceAdvancedSelectionListStandalone',
    type: PAGE,
};

export const detailsRTBLineItemTransition = {
    to: 'adform-buyside-lineItem-detail-rtb',
    type: PAGE,
    defaultSubmit: 'campaignsOrdersLineitemsListTransition',
};

export const detailsDirectLineItemTransition = {
    to: 'adform-buyside-lineItem-detail-direct',
    type: PAGE,
    defaultSubmit: 'campaignsOrdersLineitemsListTransition',
};

export const detailsDirectLineItemGeneralTransition = {
    to: 'adform-buyside-lineItem-detail-direct-general',
    type: PAGE,
};

export const detailsRTBLineItemGeneralTransition = {
    to: 'adform-buyside-lineItem-detail-rtb-general',
    type: PAGE,
};

export const detailsBulkRTBLineItemLauncherTransition = {
    to: 'adform-buyside-lineItem-detail-bulk-rtb-launcher',
    type: PAGE,
};

export const audienceDetailMasterTransition = {
    to: 'adform-dmp-audience-detail-master',
    type: PAGE,
};

export const directPixelTransition = {
    to: 'adform-dmp-direct-pixel',
    type: SIDEPANEL,
    size: APPLET_SIZE.MEDIUM,
};

export const detailsBulkRTBLineItemTransition = {
    to: 'adform-buyside-lineItem-detail-bulk-rtb',
    type: SIDEPANEL,
};

export const creativeBulkEditTransition = {
    to: 'adform-buyside-creative-bulk-edit',
    type: SIDEPANEL,
};

export const bannerSelectionListTransition = {
    to: 'OAC-BANNER-SELECTION-LIST',
    type: SIDEPANEL,
};

export const detailsBulkDirectLineItemTransition = {
    to: 'adform-buyside-lineItem-detail-bulk-direct',
    type: SIDEPANEL,
};

export const editCampaignTransition = {
    to: 'adform-buyside-campaign-detail',
    type: PAGE,
    defaultSubmit: 'campaignsOrdersLineitemsListTransition',
    path: '/campaign/:id/:type(edit)',
    params: {
        type: APPLET_TYPES.EDIT,
    },
};

export const lightEditCampaignTransition = {
    to: 'adform-buyside-campaign-detail',
    type: SIDEPANEL,
    params: {
        type: APPLET_TYPES.EDIT,
        mode: APPLET_MODES.LIGHT,
    },
};

export const lightEditOrderTransition = {
    to: 'adform-buyside-order-lightDetail',
    type: SIDEPANEL,
    params: {
        type: APPLET_TYPES.EDIT,
        appletMode: APPLET_MODES.LIGHT,
    },
};

export const createOrderTransition = {
    to: 'adform-buyside-order-lightDetail',
    type: SIDEPANEL,
    params: {
        type: APPLET_TYPES.CREATE,
        appletMode: APPLET_MODES.LIGHT,
    },
};

export const editOrderTransition = {
    to: 'adform-buyside-order-lightDetail',
    type: SIDEPANEL,
    params: {
        type: APPLET_TYPES.EDIT,
        appletMode: APPLET_MODES.LIGHT,
    },
};

export const quickEditLineItemTransition = {
    to: 'adform-buyside-lineItem-detail-rtb',
    type: SIDEPANEL,
    params: {
        mode: APPLET_TYPES.QUICK_EDIT,
        appletMode: APPLET_MODES.LIGHT,
    },
};

export const detailsBulkCampaignTransition = {
    to: 'adform-buyside-campaign-detail-bulk',
    type: SIDEPANEL,
};

export const detailsBulkEditOrderTransition = {
    to: 'adform-buyside-order-detail-bulk',
    type: SIDEPANEL,
};

export const hyperlocalTransition = {
    to: 'adform-buyside-lineItem-hyperlocal-lightDetail',
    type: SIDEPANEL,
};

export const zipCodesTransition = {
    to: 'adform-buyside-lineitem-lightDetail-zipCodeTargeting',
    type: SIDEPANEL,
};

export const audienceAdvancedSelectionTransition = {
    to: 'AudienceAdvancedSelectionList',
    type: SIDEPANEL,
    size: APPLET_SIZE.XLARGE,
    flexible: true,
};

export const periodSelectorSidePanelTransition = {
    to: 'PeriodsSelector',
    type: SIDEPANEL,
};

export const applyRecommendationsTransition = {
    to: 'applyRecommendationsWorkflow',
    type: WORKFLOW,
};

export const campaignCreationWizardWorkflowTransition = {
    to: 'campaignCreationWizardWorkflow',
    type: WORKFLOW,
};

export const campaignCreationWithAdvertiserWizardWorkflowTransition = {
    to: 'campaignCreationWithAdvertiserWizardWorkflow',
    type: WORKFLOW,
};

export const orderCreationWizardWorkflowTransition = {
    to: 'orderCreationWizardWorkflow',
    type: WORKFLOW,
};

export const lineItemCreationWizardWorkflowTransition = {
    to: 'lineItemCreationWizardWorkflow',
    type: WORKFLOW,
};

export const lineItemEntitySelectionImportWorkflowTransition = {
    to: 'lineItemEntitySelectionImportWorkflow',
    type: WORKFLOW,
};

export const campaignsExcelImportEntitySelectionWorkflowTransition = {
    to: 'campaignExcelImportExportEntitySelectionWorkflow',
    type: WORKFLOW,
};

export const rtbLineItemsSelectionWorkflowTransition = {
    to: 'rtbLineItemsSelectionWorkflow',
    type: WORKFLOW,
};

export const importDealsDialogWorkflowTransition = {
    to: 'importDealsDialogWorkflow',
    type: WORKFLOW,
};

export const importRtbTargetingListAppsDialogWorkflowTransition = {
    to: 'importRtbTargetingListAppsDialogWorkflow',
    type: WORKFLOW,
};

export const importRtbTargetingListDomainsDialogWorkflowTransition = {
    to: 'importRtbTargetingListDomainsDialogWorkflow',
    type: WORKFLOW,
};

export const importDirectLineItemDialogWorkflowTransition = {
    to: 'importDirectLineItemDialogWorkflow',
    type: WORKFLOW,
};

export const importEntityDialogWorkflowTransition = {
    to: 'importCampaignDialogWorkflow',
    type: WORKFLOW,
};

export const importRtbTargetingListAppsDialogWorkflowTranstion = {
    to: 'importRtbTargetingListAppsDialogWorkflow',
    type: WORKFLOW,
};

export const importRtbTargetingListDomainsDialogWorkflowTranstion = {
    to: 'importRtbTargetingListDomainsDialogWorkflow',
    type: WORKFLOW,
};

export const importDirectLineItemSidePanelWorkflowTransition = {
    to: 'importDirectLineItemSidePanelWorkflow',
    type: WORKFLOW,
};

export const audienceMarketplaceFavoritesWorkflowTransition = {
    to: 'audienceMarketPlaceFavoritesWorkflow',
    type: WORKFLOW,
};

export const tagsOverviewWorkflowTransition = {
    to: 'tagsOverviewWorkflow',
    type: WORKFLOW,
};

export const tagsOverviewTransition = {
    to: 'NewDirectTagsOverview',
    type: PAGE,
};

export const createAdvertiserLegacyAppletTransition = {
    to: 'CreateAdvertiserLegacyApp',
    type: LEGACY,
};

export const viewBannersLegacyTransition = {
    to: 'BannerLegacyApp',
    type: LEGACY,
};

export const viewRTBTagsLegacyTransition = {
    to: 'TagsLegacyApp',
    type: LEGACY,
};

export const viewCampaignAlertsLegacyTransition = {
    to: 'CampaignAlertsLegacyApp',
    type: LEGACY,
};

export const viewTrackingPointsLegacyTransition = {
    to: 'SiteTrackingLegacyApp',
    type: LEGACY,
};

export const viewReportAnalyticsLegacyTransition = {
    to: 'StatsLegacyApp',
    type: LEGACY,
};

export const viewCustomReportLegacyTransition = {
    to: 'CustomReportLegacyApp',
    type: LEGACY,
};

export const viewPublisherCustomReportLegacyTransition = {
    to: 'PublisherCustomReportLegacyApp',
    type: LEGACY,
};

export const viewAlertsSetupLegacyTransition = {
    to: 'AlertSetupLegacyApp',
    type: LEGACY,
};

export const bulkCopyTransition = {
    to: 'adform-buyside-bulk-copy',
    type: SIDEPANEL,
    size: APPLET_SIZE.SMALL,
};

export const copyDuplicateTransition = {
    to: 'adform-buyside-copy-duplicate',
    type: SIDEPANEL,
    size: APPLET_SIZE.SMALL,
};

export const createDealLauncherTransition = {
    to: 'adform-buyside-deal-detail-page-launcher',
    type: PAGE,
};

export const inventoryDealsLightTransition = {
    to: 'adform-buyside-deal-lightDetail',
    type: SIDEPANEL,
    size: APPLET_SIZE.MEDIUM,
};

export const inventoryDealBulkEditTransition = {
    to: 'adform-buyside-deal-detail-bulk',
    type: SIDEPANEL,
    size: APPLET_SIZE.MEDIUM,
};

export const inventoryDealListTransition = {
    to: 'adform-buyside-deal-list',
    type: PAGE,
};

export const viewUsersPageTransition = {
    to: 'adform-all-user-list',
    type: PAGE,
};

export const campaignManagerReplaceTransition = {
    to: 'adform-campaign-manager-replace',
    type: SIDEPANEL,
};

export const bulkDetailDialogAppletTransition = {
    to: 'adform-bulk-detail-applet',
    type: DIALOG,
};

export const createUserWorkflowTransition = {
    to: 'createUserWorkflow',
    type: WORKFLOW,
};

export const editUserGeneralInfoAndRolesWorkflowTransition = {
    to: 'editUserGeneralInfoAndRolesWorkflow',
    type: WORKFLOW,
};

export const editPermissionInheritanceWorkflowTransition = {
    to: 'editPermissionInheritanceWorkflow',
    type: WORKFLOW,
};

export const editAdvertiserCampaignListWorkflowTransition = {
    to: 'editAdvertiserCampaignListWorkflow',
    type: WORKFLOW,
};

export const bulkAssignUsersWorkflowTransition = {
    to: 'bulkAssignUsersWorkflow',
    type: WORKFLOW,
};

export const assignBulkRolesToUsers = {
    to: 'assignBulkRolesWorkflow',
    type: WORKFLOW,
};

export const userListWorkflowTransitions = {
    to: 'userListWorkflow',
    type: WORKFLOW,
};

export const assignBulkAdvertiserCampaignsWorkflowTransition = {
    to: 'bulkAssignAdvertiserCampaignsWorkflow',
    type: WORKFLOW,
};

export const viewRolesPageTransition = {
    to: 'adform-all-role-list',
    type: PAGE,
};

export const createRoleWorkflowTransition = {
    to: 'createRoleWorkflow',
    type: WORKFLOW,
};

export const viewBusinessAccountPageTransition = {
    to: 'adform-all-businessAccount-list',
    type: PAGE,
};

export const viewBusinessAccountMasterPageTransition = {
    to: 'adform-all-businessAccount-detail-master',
    type: PAGE,
};

export const editBusinessAccountWorkflowTransition = {
    to: 'editBusinessAccountWorkflow',
    type: WORKFLOW,
};

export const rtbLineItemManageAudienceSegmentsWorkflowTransition = {
    to: 'rtbLineItemManageAudienceSegmentsWorkflow',
    type: WORKFLOW,
};

export const siteTrackingMenuLegacyTransition = {
    to: 'adform-all-entity-selection-list',
    type: SIDEPANEL,
    size: APPLET_SIZE.SMALL,
    params: "advertiserSelectionWorkflowParamsSiteTrackingNav",
};

export const viewDataManagementPlatformLegacyTransition = {
    to: 'adform-aap-DMP-legacy-application',
    type: LEGACY,
};

export const viewSupplySidePlatformLegacyTransition = {
    to: 'adform-aap-SSP-legacy-application',
    type: LEGACY,
};

export const entityExportTransition = {
    to: 'adform-all-entity-export-detail',
    type: SIDEPANEL,
    size: APPLET_SIZE.SMALL,
};

/* EXAMPLE transitions start */

export const appletStereotypeDefaultComponents = {
    to: 'adform-aap-examples-default-components',
    type: PAGE,
};

export const viewAppletAgencyExamplePageTransition = {
    to: 'adform-aap-examples-applet-agency',
    type: PAGE,
    defaultSubmit: 'viewMasterAppletExamplePageTransition',
};

export const viewAppletAExamplePageTransition = {
    to: 'adform-aap-examples-applet-a',
    type: PAGE,
    defaultSubmit: 'viewMasterAppletExamplePageTransition',
    params: {
        appletAKey: 'appletAValue',
    },
};

export const selectBannersExampleDialogTransition = {
    to: 'adform-aap-examples-pick-banners',
    type: DIALOG,
    size: 'x-large',
    // defaultSubmit: 'viewAppletAExamplePageTransition',
};

export const createNameExamplePageTransition = {
    to: 'adform-aap-examples-enter-name',
    type: PAGE,
    params: {
        testKey: 'testValue',
    },
    // defaultSubmit: 'viewAppletAExamplePageTransition',
};

export const viewExampleLegacyTransition = {
    to: 'adform-aap-examples-legacy-application',
    type: LEGACY,
};

export const selectBannersExampleWorkflowTransition = {
    to: 'selectBannersWorkflow',
    type: WORKFLOW,
};

export const viewV2ExampleWorkflowTransition = {
    to: 'exampleV2Workflow',
    type: WORKFLOW,
};

export const viewOrderedExampleWorkflowTransition = {
    to: 'exampleOrderedWorkflow',
    type: WORKFLOW,
};

export const viewMasterAppletExamplePageTransition = {
    to: 'adform-aap-examples-master-applet',
    type: PAGE,
};

export const viewAbstractDetailPageExamplePageTransition = {
    to: 'adform-aap-examples-abstract-detail-page',
    type: PAGE,
};

export const viewAAPRuntimeEnvExamplePageTransition = {
    to: 'adform-aap-examples-runtime-env',
    type: PAGE,
};

export const quickLauncherTransition = {
    to: 'adform-aap-quick-launcher',
    type: PAGE,
};

export const viewAAPRuntimeEnvExamplePagePathOverrideTransition = {
    to: 'adform-aap-examples-runtime-env',
    type: PAGE,
    path: '/examples/aapRuntimeEnvironmentOverride',
};

export const viewGlobalSubscriptionExamplePageTransition = {
    to: 'adform-aap-examples-global-subscription',
    type: PAGE,
};

export const viewGraphQLExamplePageTransition = {
    to: 'adform-aap-examples-graphql',
    type: PAGE,
};

export const viewTrackingParamsExamplePageTransition = {
    to: 'adform-aap-examples-tracking-params',
    type: PAGE,
    params: {
        // Purposely added params for this example.
        mode: 'read',
        additionalData: ['data1', 'data2'],
    },
};

export const viewLocalizationExamplePageTransition = {
    to: 'adform-aap-examples-localization',
    type: PAGE,
};

export const viewAbstractFormWithEmbeddedWorkflowExamplePageTransition = {
    to: 'adform-aap-examples-abstractform-with-embedded-workflow',
    type: PAGE,
};

export const viewAbstractFormExamplePageTransition = {
    to: 'adform-aap-examples-abstractform',
    type: PAGE,
};

export const viewAbstractUserGuidanceExamplePageTransition = {
    to: 'adform-aap-examples-abstract-userguidance',
    type: PAGE,
};

export const viewAbstractListWithInlineEdit = {
    to: 'adform-aap-examples-abstractlist-inline-edit',
    type: PAGE,
};

export const viewAbstractListExample = {
    to: 'adform-aap-examples-abstractlist',
    type: PAGE,
};

export const viewNewAbstractListExamplePageTransition = {
    to: 'adform-aap-examples-newabstractlist',
    type: PAGE,
};

export const viewNewAbstractListMultiLineEditExamplePageTransition = {
    to: 'adform-aap-examples-new-abstractlist-multiline-edit',
    type: PAGE,
};

export const viewNotificationsExamplePageTransition = {
    to: 'adform-aap-examples-notifications',
    type: PAGE,
};

export const viewCrumbsExamplePageTransition = {
    to: 'adform-aap-examples-crumbs',
    type: PAGE,
};

export const viewCrumbsExampleSidePanelTransition = {
    to: 'adform-aap-examples-crumbs',
    type: SIDEPANEL,
};

export const viewGraphqlSubscriptionExamplePageTransition = {
    to: 'adform-aap-examples-graphql-subscription',
    type: PAGE,
};

export const bulkEditRTBLineItemBudgetFlightTransition = {
    to: 'adform-buyside-detail-bulk-rtb-budget-flights-edit',
    type: SIDEPANEL,
    size: APPLET_SIZE.XLARGE,
};

export const viewAbstractDashboardExample = {
    to: 'adform-aap-examples-abstractdashboard',
    type: PAGE,
};

export const viewIframeWrapperExample = {
    to: 'adform-aap-examples-iframe-wrapper',
    type: PAGE,
};

export const optimizeRecommendationsEntitySelectionWorkflowTransition = {
    to: 'optimizeRecommendationsEntitySelectionWorkflow',
    type: WORKFLOW,
};

export const viewCustomReportTransition = {
    to: 'adform-iframe-buyside-report-list-custom',
    type: PAGE,
};

export const viewCustomReportViewerTransition = {
    to: 'adform-iframe-buyside-report-detail-customViewer',
    type: PAGE,
};

export const viewReportAnalyticsTransition = {
    to: 'adform-iframe-buyside-report-detail-predefined',
    type: PAGE,
};

export const viewCustomReportBuilderTransition = {
    to: 'adform-iframe-buyside-report-detail-customBuilder',
    type: PAGE,
};

export const viewCustomReportSchedulesTransition = {
    to: 'adform-iframe-buyside-reportSchedule-list',
    type: PAGE,
};

export const viewCustomReportLabelsTransition = {
    to: 'adform-iframe-buyside-reportLabel-list',
    type: PAGE,
};


export default {
    viewBusinessAccountPageTransition,
    viewBusinessAccountMasterPageTransition,
    detailsDirectLineItemTransition,
    audienceAdvancedSelectionTransition
}