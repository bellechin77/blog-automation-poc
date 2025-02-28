import { Page } from '@playwright/test';

export class MediumPage {
  private page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private get searchInput() { return this.page.locator('input[placeholder="Search Medium"]'); }
  private get searchButton() { return this.page.locator('button[type="submit"]'); }
  private get articleLink() { return this.page.locator('article h2'); }
  private get commentInput() { return this.page.locator('textarea[placeholder="Write a comment"]'); }
  private get postCommentButton() { return this.page.locator('button[type="submit"]:has-text("Post")'); }
  private get commentDisplay() { return this.page.locator('div.comment'); }

  // Methods
  async searchForArticles(query: string) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  async openArticle() {
    await this.articleLink.first().click();
  }

  async postComment(comment: string) {
    await this.commentInput.fill(comment);
    await this.postCommentButton.click();
  }

  async verifyCommentDisplayed(comment: string) {
    await this.commentDisplay.locator(`text=${comment}`).waitFor();
  }
}
