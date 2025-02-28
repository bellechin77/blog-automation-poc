import { Page } from '@playwright/test';

export class CommentPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async postComment(commentText: string) {
    await this.page.locator('section').getByRole('button', { name: 'responses' }).click();
    await this.page.getByRole('dialog').getByRole('textbox').fill(commentText);
    await this.page.getByRole('dialog').getByTestId('ResponseRespondButton').click();
  }

  async verifyCommentDisplayed(commentText: string) {
    const comment = await this.page.locator(`text=${commentText}`);
    await comment.waitFor();
    return comment.isVisible();
  }
}
