import { Page } from '@playwright/test';

export class ArticlePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openArticle() {
    await this.page.click('article');
  }
}
