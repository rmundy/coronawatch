import { newE2EPage } from '@stencil/core/testing';

describe('app-coronawatch-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-coronawatch-nav></app-coronawatch-nav>');

    const element = await page.find('app-coronawatch-nav');
    expect(element).toHaveClass('hydrated');
  });
});
