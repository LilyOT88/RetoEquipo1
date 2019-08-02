import { OfertsModule } from './oferts.module';

describe('OfertsModule', () => {
  let ofertsModule: OfertsModule;

  beforeEach(() => {
    ofertsModule = new OfertsModule();
  });

  it('should create an instance', () => {
    expect(ofertsModule).toBeTruthy();
  });
});
