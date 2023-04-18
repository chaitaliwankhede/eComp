import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LicenseManager } from "@ag-grid-enterprise/core";
import { AppModule } from './app/app.module';

// LicenseManager.setLicenseKey(
//   'CompanyName=DNV GL AS,LicensedGroup=nxtGen Quoting app,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=2,LicensedProductionInstancesCount=1,AssetReference=AG-011461,ExpiryDate=20_February_2022_[v2]_MTY0NTMxNTIwMDAwMA==30edf89ad931ac13fa1bbf08d68297a1'
// );

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
