module.exports = (app) => {

  class HomeController extends app.Controller {

    async index() {
      // this.ctx.logger.info('Hello world!');
      // const userController = this.ctx.getController('user');
      // await userController.index();
      // await this.ctx.render('index.html');
      // console.log(this.ctx.controller.user);
      // this.ctx.withStatus(200);
      // await this.ctx.controller.user.index();
      // this.ctx.service.data.test();
      // this.ctx.send('Hello World!');
      // this.ctx.send(this.ctx._csrf);
      // this.ctx.send('xxx');
      await this.ctx.display('index');
    }

    van() {
      this.ctx.body = this.ctx.app.router.currentRoute();
    }

    car() {
      this.ctx.body = 'car';
    }

  }

  return HomeController;
};
