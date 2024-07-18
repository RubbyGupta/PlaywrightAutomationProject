class searchpage {
    
    constructor(page) {
        this.page = page;
      }
  
      async navigate(url) {
        await this.page.goto(url);
      }
    
      async search(category) {
        await this.page.getByPlaceholder('Search entire store here...').click();
        await this.page.getByPlaceholder('Search entire store here...').fill(category);
        await this.page.getByPlaceholder('Search entire store here...').press('Enter');
      }
    }
    module.exports=searchpage;