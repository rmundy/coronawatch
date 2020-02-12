import { newE2EPage } from '@stencil/core/testing';

describe('app-death-count', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-death-count></app-death-count>');

    const element = await page.find('app-death-count');
    expect(element).toHaveClass('hydrated');
  });
});
