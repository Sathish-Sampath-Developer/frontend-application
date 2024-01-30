import { HttpErrorResponse } from '@angular/common/http';

export function handleError(errorRes: HttpErrorResponse) {
  if (errorRes.error) {
    return errorRes.error.message;
  } else {
    return 'Something went wrong!.';
  }
}
