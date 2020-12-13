import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let spectator: Spectator<LoginFormComponent>;
  const createComponent = createComponentFactory(LoginFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
