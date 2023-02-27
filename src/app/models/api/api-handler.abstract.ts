import {environment} from "../../../environments/environment";
import {HttpParams, HttpParamsOptions} from "@angular/common/http";

export abstract class ApiHandler {
  protected abstract namespace: string;

  public resourceEndpoint(resource: string): string {
    return `${environment.api_url}/${this.namespace}/${resource}`
  }

  public get endpoint(): string {
    return `${environment.api_url}/${this.namespace}`
  }

  public buildGETParams(params: any):  HttpParams {
    const payload: any = { // HttpParamsOptions
      fromObject: params
    };
    return new HttpParams(payload);
  }
}
