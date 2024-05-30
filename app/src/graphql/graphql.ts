/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Email: { input: any; output: any };
  Map: { input: any; output: any };
  StrMap: { input: any; output: any };
  Time: { input: any; output: any };
  UUID: { input: any; output: any };
};

export enum AwsIntegrationType {
  Account = "ACCOUNT",
  Org = "ORG",
}

export type AnalyticDashboard = {
  __typename?: "AnalyticDashboard";
  /** List of analytics dashboards */
  dashboardId: Scalars["UUID"]["output"];
  /** The name of the dashboard */
  name: Scalars["String"]["output"];
};

export type AnalyticsDashboardTokenInput = {
  /** The id of the dashboard to display */
  dashboardId: Scalars["UUID"]["input"];
};

export type AnalyticsDashboardTokenResponse = {
  __typename?: "AnalyticsDashboardTokenResponse";
  /** The id generated for getting the analytics request */
  id: Scalars["UUID"]["output"];
  /** The token to use for guest access */
  token: Scalars["String"]["output"];
};

export type Attribution = {
  __typename?: "Attribution";
  id: Scalars["UUID"]["output"];
  /** The identity that has done the attribution to the resource */
  identity: Identity;
  /** The id of the identity that has done the attribution */
  identityId: Scalars["UUID"]["output"];
  /** The time of the first attribution to the resource */
  initialAttributionTime: Scalars["Time"]["output"];
  /** The time of the last attribution to the resource */
  lastAttributionTime: Scalars["Time"]["output"];
  /** Unique properties of the attribution */
  properties?: Maybe<Scalars["Map"]["output"]>;
  /** Human readable reason for the attribution */
  reason: Scalars["String"]["output"];
  /** The resource that was attributed */
  resource: Resource;
  /** The id of the resource that was attributed */
  resourceId: Scalars["UUID"]["output"];
  /** The source of the attribution */
  source?: Maybe<AttributionSource>;
  /** The type of the attribution */
  type: AttributionType;
  /** The weight of the attribution, defines how much the attribution, the higher the weight, the more important the attribution is */
  weight: Scalars["Float"]["output"];
};

export type AttributionFilterInput = {
  AND?: InputMaybe<Array<AttributionFilterInput>>;
  OR?: InputMaybe<Array<AttributionFilterInput>>;
  identity?: InputMaybe<IdentityFilterInput>;
  type?: InputMaybe<AttributionTypeFilter>;
};

export type AttributionSource = {
  __typename?: "AttributionSource";
  referenceLink?: Maybe<Scalars["String"]["output"]>;
  source: Scalars["String"]["output"];
};

export enum AttributionType {
  Creation = "CREATION",
  Deletion = "DELETION",
  Modification = "MODIFICATION",
  Reviewer = "REVIEWER",
}

export type AttributionTypeFilter = {
  EQ?: InputMaybe<AttributionType>;
  NEQ?: InputMaybe<AttributionType>;
};

export type Attributions = {
  /** Emails attributions to create associated to resourceId */
  attr?: InputMaybe<Array<Scalars["Email"]["input"]>>;
  /** ResourceId of the create attributions */
  resourceId: Scalars["UUID"]["input"];
};

export type AttributionsResult = {
  __typename?: "AttributionsResult";
  /** Describes the result of the create attributions operation */
  createAttributionsResult: Scalars["Boolean"]["output"];
  /** Describes the mails fail to send */
  failedMails?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Describes the result of the sending mail operation */
  sendMailResult: Scalars["Boolean"]["output"];
};

export type AwsIntegration = Integration & {
  __typename?: "AwsIntegration";
  accountId: Scalars["String"]["output"];
  createdAt: Scalars["Time"]["output"];
  id: Scalars["UUID"]["output"];
  name: Scalars["String"]["output"];
  status: IntegrationStatus;
  type: IntegrationType;
  updatedAt: Scalars["Time"]["output"];
};

export type AwsIntegrationInput = {
  accountId: Scalars["String"]["input"];
  type: AwsIntegrationType;
};

export type AwsOrgIntegration = Integration & {
  __typename?: "AwsOrgIntegration";
  accountCount: Scalars["Int"]["output"];
  accountId: Scalars["String"]["output"];
  createdAt: Scalars["Time"]["output"];
  id: Scalars["UUID"]["output"];
  managementAccountId?: Maybe<Scalars["String"]["output"]>;
  managementAccountName?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  status: IntegrationStatus;
  type: IntegrationType;
  updatedAt: Scalars["Time"]["output"];
};

export type BaselineUsage = {
  __typename?: "BaselineUsage";
  /** Baseline usage in ODE prices */
  baselineUsage: Scalars["Float"]["output"];
  /** Grouping fields */
  group: Scalars["Map"]["output"];
};

export type BooleanFilterInput = {
  EQ?: InputMaybe<Scalars["Boolean"]["input"]>;
  IsNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  NEQ?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum Category {
  Applicative = "Applicative",
  CloudResource = "CloudResource",
}

export type ChangeChildTeamsPayload = {
  __typename?: "ChangeChildTeamsPayload";
  success: Scalars["Boolean"]["output"];
};

export type ChangeMembersPayload = {
  __typename?: "ChangeMembersPayload";
  success: Scalars["Boolean"]["output"];
};

export type ChannelsResponse = {
  __typename?: "ChannelsResponse";
  /** The channels from this batch */
  channels: Array<SlackEntity>;
  /** The next cursor for pagination */
  nextCursor: Scalars["String"]["output"];
};

export enum ChartType {
  Barlinechart = "BARLINECHART",
  Table = "TABLE",
}

export type Commitment = {
  __typename?: "Commitment";
  /** Duration of the commitment in seconds */
  duration: Scalars["Int"]["output"];
  /** Commitment expiration time */
  endTime: Scalars["Time"]["output"];
  /** Commitment expiration in days */
  expiresInDays: Scalars["Int"]["output"];
  /** Commitment hourly price */
  hourlyPrice: Scalars["Float"]["output"];
  /** Commitment unique identifier */
  id: Scalars["String"]["output"];
  /** Commitment instance count */
  instanceCount?: Maybe<Scalars["Int"]["output"]>;
  /** All Upfront/Partial Upfront/No Upfront */
  offeringType: Scalars["String"]["output"];
  /** Commitment region */
  region: Scalars["String"]["output"];
  /** Commitment specifications, for example instance type, family */
  specifications: Array<Scalars["String"]["output"]>;
  /** Commitment start time */
  startTime: Scalars["Time"]["output"];
  /** Tenancy, for example Shared, Dedicated, Default */
  tenancy?: Maybe<Scalars["String"]["output"]>;
  /** Term of the commitments in months/years */
  term: Scalars["String"]["output"];
  /** Commitment type (RI, SP) */
  type: CommitmentType;
};

export type CommitmentInsight = {
  __typename?: "CommitmentInsight";
  /** Commitment */
  commitment: Commitment;
  /** Insight creation time */
  createdAt: Scalars["Time"]["output"];
  /** Insight id */
  id: Scalars["UUID"]["output"];
  /** Commitment project */
  project: Project;
  /** Insight type, for example UNDERUTILIZED */
  type: InsightType;
  /** Commitment utilization percentage */
  utilizationPercentage: Scalars["Float"]["output"];
};

export type CommitmentInsightFilters = {
  __typename?: "CommitmentInsightFilters";
  /** Return unique identifier of the filter query */
  _id: Scalars["String"]["output"];
  /** Creation time options */
  createdAt: MinMaxTime;
  /** Expiration in days options */
  expiresInDays: MinMax;
  /** Hourly price options */
  hourlyPrice: MinMax;
  /** Insight type options */
  insightType?: Maybe<Array<InsightType>>;
  /** Instance count options */
  instanceCount: MinMax;
  /** All Upfront/Partial Upfront/No Upfront */
  offeringType?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Project options */
  project?: Maybe<Array<ProjectIdName>>;
  /** Region options */
  region?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Specifications options */
  specifications?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Commitment types options */
  type?: Maybe<Array<CommitmentType>>;
  /** Utilization percentage options */
  utilization: MinMax;
};

export type CommitmentInsightsFilterInput = {
  AND?: InputMaybe<Array<CommitmentInsightsFilterInput>>;
  OR?: InputMaybe<Array<CommitmentInsightsFilterInput>>;
  /** Filter by commitment */
  commitment?: InputMaybe<CommitmentsFilterInput>;
  /** Insight creation time */
  createdAt?: InputMaybe<TimeFilterInput>;
  /** Filter by insight id */
  id?: InputMaybe<UuidFilterInput>;
  /** Filter by insight type, for example expiration, underutilized */
  type?: InputMaybe<InsightTypeFilterInput>;
  /** Filter by commitment utilization */
  utilization?: InputMaybe<FloatFilterInput>;
};

export type CommitmentInsightsOrdering = {
  createdAt?: InputMaybe<OrderDirection>;
  expiresInDays?: InputMaybe<OrderDirection>;
  hourlyPrice?: InputMaybe<OrderDirection>;
  insightType?: InputMaybe<OrderDirection>;
  instanceCount?: InputMaybe<OrderDirection>;
  projectId?: InputMaybe<OrderDirection>;
  region?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  utilization?: InputMaybe<OrderDirection>;
};

export enum CommitmentType {
  AwsComputeSavingsPlan = "AWSComputeSavingsPlan",
  AwsDynamoDbReservedCapacity = "AWSDynamoDBReservedCapacity",
  Awsec2ConvertibleReservedInstance = "AWSEC2ConvertibleReservedInstance",
  Awsec2InstanceSavingsPlan = "AWSEC2InstanceSavingsPlan",
  Awsec2StandardReservedInstance = "AWSEC2StandardReservedInstance",
  AwsElastiCacheReservedNode = "AWSElastiCacheReservedNode",
  AwsMemoryDbReservedNode = "AWSMemoryDBReservedNode",
  AwsOpenSearchReservedInstance = "AWSOpenSearchReservedInstance",
  AwsrdsReservedInstance = "AWSRDSReservedInstance",
  AwsRedshiftReservedNode = "AWSRedshiftReservedNode",
  AwsSageMakerSavingsPlan = "AWSSageMakerSavingsPlan",
}

export type CommitmentTypeFilterInput = {
  EQ?: InputMaybe<CommitmentType>;
  IN?: InputMaybe<Array<CommitmentType>>;
  NEQ?: InputMaybe<CommitmentType>;
};

export type CommitmentUtilization = {
  __typename?: "CommitmentUtilization";
  /** Grouping fields, for example EC2 and Instance type */
  group: Scalars["Map"]["output"];
  /** The total savings from commitments */
  savings: Scalars["Float"]["output"];
  /** The total price of the commitment */
  totalCommitmentsCost: Scalars["Float"]["output"];
  /** The actual utilization of the commitment */
  utilization: Scalars["Float"]["output"];
};

export type CommitmentUtilizationFilterInput = {
  /** Commitment id */
  commitmentId?: InputMaybe<StringFilterInput>;
  /** Service name, for example EC2, RDS, S3 etc */
  service?: InputMaybe<ServiceFilterInput>;
  /** Commitment type, for example RI, SP */
  type?: InputMaybe<CommitmentTypeFilterInput>;
};

export enum CommitmentUtilizationGrouping {
  CommitmentId = "COMMITMENT_ID",
  CommitmentType = "COMMITMENT_TYPE",
  Service = "SERVICE",
}

export type CommitmentsFilterInput = {
  AND?: InputMaybe<Array<CommitmentsFilterInput>>;
  OR?: InputMaybe<Array<CommitmentsFilterInput>>;
  /** Commitment expiration time */
  endTime?: InputMaybe<TimeFilterInput>;
  /** Filter by expiration in days */
  expiresInDays?: InputMaybe<IntFilterInput>;
  /** Filter by hourly price */
  hourlyPrice?: InputMaybe<FloatFilterInput>;
  /** Filter by instance count */
  instanceCount?: InputMaybe<IntFilterInput>;
  /** Filter by specifications, for example c5.large, m5.xlarge etc */
  instanceType?: InputMaybe<StringFilterInput>;
  /** Filter by offering type */
  offeringType?: InputMaybe<StringFilterInput>;
  /** Filter by product description, for example Linux, Windows/ MySql/Aurora etc */
  productDescription?: InputMaybe<StringFilterInput>;
  /** Filter by project id */
  projectId?: InputMaybe<StringFilterInput>;
  /** Filter by region */
  region?: InputMaybe<StringFilterInput>;
  /** Filter by specifications, for example instance type, family */
  specifications?: InputMaybe<StringFilterInput>;
  /** Commitment start time */
  startTime?: InputMaybe<TimeFilterInput>;
  /** Commitment types. for example RI, SP */
  type?: InputMaybe<CommitmentTypeFilterInput>;
};

export enum ConnectionType {
  AttachedTo = "ATTACHED_TO",
  DistributesTo = "DISTRIBUTES_TO",
  ManagedBy = "MANAGED_BY",
  ParentOf = "PARENT_OF",
  SnapshotOf = "SNAPSHOT_OF",
  TargetOrigin = "TARGET_ORIGIN",
}

export type ConnectionTypeFilterInput = {
  EQ?: InputMaybe<ConnectionType>;
  IN?: InputMaybe<Array<ConnectionType>>;
  NEQ?: InputMaybe<ConnectionType>;
  NIN?: InputMaybe<Array<ConnectionType>>;
};

export type CostAggregation = {
  __typename?: "CostAggregation";
  /** discounted price (or full price if no discount) */
  actualCost: Scalars["Float"]["output"];
  /** price after commitment discount (sp, ri) */
  commitmentCost: Scalars["Float"]["output"];
  /** The total cost that was covered by commitments */
  coveredCost: Scalars["Float"]["output"];
  /** Grouping fields, for example EC2 and Instance type */
  group: Scalars["Map"]["output"];
  /** The total cost before special discounts (such as EDP/PPA) */
  totalCostBeforeDiscounts: Scalars["Float"]["output"];
  /** full price before any discount */
  usageCost: Scalars["Float"]["output"];
};

export type CostFilterInput = {
  AND?: InputMaybe<Array<CostFilterInput>>;
  OR?: InputMaybe<Array<CostFilterInput>>;
  /** Commitment ID if we want to filter by specific commitment */
  commitmentId?: InputMaybe<StringFilterInput>;
  /** Cost type, for example usage, amortized, blended */
  costType?: InputMaybe<StringFilterInput>;
  /** Item type, for example instance type for EC2, db instance class for RDS etc */
  itemDescription?: InputMaybe<StringFilterInput>;
  /** OS, for example Linux, Windows */
  operatingSystem?: InputMaybe<StringFilterInput>;
  /** Pricing term, for example OnDemand, Spot */
  pricingTerm?: InputMaybe<StringFilterInput>;
  /** Pricing unit, for example Hrs, GB */
  pricingUnit?: InputMaybe<StringFilterInput>;
  /** Product family, for example Compute Instance, DB Instance, Cache Instance */
  productFamily?: InputMaybe<StringFilterInput>;
  /** Region name, for example us-east-1, us-west-2 etc */
  region?: InputMaybe<StringFilterInput>;
  /** Service name, for example EC2, RDS, S3 etc */
  service?: InputMaybe<ServiceFilterInput>;
  /** Tenancy, for example Shared, Dedicated, Default */
  tenancy?: InputMaybe<StringFilterInput>;
  /** Timestamp filter for the cost */
  timestamp?: InputMaybe<TimeFilterInput>;
};

export enum CostGrouping {
  CostType = "COST_TYPE",
  Day = "DAY",
  Hour = "HOUR",
  ItemType = "ITEM_TYPE",
  Month = "MONTH",
  Region = "REGION",
  Service = "SERVICE",
}

export enum CostSource {
  Effective = "EFFECTIVE",
  OnDemand = "ON_DEMAND",
  Unknown = "UNKNOWN",
}

export type CreateUserInput = {
  /** Email of the user */
  email: Scalars["Email"]["input"];
  /** First name of user */
  firstName: Scalars["String"]["input"];
  /** Last name of user */
  lastName: Scalars["String"]["input"];
  /** Remote Assistance Consent */
  remoteAssistanceConsent: Scalars["Boolean"]["input"];
  /** User role */
  role: Role;
  /** Silent mode to not send invitation email */
  silentMode?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Teams list for the user */
  teams?: InputMaybe<Array<UserTeamInput>>;
};

export type CustomField = {
  key: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  type: JiraCustomFieldType;
  values?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export enum CustomerStatus {
  Paying = "PAYING",
  Poc = "POC",
}

export type DataIntegrity = {
  __typename?: "DataIntegrity";
  dataCollectedFirstTime?: Maybe<Scalars["Time"]["output"]>;
  dataCollectedLastTime?: Maybe<Scalars["Time"]["output"]>;
  missingData?: Maybe<Array<MissingData>>;
};

export type DeleteTeamPayload = {
  __typename?: "DeleteTeamPayload";
  deleteCount: Scalars["Int"]["output"];
};

export type Diagnosis = {
  __typename?: "Diagnosis";
  /** Diagnosis chart type */
  chartType: ChartType;
  /** Data related to the diagnosis */
  data?: Maybe<Scalars["Map"]["output"]>;
  /** Diagnosis description */
  description: Scalars["String"]["output"];
  /** Diagnosis tooltip */
  tooltip: Scalars["String"]["output"];
};

export enum Direction {
  Both = "BOTH",
  In = "IN",
  Out = "OUT",
}

export type EffectiveSavingsRate = {
  __typename?: "EffectiveSavingsRate";
  /** Effective savings rate in percent */
  effectiveSavingsRate: Scalars["Float"]["output"];
  /** Grouping fields */
  group: Scalars["Map"]["output"];
  /** Savings from commitments */
  savings: Scalars["Float"]["output"];
};

export type EffectiveSavingsRateFilterInput = {
  /** Service name, for example EC2, RDS, S3 etc */
  service?: InputMaybe<ServiceFilterInput>;
};

export type EmailRecipient = Recipient & {
  __typename?: "EmailRecipient";
  id?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export enum EmailShareableType {
  Insight = "INSIGHT",
  Opportunity = "OPPORTUNITY",
}

export enum EsrGrouping {
  Service = "SERVICE",
}

export type External = {
  __typename?: "External";
  /** Returns a token for displaying the analytics dashboard */
  analyticsDashboardToken: AnalyticsDashboardTokenResponse;
  /** Returns all Jira external queries */
  jira: Jira;
  /** Returns all slack external queries */
  slack: Slack;
};

export type ExternalAnalyticsDashboardTokenArgs = {
  input: AnalyticsDashboardTokenInput;
};

export enum FilterType {
  Opportunity = "OPPORTUNITY",
  Resource = "RESOURCE",
}

export type FloatFilterInput = {
  EQ?: InputMaybe<Scalars["Float"]["input"]>;
  GT?: InputMaybe<Scalars["Float"]["input"]>;
  GTE?: InputMaybe<Scalars["Float"]["input"]>;
  LT?: InputMaybe<Scalars["Float"]["input"]>;
  LTE?: InputMaybe<Scalars["Float"]["input"]>;
  NEQ?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Identity = {
  __typename?: "Identity";
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["UUID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  typeName: IdentityType;
  userName?: Maybe<Scalars["String"]["output"]>;
};

export type IdentityFilterInput = {
  AND?: InputMaybe<Array<IdentityFilterInput>>;
  OR?: InputMaybe<Array<IdentityFilterInput>>;
  email?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  typeName?: InputMaybe<StringFilterInput>;
  userName?: InputMaybe<StringFilterInput>;
};

export enum IdentityType {
  Group = "GROUP",
  User = "USER",
}

export enum InsightType {
  ExpiringSoon = "EXPIRING_SOON",
  ReturnWindowClose = "RETURN_WINDOW_CLOSE",
  Underutilized = "UNDERUTILIZED",
  UtilizationDrop = "UTILIZATION_DROP",
  UtilizationRise = "UTILIZATION_RISE",
}

export type InsightTypeFilterInput = {
  EQ?: InputMaybe<InsightType>;
  IN?: InputMaybe<Array<InsightType>>;
  NEQ?: InputMaybe<InsightType>;
};

export type IntFilterInput = {
  EQ?: InputMaybe<Scalars["Int"]["input"]>;
  GT?: InputMaybe<Scalars["Int"]["input"]>;
  GTE?: InputMaybe<Scalars["Int"]["input"]>;
  IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  LT?: InputMaybe<Scalars["Int"]["input"]>;
  LTE?: InputMaybe<Scalars["Int"]["input"]>;
  NEQ?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Integration = {
  createdAt: Scalars["Time"]["output"];
  id: Scalars["UUID"]["output"];
  name: Scalars["String"]["output"];
  status: IntegrationStatus;
  type: IntegrationType;
  updatedAt: Scalars["Time"]["output"];
};

export enum IntegrationColumns {
  Name = "NAME",
  Status = "STATUS",
  Type = "TYPE",
}

export type IntegrationFilter = {
  name?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type IntegrationFilterInput = {
  name?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type IntegrationInput = {
  name: Scalars["String"]["input"];
  type: IntegrationTypesInput;
};

export type IntegrationPayload = {
  __typename?: "IntegrationPayload";
  integration?: Maybe<Integration>;
  success: Scalars["Boolean"]["output"];
};

export enum IntegrationStatus {
  Connecting = "CONNECTING",
  Deleted = "DELETED",
  Disconnected = "DISCONNECTED",
  NotConfigured = "NOT_CONFIGURED",
  PartiallyConnected = "PARTIALLY_CONNECTED",
  Success = "SUCCESS",
}

export enum IntegrationType {
  Aws = "AWS",
  AwsOrg = "AWS_ORG",
  Jira = "JIRA",
  Kubernetes = "KUBERNETES",
  Slack = "SLACK",
}

export type IntegrationTypesInput = {
  aws?: InputMaybe<AwsIntegrationInput>;
  jira?: InputMaybe<JiraIntegrationInput>;
  slack?: InputMaybe<SlackIntegrationInput>;
};

export type InvitationAndAssignmentPayload = {
  __typename?: "InvitationAndAssignmentPayload";
  /** Updated opportunity itself */
  opportunity: Opportunity;
  /** Request success status. can be true or false */
  success: Scalars["Boolean"]["output"];
};

export type IssueType = {
  __typename?: "IssueType";
  hasPriorityField: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  requiredFields?: Maybe<Array<RequiredField>>;
};

export type Jira = {
  __typename?: "Jira";
  /** Return jira project metadata */
  project: JiraProjectMeta;
  /** Return jira projects */
  projects?: Maybe<Array<JiraProject>>;
  /** Return ticket by opportunity id */
  ticket?: Maybe<JiraTicket>;
  /** Return jira users */
  users?: Maybe<Array<JiraUser>>;
};

export type JiraProjectArgs = {
  integrationId: Scalars["UUID"]["input"];
  projectKey: Scalars["String"]["input"];
};

export type JiraProjectsArgs = {
  integrationId: Scalars["UUID"]["input"];
};

export type JiraTicketArgs = {
  integrationId: Scalars["UUID"]["input"];
  shareableId: Scalars["UUID"]["input"];
  shareableType: ShareableType;
  type: TicketType;
};

export type JiraUsersArgs = {
  integrationId: Scalars["UUID"]["input"];
};

export enum JiraCustomFieldType {
  Array = "array",
  Number = "number",
  Option = "option",
  String = "string",
  StringsArray = "stringsArray",
}

export type JiraIntegration = Integration & {
  __typename?: "JiraIntegration";
  createdAt: Scalars["Time"]["output"];
  id: Scalars["UUID"]["output"];
  jiraUrl: Scalars["String"]["output"];
  jiraUser: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  status: IntegrationStatus;
  type: IntegrationType;
  updatedAt: Scalars["Time"]["output"];
};

export type JiraIntegrationInput = {
  token: Scalars["String"]["input"];
  url: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type JiraProject = {
  __typename?: "JiraProject";
  id: Scalars["String"]["output"];
  key: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type JiraProjectMeta = {
  __typename?: "JiraProjectMeta";
  issueTypes?: Maybe<Array<IssueType>>;
  project: JiraProject;
};

export type JiraTicket = {
  __typename?: "JiraTicket";
  id: Scalars["String"]["output"];
  link: Scalars["String"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
  type: TicketType;
};

export enum JiraTicketPriority {
  High = "High",
  Highest = "Highest",
  Low = "Low",
  Medium = "Medium",
}

export type JiraUser = {
  __typename?: "JiraUser";
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type KubernetesIntegration = Integration & {
  __typename?: "KubernetesIntegration";
  accountID: Scalars["String"]["output"];
  accountName: Scalars["String"]["output"];
  createdAt: Scalars["Time"]["output"];
  deletedAt?: Maybe<Scalars["Time"]["output"]>;
  id: Scalars["UUID"]["output"];
  lastSyncDate?: Maybe<Scalars["Time"]["output"]>;
  name: Scalars["String"]["output"];
  region: Scalars["String"]["output"];
  status: IntegrationStatus;
  type: IntegrationType;
  updatedAt: Scalars["Time"]["output"];
};

export type LinkedWords = {
  __typename?: "LinkedWords";
  type: TicketType;
  url: Scalars["String"]["output"];
  words: Scalars["String"]["output"];
};

export type MinMax = {
  __typename?: "MinMax";
  max?: Maybe<Scalars["Float"]["output"]>;
  min?: Maybe<Scalars["Float"]["output"]>;
};

export type MinMaxTime = {
  __typename?: "MinMaxTime";
  max?: Maybe<Scalars["Time"]["output"]>;
  min?: Maybe<Scalars["Time"]["output"]>;
};

export type MissingData = {
  __typename?: "MissingData";
  commitments: Array<Scalars["String"]["output"]>;
  projectId: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  addChildTeamsToTeam: ChangeChildTeamsPayload;
  addMemberToTeams: ChangeMembersPayload;
  addMembersToTeam: ChangeMembersPayload;
  /** Creates manual attribution for a resource by ID */
  addResourceAttributions: AttributionsResult;
  /** Invite new user and assign opportunity */
  assignNewUser: InvitationAndAssignmentPayload;
  /** Add new comment on opportunity */
  createComment: OpportunityActivityPayload;
  /** Create a new integration */
  createIntegration: IntegrationPayload;
  /** Create new opportunities notification rule */
  createOpportunitiesNotificationRule: RulePayload;
  /** Create new resources notification rule */
  createResourcesNotificationRule: RulePayload;
  createSavedFilter?: Maybe<SavedFilter>;
  createTeam: Team;
  /** Create a new ticket using ADF format in description */
  createTicketV3: TicketPayload;
  /** Create a new user */
  createUser: UsersPayload;
  /** Delete an existing integration by ID */
  deleteIntegration: IntegrationPayload;
  /** Delete an existing notification rule */
  deleteNotificationRule: Scalars["Boolean"]["output"];
  deleteSavedFilter: Scalars["Boolean"]["output"];
  deleteTeam: DeleteTeamPayload;
  /** Delete user */
  deleteUser: UserPayload;
  /** enables or disables the S3 lens setting */
  enableS3LensSetting: Scalars["Boolean"]["output"];
  removeChildTeamsFromTeam: ChangeChildTeamsPayload;
  removeMemberFromTeams: ChangeMembersPayload;
  removeMembersFromTeam: ChangeMembersPayload;
  /** Resend invitation to user */
  resendInvitation: ResendInvitationPayload;
  shareViaEmail: SharePayload;
  /** Share via slack */
  shareViaSlack: SharePayload;
  /** unassign user from opportunity */
  unassignUser: OpportunityPayload;
  /** Update an existing integration by ID */
  updateIntegration: IntegrationPayload;
  /** Update opportunities notification rule */
  updateOpportunitiesNotificationRule: RulePayload;
  /** Update specific opportunity values */
  updateOpportunity: OpportunityPayload;
  /** Update resources notification rule */
  updateResourcesNotificationRule: RulePayload;
  updateSavedFilter?: Maybe<SavedFilter>;
  /** Update self */
  updateSelf: User;
  updateTeam: UpdateTeamPayload;
  updateTeamMember: ChangeMembersPayload;
  /** Update user */
  updateUser: UserPayload;
};

export type MutationAddChildTeamsToTeamArgs = {
  childTeamIds: Array<Scalars["UUID"]["input"]>;
  id: Scalars["UUID"]["input"];
};

export type MutationAddMemberToTeamsArgs = {
  teamIds: Array<Scalars["UUID"]["input"]>;
  userId: Scalars["UUID"]["input"];
};

export type MutationAddMembersToTeamArgs = {
  id: Scalars["UUID"]["input"];
  userIds: Array<Scalars["UUID"]["input"]>;
};

export type MutationAddResourceAttributionsArgs = {
  input: Attributions;
};

export type MutationAssignNewUserArgs = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["UUID"]["input"];
  input: CreateUserInput;
};

export type MutationCreateCommentArgs = {
  input: OpportunityActivityCommentInput;
};

export type MutationCreateIntegrationArgs = {
  input: IntegrationInput;
};

export type MutationCreateOpportunitiesNotificationRuleArgs = {
  input: OpportunitiesNotificationRuleInput;
};

export type MutationCreateResourcesNotificationRuleArgs = {
  input: ResourcesNotificationRuleInput;
};

export type MutationCreateSavedFilterArgs = {
  input: SavedFilterInput;
};

export type MutationCreateTeamArgs = {
  input: TeamInput;
};

export type MutationCreateTicketV3Args = {
  input: TicketInput;
  integrationId: Scalars["UUID"]["input"];
};

export type MutationCreateUserArgs = {
  input: Array<CreateUserInput>;
};

export type MutationDeleteIntegrationArgs = {
  id: Scalars["UUID"]["input"];
};

export type MutationDeleteNotificationRuleArgs = {
  ruleName: Scalars["String"]["input"];
};

export type MutationDeleteSavedFilterArgs = {
  id: Scalars["UUID"]["input"];
};

export type MutationDeleteTeamArgs = {
  deleteSubTeams: Scalars["Boolean"]["input"];
  id: Scalars["UUID"]["input"];
};

export type MutationDeleteUserArgs = {
  userId: Scalars["UUID"]["input"];
};

export type MutationEnableS3LensSettingArgs = {
  enable: Scalars["Boolean"]["input"];
};

export type MutationRemoveChildTeamsFromTeamArgs = {
  childTeamIds: Array<Scalars["UUID"]["input"]>;
  id: Scalars["UUID"]["input"];
};

export type MutationRemoveMemberFromTeamsArgs = {
  teamIds: Array<Scalars["UUID"]["input"]>;
  userId: Scalars["UUID"]["input"];
};

export type MutationRemoveMembersFromTeamArgs = {
  id: Scalars["UUID"]["input"];
  userIds: Array<Scalars["UUID"]["input"]>;
};

export type MutationResendInvitationArgs = {
  userId: Scalars["UUID"]["input"];
};

export type MutationShareViaEmailArgs = {
  emailTemplate: TemplateName;
  id: Scalars["UUID"]["input"];
  recipients: Array<RecipientInput>;
  shareableType: EmailShareableType;
};

export type MutationShareViaSlackArgs = {
  id: Scalars["UUID"]["input"];
  recipients: Array<RecipientInput>;
  shareableType: SlackShareableType;
};

export type MutationUnassignUserArgs = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["UUID"]["input"];
};

export type MutationUpdateIntegrationArgs = {
  id: Scalars["UUID"]["input"];
  patch: UpdateIntegrationPatchInput;
};

export type MutationUpdateOpportunitiesNotificationRuleArgs = {
  input: OpportunitiesNotificationRuleChangesInput;
  ruleName: Scalars["String"]["input"];
};

export type MutationUpdateOpportunityArgs = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["UUID"]["input"];
  input: OpportunityPatch;
};

export type MutationUpdateResourcesNotificationRuleArgs = {
  input: ResourcesNotificationRuleChangesInput;
  ruleName: Scalars["String"]["input"];
};

export type MutationUpdateSavedFilterArgs = {
  id: Scalars["UUID"]["input"];
  input: SavedFilterInput;
};

export type MutationUpdateSelfArgs = {
  input: UpdateSelfPatch;
};

export type MutationUpdateTeamArgs = {
  id: Scalars["UUID"]["input"];
  input: TeamUpdateInput;
};

export type MutationUpdateTeamMemberArgs = {
  role: TeamMemberRole;
  teamId: Scalars["UUID"]["input"];
  userId: Scalars["UUID"]["input"];
};

export type MutationUpdateUserArgs = {
  input: UpdateUserPatch;
  userId: Scalars["UUID"]["input"];
};

export enum NotificationMethod {
  Email = "EMAIL",
  Slack = "SLACK",
}

export type OpportunitiesAggregate = {
  __typename?: "OpportunitiesAggregate";
  /** account count */
  accountsCount: Scalars["Int"]["output"];
  /** Number of opportunities in the group */
  count: Scalars["Int"]["output"];
  /** Values for each 'group by' column */
  group: Scalars["Map"]["output"];
  /** Group Id - project id, service name or definition id */
  groupId: Scalars["String"]["output"];
  /** Name of the group - project name, service name or opportunity type */
  groupName: Scalars["String"]["output"];
  /** Total savings for the group, in USD */
  savings: Scalars["Float"]["output"];
};

export type OpportunitiesFilterInput = {
  AND?: InputMaybe<Array<OpportunitiesFilterInput>>;
  NOT?: InputMaybe<OpportunitiesFilterInput>;
  OR?: InputMaybe<Array<OpportunitiesFilterInput>>;
  /** Filter by opportunity assigned user */
  assignedUser?: InputMaybe<UsersFilterInput>;
  /** By opportunity creation time */
  createdAt?: InputMaybe<TimeFilterInput>;
  /** By opportunity resource current cost */
  currentCost?: InputMaybe<FloatFilterInput>;
  /** Filter by opportunity definition id */
  definitionId?: InputMaybe<IntFilterInput>;
  /** By opportunity effort */
  effort?: InputMaybe<FloatFilterInput>;
  /** Filter by external ticket related to the opportunity */
  externalTicket?: InputMaybe<TicketFilterInput>;
  /** By opportunity type */
  name?: InputMaybe<StringFilterInput>;
  /** By opportunity priority */
  priority?: InputMaybe<FloatFilterInput>;
  /** Filter by project related to the opportunity */
  project?: InputMaybe<ProjectFilterInput>;
  /** By project id to which the opportunity belongs to, usually is the account id or unique identifier the opportunity resides in */
  projectId?: InputMaybe<StringFilterInput>;
  /** Filter by resource related to the opportunity */
  resource?: InputMaybe<ResourceFilterInput>;
  /** By opportunity resource id */
  resourceId?: InputMaybe<StringFilterInput>;
  /** By opportunity risk */
  risk?: InputMaybe<FloatFilterInput>;
  /** By opportunity saving amount */
  savingAmount?: InputMaybe<FloatFilterInput>;
  /** Filter by opportunity status */
  status?: InputMaybe<OpportunityStatusFilterInput>;
};

export type OpportunitiesGroupFilterInput = {
  /** By Group Type, only brings data relevant to the specified group type */
  groupType?: InputMaybe<OpportunityGroupType>;
  /** other opportunity filters that will filter out the groups themselves */
  opportunityFilter?: InputMaybe<OpportunitiesFilterInput>;
};

export type OpportunitiesNotificationRuleChangesInput = {
  /** Should run in retroactive mode */
  ApplyRetroactively?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** All Associated entities of the resource */
  AssociateAllResourceEntities?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Rule conditions for opportunity type to create query from */
  filterInput?: InputMaybe<OpportunitiesFilterInput>;
  /** Rule recipients */
  recipients?: InputMaybe<Array<InputMaybe<RecipientInput>>>;
  /** Rule name */
  ruleName?: InputMaybe<Scalars["String"]["input"]>;
  /** Status of the rule. Can be enabled/Disabled */
  status?: InputMaybe<Status>;
  /** Rule trigger event. can be added/changed/resolved */
  triggerEvent?: InputMaybe<TriggerEvent>;
};

export type OpportunitiesNotificationRuleInput = {
  /** Should run in retroactive mode */
  ApplyRetroactively: Scalars["Boolean"]["input"];
  /** All Associated entities of the resource */
  AssociateAllResourceEntities: Scalars["Boolean"]["input"];
  /** Rule conditions for opportunity type to create query from */
  filterInput?: InputMaybe<OpportunitiesFilterInput>;
  /** Rule recipients */
  recipients: Array<InputMaybe<RecipientInput>>;
  /** Rule name */
  ruleName: Scalars["String"]["input"];
  /** Rule trigger event. can be added/changed/resolved */
  triggerEvent: TriggerEvent;
};

export type OpportunitiesOrdering = {
  accountName?: InputMaybe<OrderDirection>;
  currentPrice?: InputMaybe<OrderDirection>;
  effort?: InputMaybe<OrderDirection>;
  impact?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  priority?: InputMaybe<OrderDirection>;
  resolvedAt?: InputMaybe<OrderDirection>;
  resourceId?: InputMaybe<OrderDirection>;
  risk?: InputMaybe<OrderDirection>;
  savingAmount?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type OpportunitiesScript = {
  __typename?: "OpportunitiesScript";
  /** The remediation script for the opportunities */
  script: Scalars["String"]["output"];
};

export type Opportunity = {
  __typename?: "Opportunity";
  /** Assigned user of the opportunity */
  assignedUser?: Maybe<User>;
  /** Assigned user id of the opportunity */
  assignedUserId?: Maybe<Scalars["UUID"]["output"]>;
  /** Creation time of the opportunity */
  createdAt: Scalars["Time"]["output"];
  /** The current cost before the opportunity implementation */
  currentCost: Scalars["Float"]["output"];
  /** Definition id related to the opportunity */
  definitionId: Scalars["Int"]["output"];
  /** Definition status related to the opportunity */
  definitionStatus: Scalars["String"]["output"];
  /** Diagnosis data */
  diagnosisData: Scalars["Map"]["output"];
  /** Effort for specific opportunity */
  effort: Scalars["Float"]["output"];
  /** Indication of savings amount accuracy */
  estimatedSavings: Scalars["Boolean"]["output"];
  /** All evidence related to the opportunity */
  evidenceData: Scalars["Map"]["output"];
  /** Opportunity unique id */
  id: Scalars["UUID"]["output"];
  /** Impact for specific opportunity */
  impact: Scalars["Float"]["output"];
  /** All metadata related to the opportunity */
  metadata: Scalars["Map"]["output"];
  /** The exact opportunity category */
  name: Scalars["String"]["output"];
  /** The new price after the opportunity implementation */
  newPrice: Scalars["Float"]["output"];
  /** All properties that relates to the opportunity presentation at the client */
  presentationLayer: PresentationLayer;
  /** Priority for specific opportunity regarding to all opportunities */
  priority: Scalars["Int"]["output"];
  /** The project which this opportunity belongs to */
  project: Project;
  /** Unique provider identifier for this opportunity */
  providerResourceId: Scalars["String"]["output"];
  /** Resolved time of the opportunity */
  resolvedAt?: Maybe<Scalars["Time"]["output"]>;
  /** The resource that the opportunity belongs to */
  resource: Resource;
  /** Resource identifier associated with the opportunity */
  resourceId: Scalars["UUID"]["output"];
  /** Risk for specific opportunity */
  risk: Scalars["Float"]["output"];
  /** The actual saving amount for this resource */
  savingAmount: Scalars["Float"]["output"];
  /** The actual saving percentage for this resource */
  savingPercentage: Scalars["Float"]["output"];
  /** Opportunity status */
  status?: Maybe<OpportunityStatus>;
  /** Is this opportunity first seen by user */
  unreadByLoggedUser: Scalars["Boolean"]["output"];
  /** Updated time of the opportunity */
  updatedAt?: Maybe<Scalars["Time"]["output"]>;
};

export type OpportunityActivity = {
  __typename?: "OpportunityActivity";
  /** The comment on the opportunity if there is one */
  comment?: Maybe<Scalars["String"]["output"]>;
  /** The date when the opportunity activity occurred */
  createdAt: Scalars["Time"]["output"];
  /** Id of the opportunity activity */
  id: Scalars["UUID"]["output"];
  /** The actual opportunity activity message */
  message: Scalars["String"]["output"];
  /** Metadata related to the opportunity activity message */
  metadata: OpportunityActivityLogMetadata;
  /** Opportunity id related to the opportunity activity */
  opportunityId: Scalars["UUID"]["output"];
  /** The actual opportunity activity type */
  type: OpportunityActivityType;
  /** User id related to opportunity activity */
  userId?: Maybe<Scalars["UUID"]["output"]>;
};

export type OpportunityActivityCommentInput = {
  /** The comment if there is one */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** Opportunity id related to the activity */
  opportunityId: Scalars["UUID"]["input"];
};

export type OpportunityActivityInput = {
  /** The comment if there is one */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** The opportunity activity activity */
  message: Scalars["String"]["input"];
  /** Metadata related to the opportunity activity message */
  metadata?: InputMaybe<OpportunityActivityLogMetadataInput>;
  /** Opportunity id related to the activity */
  opportunityId: Scalars["UUID"]["input"];
  /** The opportunity activity type */
  type: OpportunityActivityType;
};

export type OpportunityActivityLogMetadata = {
  __typename?: "OpportunityActivityLogMetadata";
  /** AssignedUser is the user that the opportunity is assigned to */
  assignedUser: Scalars["String"]["output"];
  /** BoldedWords is a list of words that should be bolded in the message */
  boldedWords: Array<Scalars["String"]["output"]>;
  /** Linked words is a list of words that should be linked in the message */
  linkedWords: Array<LinkedWords>;
  /** Recipients is a list of recipients that the opportunity was shared with */
  recipients: Array<Maybe<Scalars["String"]["output"]>>;
  /** Statuses is a list of statuses that should be included in the message */
  statuses: Array<OpportunityStatus>;
};

export type OpportunityActivityLogMetadataInput = {
  boldedWords?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type OpportunityActivityPayload = {
  __typename?: "OpportunityActivityPayload";
  /** The created opportunity activity itself */
  activity: OpportunityActivity;
  /** Request success status. can be true or false */
  success: Scalars["Boolean"]["output"];
};

export enum OpportunityActivityType {
  OpportunityAddedComment = "OPPORTUNITY_ADDED_COMMENT",
  OpportunityCreated = "OPPORTUNITY_CREATED",
  OpportunityEmailShare = "OPPORTUNITY_EMAIL_SHARE",
  OpportunityFirstSeen = "OPPORTUNITY_FIRST_SEEN",
  OpportunityJiraTicketCreation = "OPPORTUNITY_JIRA_TICKET_CREATION",
  OpportunityResolved = "OPPORTUNITY_RESOLVED",
  OpportunityReviewedAndAssigned = "OPPORTUNITY_REVIEWED_AND_ASSIGNED",
  OpportunitySlackShare = "OPPORTUNITY_SLACK_SHARE",
  OpportunityStatusUpdate = "OPPORTUNITY_STATUS_UPDATE",
  OpportunityTicketStatusUpdate = "OPPORTUNITY_TICKET_STATUS_UPDATE",
  OpportunityUnassign = "OPPORTUNITY_UNASSIGN",
}

/** OpportunityFilters allows to query filter options for opportunities */
export type OpportunityFilters = {
  __typename?: "OpportunityFilters";
  /** Return unique identifier of the filter query */
  // _id: Scalars["String"]["output"];
  assignedUser?: Maybe<Array<User>>;
  effort?: Maybe<Array<Scalars["Int"]["output"]>>;
  managementAccounts?: Maybe<Array<ProjectIdName>>;
  opportunityType?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Returns distinct owners of opportunities matching the filter */
  owners?: Maybe<Array<Scalars["String"]["output"]>>;
  priority?: Maybe<Array<Scalars["Int"]["output"]>>;
  projects?: Maybe<Array<ProjectIdName>>;
  resourceName?: Maybe<Array<Scalars["String"]["output"]>>;
  resourceType?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Canonical resource type */
  resourceTypeName?: Maybe<Array<Scalars["String"]["output"]>>;
  risk?: Maybe<Array<Scalars["Int"]["output"]>>;
  savings: MinMax;
  service?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Returns distinct tags of resources matching the filter */
  tagKeys?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Returns distinct values of the specified tag key of resources matching the filter */
  tagValues?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Returns teams for the user */
  teams?: Maybe<Array<TeamIdName>>;
};

/** OpportunityFilters allows to query filter options for opportunities */
export type OpportunityFiltersOwnersArgs = {
  distinct?: InputMaybe<OwnerDistinctValue>;
};

/** OpportunityFilters allows to query filter options for opportunities */
export type OpportunityFiltersTagValuesArgs = {
  key: Scalars["String"]["input"];
};

export type OpportunityGroup = {
  __typename?: "OpportunityGroup";
  /** List of accounts this opportunity is present in */
  accounts: Array<OpportunityGroupAccount>;
  /** Number of accounts this opportunity is present in */
  accountsCount: Scalars["Int"]["output"];
  /** Number of opportunities in the group */
  count: Scalars["Int"]["output"];
  /** description of the opportunity type, only for TYPE grouping */
  description: Scalars["String"]["output"];
  /** Maximum Effort of the group */
  effort: Scalars["Int"]["output"];
  /** Group Name - project name, service name or opportunity type */
  groupName: Scalars["String"]["output"];
  /** Opportunity Group id */
  groupType: OpportunityGroupType;
  /** List of opportunities in the group */
  opportunities: Array<Opportunity>;
  /** Remediation Script for the query */
  remediationScript: OpportunitiesScript;
  /** Maximum Risk of the group */
  risk: Scalars["Int"]["output"];
  /** Total savings for the group, in USD */
  savings: Scalars["Float"]["output"];
  /** Service the resource is part of */
  service: Scalars["String"]["output"];
};

export type OpportunityGroupOpportunitiesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OpportunityGroupRemediationScriptArgs = {
  language: ScriptLanguage;
};

export type OpportunityGroupAccount = {
  __typename?: "OpportunityGroupAccount";
  /** id of the account */
  id: Scalars["String"]["output"];
  /** name of the account */
  name: Scalars["String"]["output"];
};

export enum OpportunityGroupType {
  DetachedVolume = "DETACHED_VOLUME",
  ExpensiveEbsVolumeType = "EXPENSIVE_EBS_VOLUME_TYPE",
  InactiveEbsSnapshot = "INACTIVE_EBS_SNAPSHOT",
  InactiveS3Bucket = "INACTIVE_S3_BUCKET",
  InactiveVpcEndpoint = "INACTIVE_VPC_ENDPOINT",
  MissingCompressionCloudfront = "MISSING_COMPRESSION_CLOUDFRONT",
  MissingS3PolicyMultipartUpload = "MISSING_S3_POLICY_MULTIPART_UPLOAD",
}

export enum OpportunityGrouping {
  CreationTimeByDay = "CREATION_TIME_BY_DAY",
  CreationTimeByMonth = "CREATION_TIME_BY_MONTH",
  CreationTimeByWeek = "CREATION_TIME_BY_WEEK",
  CreationTimeByYear = "CREATION_TIME_BY_YEAR",
  Project = "PROJECT",
  ProjectCanonicalName = "PROJECT_CANONICAL_NAME",
  Service = "SERVICE",
  Status = "STATUS",
  Type = "TYPE",
}

export type OpportunityPatch = {
  /** Assigned user id */
  assignedUserId?: InputMaybe<Scalars["UUID"]["input"]>;
  /** Opportunity Status */
  status?: InputMaybe<OpportunityStatus>;
};

export type OpportunityPayload = {
  __typename?: "OpportunityPayload";
  /** Updated opportunity itself */
  opportunity: Opportunity;
  /** Request success status. can be true or false */
  success: Scalars["Boolean"]["output"];
};

export enum OpportunityStatus {
  Dismissed = "DISMISSED",
  InProgress = "IN_PROGRESS",
  Open = "OPEN",
  Resolved = "RESOLVED",
  Validated = "VALIDATED",
}

export type OpportunityStatusFilterInput = {
  EQ?: InputMaybe<OpportunityStatus>;
  ILIKE?: InputMaybe<OpportunityStatus>;
  IN?: InputMaybe<Array<OpportunityStatus>>;
  LIKE?: InputMaybe<OpportunityStatus>;
  NEQ?: InputMaybe<OpportunityStatus>;
  NIN?: InputMaybe<Array<OpportunityStatus>>;
};

export enum OrderDirection {
  Ascending = "ASCENDING",
  AscendingNullsFirst = "ASCENDING_NULLS_FIRST",
  AscendingNullsLast = "ASCENDING_NULLS_LAST",
  Descending = "DESCENDING",
  DescendingNullsFirst = "DESCENDING_NULLS_FIRST",
  DescendingNullsLast = "DESCENDING_NULLS_LAST",
}

export enum OwnerDistinctValue {
  All = "ALL",
  Email = "EMAIL",
  Name = "NAME",
}

export type OwnerIdentity = {
  __typename?: "OwnerIdentity";
  /** type of the identity owner. can be team or email */
  type?: Maybe<Scalars["String"]["output"]>;
  /** name of the identity owner */
  value?: Maybe<Scalars["String"]["output"]>;
};

export type OwnerIdentityInput = {
  /** type of the identity owner. can be team or email */
  type?: InputMaybe<Scalars["String"]["input"]>;
  /** name of the identity owner */
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type PermissionModel = {
  __typename?: "PermissionModel";
  allowedAPIs?: Maybe<Array<Scalars["String"]["output"]>>;
  role: Role;
};

export type PresentationLayer = {
  __typename?: "PresentationLayer";
  /** Opportunity Diagnosis */
  diagnosis: Diagnosis;
  /** Opportunity Recommendation */
  recommendation: Recommendation;
  /** Opportunity Title */
  title: Scalars["String"]["output"];
};

export type PriceGroup = {
  __typename?: "PriceGroup";
  /** Describes how much of the price can be saved */
  efficiency: Scalars["Float"]["output"];
  /** Unique identifier for the group */
  id: Scalars["String"]["output"];
  /** Grouping key - integration name, service name or resource name */
  name: Scalars["String"]["output"];
  /** Total price for the group, in USD */
  price: Scalars["Float"]["output"];
};

export enum PriceGrouping {
  Project = "PROJECT",
  Resource = "RESOURCE",
  Service = "SERVICE",
}

export type Project = {
  __typename?: "Project";
  /** Name of the project, if not available, then id is used */
  canonicalName: Scalars["String"]["output"];
  /** Id of the project */
  id: Scalars["String"]["output"];
  /** integration id */
  integrationId: Scalars["UUID"]["output"];
  /** management account as project */
  managementAccount: Project;
  /** Name of the project */
  name: Scalars["String"]["output"];
};

export enum ProjectColumns {
  CanonicalName = "CANONICAL_NAME",
  Id = "ID",
  Name = "NAME",
}

export type ProjectFilterInput = {
  canonicalName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  managementAccountId?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
};

export type ProjectIdName = {
  __typename?: "ProjectIdName";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  /** Get all activities per opportunity */
  activities: Array<OpportunityActivity>;
  /** Get all analytics dashboards */
  analyticsDashboards: Array<AnalyticDashboard>;
  commitments: Array<Commitment>;
  commitmentsBaselineUsage: Array<BaselineUsage>;
  commitmentsCostAggregation: Array<CostAggregation>;
  commitmentsDataIntegrity: DataIntegrity;
  commitmentsInsights: Array<CommitmentInsight>;
  commitmentsInsightsFilters: CommitmentInsightFilters;
  commitmentsUtilization: Array<CommitmentUtilization>;
  effectiveSavingsRate: Array<EffectiveSavingsRate>;
  /** All queries that returns data from external data resources */
  external: External;
  getTeam: Team;
  /** Return a single integration by ID */
  integration?: Maybe<Integration>;
  /** Returns all installed integrations */
  integrations?: Maybe<Array<Integration>>;
  listSavedFilters: Array<SavedFilter>;
  listTeams: Array<Team>;
  me: UserMe;
  /** Returns all customer notification rules */
  notificationRules: Array<Rule>;
  /** Query opportunities */
  opportunities?: Maybe<Array<Maybe<Opportunity>>>;
  /** Query opportunities price aggregations */
  opportunitiesAggregate: Array<OpportunitiesAggregate>;
  /** Returns a single opportunity by ID */
  opportunity?: Maybe<Opportunity>;
  /** Query filter values for opportunities */
  opportunityFilters?: Maybe<OpportunityFilters>;
  /** Query Opportunity Groups */
  opportunityGroups: Array<OpportunityGroup>;
  /** Return permission model of all roles */
  permissions: Array<PermissionModel>;
  /** Returns all customer projects */
  projects?: Maybe<Array<Project>>;
  /** Returns a single resource by ID */
  resource?: Maybe<Resource>;
  /** Run aggregation on resources */
  resourceAggregation: Array<ResourceAggregation>;
  /** Query filter values for resources */
  resourceFilters?: Maybe<ResourceFilters>;
  /** Query discovered resources */
  resources?: Maybe<Array<Maybe<Resource>>>;
  /** Returns all customer sampling settings */
  samplingSettings: Array<SamplingSetting>;
  statisticsAggregation: Array<StatisticsAggregation>;
  /** Return all customer users */
  users: Array<User>;
};

export type QueryActivitiesArgs = {
  activityType?: InputMaybe<OpportunityActivityType>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  opportunityId: Scalars["UUID"]["input"];
};

export type QueryCommitmentsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CommitmentsFilterInput>;
};

export type QueryCommitmentsBaselineUsageArgs = {
  groupBy?: InputMaybe<Array<CostGrouping>>;
  where?: InputMaybe<CostFilterInput>;
};

export type QueryCommitmentsCostAggregationArgs = {
  groupBy?: InputMaybe<Array<CostGrouping>>;
  where?: InputMaybe<CostFilterInput>;
};

export type QueryCommitmentsInsightsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CommitmentInsightsOrdering>>;
  where?: InputMaybe<CommitmentInsightsFilterInput>;
};

export type QueryCommitmentsInsightsFiltersArgs = {
  where?: InputMaybe<CommitmentInsightsFilterInput>;
};

export type QueryCommitmentsUtilizationArgs = {
  groupBy?: InputMaybe<Array<CommitmentUtilizationGrouping>>;
  timeRange: TimeRangeInput;
  where?: InputMaybe<CommitmentUtilizationFilterInput>;
};

export type QueryEffectiveSavingsRateArgs = {
  groupBy?: InputMaybe<Array<EsrGrouping>>;
  timeRange: TimeRangeInput;
  where?: InputMaybe<EffectiveSavingsRateFilterInput>;
};

export type QueryGetTeamArgs = {
  id?: InputMaybe<Scalars["UUID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryIntegrationArgs = {
  id: Scalars["UUID"]["input"];
};

export type QueryIntegrationsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<IntegrationFilterInput>;
};

export type QueryListTeamsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryNotificationRulesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  ruleId?: InputMaybe<Scalars["UUID"]["input"]>;
  ruleName?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryOpportunitiesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpportunitiesOrdering>>;
  where?: InputMaybe<OpportunitiesFilterInput>;
};

export type QueryOpportunitiesAggregateArgs = {
  groupBy?: InputMaybe<Array<OpportunityGrouping>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OpportunitiesFilterInput>;
};

export type QueryOpportunityArgs = {
  id: Scalars["UUID"]["input"];
};

export type QueryOpportunityFiltersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OpportunitiesFilterInput>;
};

export type QueryOpportunityGroupsArgs = {
  where?: InputMaybe<OpportunitiesGroupFilterInput>;
};

export type QueryProjectsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProjectFilterInput>;
};

export type QueryResourceArgs = {
  id: Scalars["UUID"]["input"];
};

export type QueryResourceAggregationArgs = {
  groupBy?: InputMaybe<Array<ResourceGrouping>>;
  where?: InputMaybe<ResourceFilterInput>;
};

export type QueryResourceFiltersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ResourceFilterInput>;
};

export type QueryResourcesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ResourceOrdering>>;
  where?: InputMaybe<ResourceFilterInput>;
};

export type QuerySamplingSettingsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryStatisticsAggregationArgs = {
  groupBy?: InputMaybe<Array<StatisticsGrouping>>;
  where?: InputMaybe<StatisticsFilterInput>;
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<Array<UserOrderInput>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UsersFilterInput>;
};

export type Recipient = {
  id?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type RecipientInput = {
  EMAIL?: InputMaybe<Scalars["Email"]["input"]>;
  SLACK_CHANNEL?: InputMaybe<SlackChannelRecipientInput>;
  SLACK_USER?: InputMaybe<SlackUserRecipientInput>;
};

export enum RecipientTypes {
  Email = "EMAIL",
  SlackChannel = "SLACK_CHANNEL",
  SlackUser = "SLACK_USER",
}

export type Recommendation = {
  __typename?: "Recommendation";
  /** Recommendation summary */
  summary: Scalars["String"]["output"];
};

export type RequiredField = {
  __typename?: "RequiredField";
  autoCompleteUrl?: Maybe<Scalars["String"]["output"]>;
  key: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  options?: Maybe<Array<Scalars["String"]["output"]>>;
  type: Scalars["String"]["output"];
};

export type ResendInvitationPayload = {
  __typename?: "ResendInvitationPayload";
  success: Scalars["Boolean"]["output"];
};

export type Resource = {
  __typename?: "Resource";
  /** Map of unique attributes of the resource */
  attributes: Scalars["Map"]["output"];
  /** Return a list of attributions for the resource */
  attributions?: Maybe<Array<Attribution>>;
  /** Category of resource (e.g - Cloud, Applicative, etc.) */
  category: Category;
  /** Return resource connections */
  connections?: Maybe<Array<ResourceConnection>>;
  /** Resource creation date */
  creationTime?: Maybe<Scalars["Time"]["output"]>;
  /** whether resource was deleted */
  deleted: Scalars["Boolean"]["output"];
  /** When the resource was marked as deleted */
  deletionTime: Scalars["Time"]["output"];
  /** Time when resource was created in the discovery for the first time */
  discoveryCreationTime: Scalars["Time"]["output"];
  /** Unique identifier of the resource */
  id: Scalars["UUID"]["output"];
  /** Identities owners of the resource */
  identities?: Maybe<Array<OwnerIdentity>>;
  /** Integration of the resource */
  integration: Integration;
  /** Last time resource was updated */
  lastDiscoveryUpdate: Scalars["Time"]["output"];
  /** Meta is a flag that indicates that resource is not a real resource but a meta resource, a VPC, Region, etc. */
  meta: Scalars["Boolean"]["output"];
  /** Metadata information about the resources, collected from enrichment and analyzing of the resource */
  metadata?: Maybe<ResourceMetadata>;
  /** Monthly cost of the resource */
  monthlyCost: Scalars["Float"]["output"];
  /** Monthly savings of the resource */
  monthlySavings: Scalars["Float"]["output"];
  /** Name of the resource */
  name: Scalars["String"]["output"];
  /**
   * Return immediate related neighbors of the resource
   * @deprecated Use connections
   */
  neighbors?: Maybe<Array<ResourceConnection>>;
  /** Opportunities of the resource and its child resources */
  opportunities?: Maybe<Array<Opportunity>>;
  /** Project of the resource */
  project: Project;
  /** Project id to which the resource belongs to, usually is the account id or unique identifier the resource resides in */
  projectId: Scalars["String"]["output"];
  /** Provider of the resource */
  provider: ResourceProvider;
  /** Region the resource is located in */
  region: Scalars["String"]["output"];
  /** Unique identifier of the resource, as defined by the provider service */
  resourceId: Scalars["String"]["output"];
  /** Type of the resource */
  resourceType: Scalars["String"]["output"];
  /** Root parent of the resource */
  rootParent?: Maybe<Resource>;
  /** Service to which the resource belongs to */
  service: Scalars["String"]["output"];
  /** Map of tags of the resource */
  tags?: Maybe<Scalars["StrMap"]["output"]>;
  /** Canonical resource type */
  typeName: Scalars["String"]["output"];
};

export type ResourceConnectionsArgs = {
  depth?: Scalars["Int"]["input"];
  direction?: Direction;
  limit?: Scalars["Int"]["input"];
  offset?: Scalars["Int"]["input"];
  where?: InputMaybe<ResourceConnectionFilterInput>;
};

export type ResourceNeighborsArgs = {
  direction?: Direction;
  limit?: Scalars["Int"]["input"];
  offset?: Scalars["Int"]["input"];
  where?: InputMaybe<ResourceFilterInput>;
};

export type ResourceOpportunitiesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<OpportunitiesOrdering>>;
  where?: InputMaybe<OpportunitiesFilterInput>;
};

export type ResourceAggregation = {
  __typename?: "ResourceAggregation";
  /** Total number of resources */
  count: Scalars["Int"]["output"];
  /** Grouping values that were used to create the resource group */
  group: Scalars["Map"]["output"];
  /** Total cost of all resources */
  totalCost: Scalars["Float"]["output"];
  /** Total potential savings of all resources */
  totalSaving: Scalars["Float"]["output"];
};

export type ResourceAllocationRule = {
  __typename?: "ResourceAllocationRule";
  name: Scalars["String"]["output"];
  rule: Scalars["Map"]["output"];
};

export type ResourceAllocationRuleInput = {
  name: Scalars["String"]["input"];
  rule: ResourceFilterInput;
};

export type ResourceCategoryFilterInput = {
  EQ?: InputMaybe<Scalars["String"]["input"]>;
  IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  NEQ?: InputMaybe<Scalars["String"]["input"]>;
};

export type ResourceConnection = {
  __typename?: "ResourceConnection";
  connectionType: Scalars["String"]["output"];
  properties: Scalars["Map"]["output"];
  resource: Resource;
  source: Scalars["UUID"]["output"];
  target: Scalars["UUID"]["output"];
};

export type ResourceConnectionFilterInput = {
  /** Filter by connectionType */
  connectionType: ConnectionTypeFilterInput;
};

export type ResourceFilterInput = {
  /** Logical AND on a list of ResourceFilterInput */
  AND?: InputMaybe<Array<ResourceFilterInput>>;
  /** Logical OR on a list of ResourceFilterInput */
  OR?: InputMaybe<Array<ResourceFilterInput>>;
  /** Filter by attributions */
  attributions?: InputMaybe<AttributionFilterInput>;
  /** Filter by category of resource (e.g - Cloud, Applicative, etc.) */
  category?: InputMaybe<ResourceCategoryFilterInput>;
  /** Filter by resource creation date */
  creationTime?: InputMaybe<TimeFilterInput>;
  /** Filter with or without deleted resources */
  deletedAt?: InputMaybe<TimeFilterInput>;
  /** Filter by unique resource id */
  id?: InputMaybe<StringFilterInput>;
  /** Filter by integration of the resource */
  integration?: InputMaybe<IntegrationFilterInput>;
  /**
   * Filter by type of the resource
   * @deprecated Use resourceType instead
   */
  kind?: InputMaybe<StringFilterInput>;
  /** Filter by monthly cost */
  monthlyCost?: InputMaybe<FloatFilterInput>;
  /** Filter by monthly savings */
  monthlySavings?: InputMaybe<FloatFilterInput>;
  /** Filter by name of the resource */
  name?: InputMaybe<StringFilterInput>;
  /** Filter by opportunity of the resource */
  opportunity?: InputMaybe<OpportunitiesFilterInput>;
  /** Filter by resource potential savings */
  potentialSavings?: InputMaybe<FloatFilterInput>;
  /** Filter by project of the resource */
  project?: InputMaybe<ProjectFilterInput>;
  /** By project id to which the resource belongs to, usually is the account id or unique identifier the resource resides in */
  projectId?: InputMaybe<StringFilterInput>;
  /** Filter by provider */
  provider?: InputMaybe<ResourceProviderFilterInput>;
  /** Region the resource is located in */
  region?: InputMaybe<StringFilterInput>;
  /** Filter by unique identifier of the resource, as defined by the provider service */
  resourceId?: InputMaybe<StringFilterInput>;
  /** Filter by type of the resource */
  resourceType?: InputMaybe<StringFilterInput>;
  /** Filter by root parents ids */
  rootParentId?: InputMaybe<UuidFilterInput>;
  /** Filter by search term */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by service to which the resource belongs to */
  service?: InputMaybe<StringFilterInput>;
  /** Filter by tag */
  tag?: InputMaybe<StringMapFilterInput>;
  /** Filter by team id */
  teamId?: InputMaybe<UuidFilterInput>;
  /** Filter by canonical resource type */
  typeName?: InputMaybe<StringFilterInput>;
};

/** ResourceFilters allows to query filter options for resources */
export type ResourceFilters = {
  __typename?: "ResourceFilters";
  /** Return unique identifier of the filter query */
  _id?: Scalars["String"]["output"];
  /** Returns distinct integration names of resources matching the filter */
  integrationName?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Return unique list of values for resource management account */
  managementAccounts?: Maybe<Array<ProjectIdName>>;
  /** Returns min/max savings of resources matching the filter */
  monthlySaving?: MinMax;
  /** Returns min/max spend of resources matching the filter */
  monthlySpend?: MinMax;
  /** Returns distinct owners of resources matching the filter */
  owners?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Returns distinct projects of resources matching the filter */
  projects?: Maybe<Array<ProjectIdName>>;
  /** Returns distinct resource types of resources matching the filter */
  resourceType?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Returns distinct service names of resources matching the filter */
  service?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Return a unique list of keys from resource's tags */
  tagKeys?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Return unique list of values for a resource tag key */
  tagValues?: Maybe<Array<Scalars["String"]["output"]>>;
  /** Returns teams for the user */
  teams?: Maybe<Array<TeamIdName>>;
  /** Returns distinct resource type names of resources matching the filter */
  typeName?: Maybe<Array<Scalars["String"]["output"]>>;
};

/** ResourceFilters allows to query filter options for resources */
export type ResourceFiltersOwnersArgs = {
  distinct?: InputMaybe<OwnerDistinctValue>;
};

/** ResourceFilters allows to query filter options for resources */
export type ResourceFiltersTagValuesArgs = {
  key: Scalars["String"]["input"];
};

export enum ResourceGrouping {
  /** Group by creation time interval - day */
  CreationTimeByDay = "CREATION_TIME_BY_DAY",
  /** Group by creation time interval - month */
  CreationTimeByMonth = "CREATION_TIME_BY_MONTH",
  /** Group by creation time interval - week */
  CreationTimeByWeek = "CREATION_TIME_BY_WEEK",
  /** Group by creation time interval - year */
  CreationTimeByYear = "CREATION_TIME_BY_YEAR",
  /** Group by project */
  Project = "PROJECT",
  /** Group by project canonical name */
  ProjectCanonicalName = "PROJECT_CANONICAL_NAME",
  /** Group by root parent id */
  RootParentId = "ROOT_PARENT_ID",
  /** Group by service */
  Service = "SERVICE",
}

export type ResourceMetadata = {
  __typename?: "ResourceMetadata";
  /** Environment the resource belongs to */
  env?: Maybe<Scalars["String"]["output"]>;
  /** Possible purpose of the resource */
  purpose?: Maybe<Scalars["String"]["output"]>;
};

export type ResourceOrdering = {
  cost?: InputMaybe<OrderDirection>;
  creationTime?: InputMaybe<OrderDirection>;
  integrationName?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  potentialSavings?: InputMaybe<OrderDirection>;
  provider?: InputMaybe<OrderDirection>;
  resourceType?: InputMaybe<OrderDirection>;
  service?: InputMaybe<OrderDirection>;
};

export enum ResourceProvider {
  Aws = "AWS",
  Github = "GITHUB",
}

export type ResourceProviderFilterInput = {
  EQ?: InputMaybe<ResourceProvider>;
  IN?: InputMaybe<Array<ResourceProvider>>;
  NEQ?: InputMaybe<ResourceProvider>;
};

export type ResourcesNotificationRuleChangesInput = {
  /** Should run in retroactive mode */
  ApplyRetroactively?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** All Associated entities of the resource */
  AssociateAllResourceEntities: Scalars["Boolean"]["input"];
  /** Rule conditions for opportunity type to create query from */
  filterInput?: InputMaybe<ResourceFilterInput>;
  /** Rule recipients */
  recipients?: InputMaybe<Array<InputMaybe<RecipientInput>>>;
  /** Rule name */
  ruleName?: InputMaybe<Scalars["String"]["input"]>;
  /** Status of the rule. Can be enabled/Disabled */
  status?: InputMaybe<Status>;
  /** Rule trigger event. can be added/changed/resolved */
  triggerEvent?: InputMaybe<TriggerEvent>;
};

export type ResourcesNotificationRuleInput = {
  /** Should run in retroactive mode */
  ApplyRetroactively: Scalars["Boolean"]["input"];
  /** All Associated entities of the resource */
  AssociateAllResourceEntities: Scalars["Boolean"]["input"];
  /** Rule conditions for resource type to create query from */
  filterInput?: InputMaybe<ResourceFilterInput>;
  /** Rule recipients */
  recipients: Array<InputMaybe<RecipientInput>>;
  /** Rule name */
  ruleName: Scalars["String"]["input"];
  /** Rule trigger event. can be added/changed/resolved */
  triggerEvent: TriggerEvent;
};

export enum Role {
  Admin = "ADMIN",
  Member = "MEMBER",
}

export type RoleFilterInput = {
  eq?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
};

export type Rule = {
  __typename?: "Rule";
  /** Associate all resource entities */
  associateAllResourceEntities: Scalars["Boolean"]["output"];
  /** Rule creation time */
  createdAt: Scalars["Time"]["output"];
  /** Rule deletion time */
  deletedAt?: Maybe<Scalars["Time"]["output"]>;
  /** Rule conditions for resource type to create query from */
  filterInput: Scalars["Map"]["output"];
  /** Rule Id */
  id: Scalars["UUID"]["output"];
  /** Rule name */
  name: Scalars["String"]["output"];
  /** Rule recipients */
  recipients?: Maybe<Array<Recipient>>;
  /** Rule Status */
  status: Status;
  /** Rule trigger event. can be added/changed/resolved */
  triggerEvent: TriggerEvent;
  /** Rule trigger type. can be opportunity/resource */
  triggerType: TriggerType;
  /** Rule last update time */
  updatedAt: Scalars["Time"]["output"];
};

export type RulePayload = {
  __typename?: "RulePayload";
  /** The rule itself */
  rule: Rule;
  /** Request success status. can be true or false */
  success: Scalars["Boolean"]["output"];
};

export type SamplingSetting = {
  __typename?: "SamplingSetting";
  /** Setting ID */
  id: Scalars["UUID"]["output"];
  /** Is setting enabled */
  isEnable: Scalars["Boolean"]["output"];
  /** Is currently sampling */
  isSampling: Scalars["Boolean"]["output"];
  /** Projected price for the current month */
  projectedMonthlyPrice: Scalars["Float"]["output"];
  /** Sampling start time if started */
  samplingStartTime?: Maybe<Scalars["Time"]["output"]>;
  /** Setting type */
  settingType: Scalars["String"]["output"];
};

export type SavedFilter = {
  __typename?: "SavedFilter";
  /** Json string of the active filters - temporary until FE implement reverse logic to the filter according to @raz.gvili */
  activeFilters?: Maybe<Scalars["String"]["output"]>;
  /** The user who created the saved filter */
  createdAt: Scalars["Time"]["output"];
  /** The filter object */
  filter: Scalars["Map"]["output"];
  /** The id of the saved filter */
  id: Scalars["UUID"]["output"];
  /** The name of the saved filter */
  name: Scalars["String"]["output"];
  /** The filter type */
  type: FilterType;
  /** The date the saved filter was created */
  updatedAt: Scalars["Time"]["output"];
  /** The user who last updated the saved filter */
  userId: Scalars["UUID"]["output"];
};

export type SavedFilterInput = {
  activeFilters?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  opportunitiesFilter: OpportunitiesFilterInput;
};

export enum ScriptLanguage {
  Bash = "BASH",
  Python = "PYTHON",
}

export enum Service {
  AwsLambda = "AWSLambda",
  AmazonDynamoDb = "AmazonDynamoDB",
  AmazonEc2 = "AmazonEC2",
  AmazonEcs = "AmazonECS",
  AmazonEks = "AmazonEKS",
  AmazonEs = "AmazonES",
  AmazonElastiCache = "AmazonElastiCache",
  AmazonMemoryDb = "AmazonMemoryDB",
  AmazonRds = "AmazonRDS",
  AmazonRedshift = "AmazonRedshift",
  AmazonSageMaker = "AmazonSageMaker",
}

export type ServiceFilterInput = {
  EQ?: InputMaybe<Service>;
  IN?: InputMaybe<Array<Service>>;
  NEQ?: InputMaybe<Service>;
};

export type SharePayload = {
  __typename?: "SharePayload";
  id?: Maybe<Scalars["UUID"]["output"]>;
  /** Request success status. can be true or false */
  success: Scalars["Boolean"]["output"];
};

export enum ShareableType {
  Insight = "INSIGHT",
  Opportunity = "OPPORTUNITY",
}

export type Slack = {
  __typename?: "Slack";
  /** Returns all slack channels of the customer */
  channels?: Maybe<ChannelsResponse>;
  /** Returns all slack users of the customer */
  users: Array<SlackEntity>;
};

export type SlackChannelsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextCursor?: InputMaybe<Scalars["String"]["input"]>;
};

export type SlackUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  resourceOwners?: InputMaybe<Array<OwnerIdentityInput>>;
};

export type SlackChannelRecipient = Recipient & {
  __typename?: "SlackChannelRecipient";
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type SlackChannelRecipientInput = {
  /** Channel Id of the recipient */
  channelId: Scalars["String"]["input"];
  /** Recipient slack */
  type: RecipientTypes;
  /** Value of the slack object */
  value: Scalars["String"]["input"];
};

export type SlackEntity = {
  __typename?: "SlackEntity";
  /** The Email of the user */
  email: Scalars["Email"]["output"];
  /** The Id of the channel */
  id: Scalars["String"]["output"];
  /** The name of the channel */
  name: Scalars["String"]["output"];
  /** The entity related to the resource */
  relatedToResource?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SlackIntegration = Integration & {
  __typename?: "SlackIntegration";
  createdAt: Scalars["Time"]["output"];
  id: Scalars["UUID"]["output"];
  name: Scalars["String"]["output"];
  status: IntegrationStatus;
  type: IntegrationType;
  updatedAt: Scalars["Time"]["output"];
};

export type SlackIntegrationInput = {
  code: Scalars["String"]["input"];
};

export enum SlackShareableType {
  Insight = "INSIGHT",
  Opportunity = "OPPORTUNITY",
}

export type SlackUserRecipient = Recipient & {
  __typename?: "SlackUserRecipient";
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type SlackUserRecipientInput = {
  /** Email of the user */
  email: Scalars["Email"]["input"];
  /** Recipient slack */
  type: RecipientTypes;
  /** Value of the slack object */
  value: Scalars["String"]["input"];
};

/**
 * Aggregated statistics data.
 * this data is collected by aggregating cost and saving of resources and their opportunities.
 * Each time we aggregate, we call the result a snapshot.
 * This endpoint allows creating groups of snapshots and returning their average values.
 */
export type StatisticsAggregation = {
  __typename?: "StatisticsAggregation";
  /** Total number of statistics snapshots in the group */
  count: Scalars["Int"]["output"];
  /** Grouping values for all snapshots in the group */
  group: Scalars["Map"]["output"];
  /** Average potential savings in the snapshot group (in each snapshot this is the sum of the saving amount from all none resolved opportunities) */
  potentialSavings: Scalars["Float"]["output"];
  /** Average real savings in the snapshot group (in each snapshot this is the sum of the saving amount from all resolved opportunities) */
  realSavings: Scalars["Float"]["output"];
  /** Average total monthly cost of all snapshots in the group (in each snapshot this is the sum of all resources monthly costs) */
  totalMonthlyCost: Scalars["Float"]["output"];
};

export type StatisticsFilterInput = {
  AND?: InputMaybe<Array<StatisticsFilterInput>>;
  OR?: InputMaybe<Array<StatisticsFilterInput>>;
  /** Filter statistics snapshots by project id */
  project?: InputMaybe<StringFilterInput>;
  /** filter statistics snapshots by the time they were captured */
  snapshotTime?: InputMaybe<TimeFilterInput>;
};

export enum StatisticsGrouping {
  /** Group by creation time interval - day */
  CreationTimeByDay = "CREATION_TIME_BY_DAY",
  /** Group by creation time interval - month */
  CreationTimeByMonth = "CREATION_TIME_BY_MONTH",
  /** Group by creation time interval - week */
  CreationTimeByWeek = "CREATION_TIME_BY_WEEK",
  /** Group by creation time interval - year */
  CreationTimeByYear = "CREATION_TIME_BY_YEAR",
  /** Group by project */
  Project = "PROJECT",
}

export enum Status {
  Disabled = "DISABLED",
  Enabled = "ENABLED",
}

export type StringFilterInput = {
  EQ?: InputMaybe<Scalars["String"]["input"]>;
  ILIKE?: InputMaybe<Scalars["String"]["input"]>;
  IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  LIKE?: InputMaybe<Scalars["String"]["input"]>;
  NEQ?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringKeyValue = {
  Key: Scalars["String"]["input"];
  Value: Scalars["String"]["input"];
};

export type StringKeyValues = {
  Key: Scalars["String"]["input"];
  Values?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type StringMapFilterInput = {
  /** Value for key in json is equal to given value */
  EQ?: InputMaybe<StringKeyValue>;
  /** Key exists in json */
  HasKey?: InputMaybe<Scalars["String"]["input"]>;
  /** In checks if a one of values exists in for a certain key */
  IN?: InputMaybe<StringKeyValues>;
  /** Key exists in json, but it's value is not equal to given value */
  NEQ?: InputMaybe<StringKeyValue>;
  /** Key does not exist in json */
  NHasKey?: InputMaybe<Scalars["String"]["input"]>;
};

export type Team = {
  __typename?: "Team";
  childTeams: Array<Team>;
  createdAt: Scalars["Time"]["output"];
  id: Scalars["UUID"]["output"];
  memberCount: Scalars["Int"]["output"];
  members: Array<TeamMember>;
  name: Scalars["String"]["output"];
  parentTeams: Array<Team>;
  resourceAllocationRules: Array<ResourceAllocationRule>;
  resourceAllocationRulesCount: Scalars["Int"]["output"];
  type: TeamType;
  updatedAt: Scalars["Time"]["output"];
};

export type TeamIdName = {
  __typename?: "TeamIdName";
  id: Scalars["UUID"]["output"];
  name: Scalars["String"]["output"];
};

export type TeamInput = {
  members?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  name: Scalars["String"]["input"];
};

export type TeamMember = {
  __typename?: "TeamMember";
  createdAt: Scalars["Time"]["output"];
  role: TeamMemberRole;
  team: Team;
  teamId: Scalars["UUID"]["output"];
  updatedAt: Scalars["Time"]["output"];
  user: User;
  userId: Scalars["UUID"]["output"];
};

export enum TeamMemberRole {
  Manager = "MANAGER",
  Member = "MEMBER",
}

export enum TeamType {
  Organization = "ORGANIZATION",
  Team = "TEAM",
}

export type TeamUpdateInput = {
  ResourceAllocationRules?: InputMaybe<Array<ResourceAllocationRuleInput>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  teams?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
};

export enum TemplateName {
  AssignOpportunity = "assign_opportunity",
  ShareInsight = "share_insight",
  ShareOpportunity = "share_opportunity",
}

export type TicketFilterInput = {
  type?: InputMaybe<TicketTypeFilterInput>;
};

export type TicketInput = {
  assigneeId?: InputMaybe<Scalars["String"]["input"]>;
  body: Scalars["String"]["input"];
  customFields?: InputMaybe<Array<CustomField>>;
  issueType: Scalars["String"]["input"];
  priority?: InputMaybe<JiraTicketPriority>;
  projectKey: Scalars["String"]["input"];
  shareableId: Scalars["UUID"]["input"];
  shareableType: ShareableType;
  title: Scalars["String"]["input"];
  type: TicketType;
};

export type TicketPayload = {
  __typename?: "TicketPayload";
  success: Scalars["Boolean"]["output"];
  ticket?: Maybe<JiraTicket>;
};

export enum TicketType {
  Jira = "JIRA",
}

export type TicketTypeFilterInput = {
  EQ?: InputMaybe<Scalars["String"]["input"]>;
  IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  NEQ?: InputMaybe<Scalars["String"]["input"]>;
};

export type TimeFilterInput = {
  EQ?: InputMaybe<Scalars["Time"]["input"]>;
  GT?: InputMaybe<Scalars["Time"]["input"]>;
  GTE?: InputMaybe<Scalars["Time"]["input"]>;
  IsNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  LT?: InputMaybe<Scalars["Time"]["input"]>;
  LTE?: InputMaybe<Scalars["Time"]["input"]>;
  NEQ?: InputMaybe<Scalars["Time"]["input"]>;
};

export type TimeRangeInput = {
  /** End time for utilization query */
  end: Scalars["Time"]["input"];
  /** Start time for utilization query */
  start: Scalars["Time"]["input"];
};

export enum TriggerEvent {
  Added = "ADDED",
  Changed = "CHANGED",
  Resolved = "RESOLVED",
}

export enum TriggerType {
  Opportunity = "OPPORTUNITY",
  Resource = "RESOURCE",
}

export type UuidFilterInput = {
  EQ?: InputMaybe<Scalars["UUID"]["input"]>;
  IN?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
  IsNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  NEQ?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type UpdateIntegrationPatchInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<IntegrationType>;
};

export type UpdateSelfPatch = {
  /** First name of user */
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  /** Last name of user */
  lastName?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateTeamPayload = {
  __typename?: "UpdateTeamPayload";
  success: Scalars["Boolean"]["output"];
  team: Team;
};

export type UpdateUserPatch = {
  /** First name of user */
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  /** Last name of user */
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  /** Remote Assistance Consent */
  remoteAssistanceConsent?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** User role */
  role?: InputMaybe<Role>;
};

export type User = {
  __typename?: "User";
  /** Email of the user */
  email: Scalars["Email"]["output"];
  /** First name of user */
  firstName: Scalars["String"]["output"];
  /** Computed full name of user */
  fullName?: Maybe<Scalars["String"]["output"]>;
  /** User Id */
  id: Scalars["UUID"]["output"];
  /** Last name of user */
  lastName: Scalars["String"]["output"];
  /** Allowed APIs for the user */
  permissions: Array<Scalars["String"]["output"]>;
  /** Remote Assistance Consent */
  remoteAssistanceConsent?: Maybe<Scalars["Boolean"]["output"]>;
  /** User role */
  role: Role;
  /** Teams users is part of */
  teams: Array<Team>;
  /**
   * Teams list for the user
   * @deprecated Field no longer supported
   */
  teamsMember: Array<TeamMember>;
  /** User last time updated */
  updatedAt?: Maybe<Scalars["Time"]["output"]>;
};

export type UserMe = {
  __typename?: "UserMe";
  /** Customer Id */
  customerId: Scalars["UUID"]["output"];
  /** Customer Status */
  customerStatus: CustomerStatus;
  /** Email of the user */
  email: Scalars["Email"]["output"];
  /** First name of user */
  firstName: Scalars["String"]["output"];
  /** User Id */
  id: Scalars["UUID"]["output"];
  /** User intercom hmac Id */
  intercomId: Scalars["String"]["output"];
  /** If the user is super user */
  isSuperUser: Scalars["Boolean"]["output"];
  /** Last name of user */
  lastName: Scalars["String"]["output"];
  /** original user id */
  originalUserId?: Maybe<Scalars["UUID"]["output"]>;
  /** Allowed APIs for the user */
  permissions: Array<Scalars["String"]["output"]>;
  /** User role */
  role: Role;
  /** User last time updated */
  updatedAt?: Maybe<Scalars["Time"]["output"]>;
};

export type UserOrderInput = {
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
};

export type UserPayload = {
  __typename?: "UserPayload";
  success: Scalars["Boolean"]["output"];
  /** User */
  user: User;
};

export type UserTeamInput = {
  /** Team Id */
  id: Scalars["UUID"]["input"];
  /** Team member role */
  role?: InputMaybe<TeamMemberRole>;
};

export type UsersFilterInput = {
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<RoleFilterInput>;
};

export type UsersPayload = {
  __typename?: "UsersPayload";
  success: Scalars["Boolean"]["output"];
  /** Users list */
  users: Array<User>;
};

export type UpdateIntegrationsMutationVariables = Exact<{
  id: Scalars["UUID"]["input"];
  patch: UpdateIntegrationPatchInput;
}>;

export type UpdateIntegrationsMutation = {
  __typename?: "Mutation";
  updateIntegration: {
    __typename?: "IntegrationPayload";
    success: boolean;
    integration?:
      | { __typename?: "AwsIntegration"; id: any; name: string }
      | { __typename?: "AwsOrgIntegration"; id: any; name: string }
      | { __typename?: "JiraIntegration"; id: any; name: string }
      | { __typename?: "KubernetesIntegration"; id: any; name: string }
      | { __typename?: "SlackIntegration"; id: any; name: string }
      | null;
  };
};

export type DeleteIntegrationMutationVariables = Exact<{
  id: Scalars["UUID"]["input"];
}>;

export type DeleteIntegrationMutation = {
  __typename?: "Mutation";
  deleteIntegration: { __typename?: "IntegrationPayload"; success: boolean };
};

export type CreateIntegrationMutationVariables = Exact<{
  input: IntegrationInput;
}>;

export type CreateIntegrationMutation = {
  __typename?: "Mutation";
  createIntegration: {
    __typename?: "IntegrationPayload";
    success: boolean;
    integration?:
      | { __typename?: "AwsIntegration"; id: any; name: string }
      | { __typename?: "AwsOrgIntegration"; id: any; name: string }
      | { __typename?: "JiraIntegration"; id: any; name: string }
      | { __typename?: "KubernetesIntegration"; id: any; name: string }
      | { __typename?: "SlackIntegration"; id: any; name: string }
      | null;
  };
};

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectsQuery = {
  __typename?: "Query";
  projects?: Array<{
    __typename?: "Project";
    canonicalName: string;
    id: string;
  }> | null;
};

export type HasSlackIntegrationQueryVariables = Exact<{ [key: string]: never }>;

export type HasSlackIntegrationQuery = {
  __typename?: "Query";
  integrations?: Array<
    | { __typename?: "AwsIntegration"; id: any }
    | { __typename?: "AwsOrgIntegration"; id: any }
    | { __typename?: "JiraIntegration"; id: any }
    | { __typename?: "KubernetesIntegration"; id: any }
    | { __typename?: "SlackIntegration"; id: any }
  > | null;
};

export type SlackUsersAndChannelsQueryVariables = Exact<{
  resourceOwners?: InputMaybe<Array<OwnerIdentityInput> | OwnerIdentityInput>;
}>;

export type SlackUsersAndChannelsQuery = {
  __typename?: "Query";
  external: {
    __typename: "External";
    slack: {
      __typename: "Slack";
      channels?: {
        __typename: "ChannelsResponse";
        channels: Array<{
          __typename: "SlackEntity";
          id: string;
          name: string;
        }>;
      } | null;
      users: Array<{
        __typename: "SlackEntity";
        name: string;
        email: any;
        relatedToResource?: boolean | null;
      }>;
    };
  };
};

export type ShareViaSlackMutationVariables = Exact<{
  id: Scalars["UUID"]["input"];
  shareableType: SlackShareableType;
  recipients: Array<RecipientInput> | RecipientInput;
}>;

export type ShareViaSlackMutation = {
  __typename?: "Mutation";
  shareViaSlack: {
    __typename?: "SharePayload";
    success: boolean;
    id?: any | null;
  };
};

export type CreateOpportunitiesNotificationRuleMutationVariables = Exact<{
  ruleName: Scalars["String"]["input"];
  triggerEvent: TriggerEvent;
  filterInput?: InputMaybe<OpportunitiesFilterInput>;
  applyRetroactively: Scalars["Boolean"]["input"];
  recipients: Array<InputMaybe<RecipientInput>> | InputMaybe<RecipientInput>;
  associateAllResourceEntities: Scalars["Boolean"]["input"];
}>;

export type CreateOpportunitiesNotificationRuleMutation = {
  __typename?: "Mutation";
  createOpportunitiesNotificationRule: {
    __typename?: "RulePayload";
    success: boolean;
    rule: { __typename?: "Rule"; id: any };
  };
};

export type UpdateOpportunitiesNotificationRuleMutationVariables = Exact<{
  ruleName: Scalars["String"]["input"];
  triggerEvent: TriggerEvent;
  filterInput?: InputMaybe<OpportunitiesFilterInput>;
  applyRetroactively: Scalars["Boolean"]["input"];
  recipients: Array<InputMaybe<RecipientInput>> | InputMaybe<RecipientInput>;
  associateAllResourceEntities: Scalars["Boolean"]["input"];
}>;

export type UpdateOpportunitiesNotificationRuleMutation = {
  __typename?: "Mutation";
  updateOpportunitiesNotificationRule: {
    __typename?: "RulePayload";
    success: boolean;
    rule: { __typename?: "Rule"; id: any };
  };
};

export type Get_Notifications_Rules_NamesQueryVariables = Exact<{
  ruleName: Scalars["String"]["input"];
}>;

export type Get_Notifications_Rules_NamesQuery = {
  __typename?: "Query";
  notificationRules: Array<{ __typename?: "Rule"; name: string }>;
};

export type NotificationRulesQueryVariables = Exact<{ [key: string]: never }>;

export type NotificationRulesQuery = {
  __typename?: "Query";
  notificationRules: Array<{
    __typename?: "Rule";
    id: any;
    name: string;
    status: Status;
    createdAt: any;
    triggerEvent: TriggerEvent;
    triggerType: TriggerType;
    filterInput: any;
    associateAllResourceEntities: boolean;
    recipients?: Array<
      | {
          __typename?: "EmailRecipient";
          id?: string | null;
          type: string;
          name: string;
        }
      | {
          __typename?: "SlackChannelRecipient";
          id: string;
          type: string;
          name: string;
        }
      | {
          __typename?: "SlackUserRecipient";
          id: string;
          type: string;
          name: string;
        }
    > | null;
  }>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  users: Array<{ __typename?: "User"; id: any; email: any }>;
};

export type GetRuleByIdQueryVariables = Exact<{
  ruleId?: InputMaybe<Scalars["UUID"]["input"]>;
}>;

export type GetRuleByIdQuery = {
  __typename?: "Query";
  notificationRules: Array<{
    __typename?: "Rule";
    id: any;
    name: string;
    status: Status;
    triggerEvent: TriggerEvent;
    triggerType: TriggerType;
    filterInput: any;
    associateAllResourceEntities: boolean;
    recipients?: Array<
      | {
          __typename?: "EmailRecipient";
          id?: string | null;
          type: string;
          name: string;
        }
      | {
          __typename?: "SlackChannelRecipient";
          id: string;
          type: string;
          name: string;
        }
      | {
          __typename?: "SlackUserRecipient";
          id: string;
          type: string;
          name: string;
        }
    > | null;
  }>;
};

export type GetSlackListsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSlackListsQuery = {
  __typename?: "Query";
  external: {
    __typename?: "External";
    slack: {
      __typename?: "Slack";
      channels?: {
        __typename?: "ChannelsResponse";
        channels: Array<{
          __typename?: "SlackEntity";
          id: string;
          name: string;
        }>;
      } | null;
      users: Array<{ __typename?: "SlackEntity"; name: string; email: any }>;
    };
  };
};

export type AllSampleSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type AllSampleSettingsQuery = {
  __typename?: "Query";
  samplingSettings: Array<{
    __typename?: "SamplingSetting";
    settingType: string;
    isEnable: boolean;
    projectedMonthlyPrice: number;
  }>;
};

export type UpdateS3SamplingMutationVariables = Exact<{
  enable: Scalars["Boolean"]["input"];
}>;

export type UpdateS3SamplingMutation = {
  __typename?: "Mutation";
  enableS3LensSetting: boolean;
};

export type ProjectsListQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectsListQuery = {
  __typename?: "Query";
  projects?: Array<{
    __typename?: "Project";
    id: string;
    canonicalName: string;
    integrationId: any;
  }> | null;
};
