import { Page } from '@playwright/test';

export class SearchPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchForArticle(query: string) {
    await this.page.fill('input[placeholder="Search"]', query);
    await this.page.press('input[placeholder="Search"]', 'Enter');
    await this.page.waitForSelector('article');
  }
}

