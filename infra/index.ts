// Copyright 2016-2021, Pulumi Corporation.  All rights reserved.

import * as pulumi from "@pulumi/pulumi";

import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";

import * as azure_native from "@pulumi/azure-native";

import { getConnectionString, signedBlobReadUrl } from "./helpers";

const config = new pulumi.Config();
const deploymentEnv = config.require("env");
console.log(`Current env ==== ${deploymentEnv}`);

// Create a separate resource group for this example.
const resourceGroup = new resources.ResourceGroup(`bk-api-${deploymentEnv}`);

const appInsightsComponent = new azure_native.insights.Component(
  "portal-monitoring",
  {
    applicationType: "web",
    flowType: "Bluefield",
    kind: "web",
    location: resourceGroup.location,
    requestSource: "rest",
    resourceGroupName: resourceGroup.name,
    resourceName: "portal-monitoring",
  }
);

// Storage account is required by Function App.
// Also, we will upload the function code to the same storage account.
const storageAccount = new storage.StorageAccount("portalapist", {
  resourceGroupName: resourceGroup.name,
  sku: {
    name: storage.SkuName.Standard_LRS,
  },
  kind: storage.Kind.StorageV2,
});

// Function code archives will be stored in this container.
// const codeContainer = new storage.BlobContainer("zips", {
//   resourceGroupName: resourceGroup.name,
//   accountName: storageAccount.name,
// });

// Upload Azure Function's code as a zip archive to the storage account.
// const codeBlob = new azure_native.storage.Blob("zip", {
//   resourceGroupName: resourceGroup.name,
//   accountName: storageAccount.name,
//   containerName: codeContainer.name,
//   source: new pulumi.asset.FileArchive("../api"),
// });

// const codeBlobUrl = signedBlobReadUrl(
//   codeBlob,
//   codeContainer,
//   storageAccount,
//   resourceGroup
// );

// Build the connection string and zip archive's SAS URL. They will go to Function App's settings.
const storageConnectionString = getConnectionString(
  resourceGroup.name,
  storageAccount.name
);

// Define a Consumption Plan for the Function App.
// You can change the SKU to Premium or App Service Plan if needed.
const plan = new azure_native.web.AppServicePlan("portal-plan", {
  resourceGroupName: resourceGroup.name,
  location: resourceGroup.location,
  sku: {
    name: "Y1",
    tier: "Dynamic",
  },
  kind: "Linux",
  reserved: true,
});

const app = new azure_native.web.WebApp("portal-functions", {
  resourceGroupName: resourceGroup.name,
  serverFarmId: plan.id,
  kind: "functionapp",
  siteConfig: {
    appSettings: [
      { name: "FUNCTIONS_EXTENSION_VERSION", value: "~4" },
      { name: "FUNCTIONS_WORKER_RUNTIME", value: "node" },
      { name: "WEBSITE_NODE_DEFAULT_VERSION", value: "~16" },
      { name: "WEBSITE_RUN_FROM_PACKAGE", value: "" },
      { name: "AzureWebJobsStorage", value: storageConnectionString },
      {
        name: "WEBSITE_CONTENTAZUREFILECONNECTIONSTRING",
        value: storageConnectionString,
      },
      {
        name: "APPINSIGHTS_INSTRUMENTATIONKEY",
        value: appInsightsComponent.instrumentationKey,
      },
      {
        name: "APPLICATIONINSIGHTS_CONNECTION_STRING",
        value: appInsightsComponent.connectionString,
      },
    ],
    http20Enabled: true,
    nodeVersion: "~16",
  },
});

export const endpoint = pulumi.interpolate`https://${app.defaultHostName}/api/graphql`;
