import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LampaderumSharedModule } from 'app/shared/shared.module';

import { PasswordStrengthBarComponent } from './password/password-strength-bar.component';
import { RegisterComponent } from './register/register.component';
import { ActivateComponent } from './activate/activate.component';
import { PasswordComponent } from './password/password.component';
import { PasswordResetInitComponent } from './password-reset/init/password-reset-init.component';
import { PasswordResetFinishComponent } from './password-reset/finish/password-reset-finish.component';
import { SettingsComponent } from './settings/settings.component';
import { accountState } from './account.route';
import { ProfilComponent } from './profil/profil.component';
import { OrderComponent } from './order/order.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { LampaderumCoreModule } from 'app/core/core.module';
import { CardComponent } from 'app/account/card/card.component';

@NgModule({
  imports: [LampaderumSharedModule, RouterModule.forChild(accountState)],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    ProfilComponent,
    OrderComponent,
    CreditcardComponent,
    CardComponent,
  ],
  exports: [CreditcardComponent, CardComponent],
})
export class AccountModule {}
