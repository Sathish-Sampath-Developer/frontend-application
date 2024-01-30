import { Manufacturer } from './manufacturer.model';

export namespace ManufacturerActions {

  export class FetchListOfManufacturer {
    static readonly type = '[Manufacturer] FetchListOfManufacturer';
  }

  export class FetchManufacturerById {
    constructor(public payload: any) {}
    static readonly type = '[Manufacturer] FetchManufacturerById';
  }

  export class CreateNewManufacturer {
    constructor(public payload: Manufacturer) {}
    static readonly type = '[Manufacturer] CreateNewManufacturer';
  }

  export class UpdateManufacturer {
    constructor(public payload: { id: any; manufacturer: Manufacturer }) {}
    static readonly type = '[Manufacturer] UpdateManufacturer';
  }

  export class DeleteManufacturer {
    constructor(public payload: any) {}
    static readonly type = '[Manufacturer] DeleteManufacturer';
  }
  
}
