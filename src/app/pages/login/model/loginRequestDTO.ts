import { FormControl } from "@angular/forms";

export interface LoginRequestDTO{
    email: FormControl<string | null>,
    password: FormControl<string | null>
}