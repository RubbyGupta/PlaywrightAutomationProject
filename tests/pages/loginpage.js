class LoginPage {
    
  constructor(page) {
      this.page = page;
    }

    async navigate(url) {
      await this.page.goto(url);
    }
  
    async login(username, password) {
      await this.page.getByRole('link', { name: 'Sign In' }).click();
      await this.page.getByLabel('Email', { exact: true }).click();
      await this.page.getByLabel('Email', { exact: true }).fill(username);
      await this.page.getByLabel('Email', { exact: true }).press('Tab');
      await this.page.getByLabel('Password').fill(password);
      await this.page.getByRole('button', { name: 'Sign In' }).click();
    }
  }
  module.exports=LoginPage;