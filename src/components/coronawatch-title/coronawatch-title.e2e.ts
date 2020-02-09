import { newE2EPage } from '@stencil/core/testing';

describe('app-coronawatch-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-coronawatch-title></app-coronawatch-title>');

    const element = await page.find('app-coronawatch-title');
    expect(element).toHaveClass('hydrated');
  });
});
