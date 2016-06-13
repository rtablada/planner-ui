export default function(){
  this.transition(
    this.childOf('.timer'),
    this.use('crossFade')
  );

  this.transition(
    this.fromRoute('app.lessons.index'),
    this.use('toLeft')
  );

  this.transition(
    this.toRoute('app.lessons.index'),
    this.use('toRight')
  );

  this.transition(
    this.fromRoute('app.lessons.new'),
    this.fromRoute('app.lessons.show'),
    this.use('toLeft')
  );

  this.transition(
    this.fromRoute('index'),
    this.use('toLeft')
  );

  this.transition(
    this.toRoute('index'),
    this.use('toRight')
  );

  this.transition(
    this.fromRoute('lesson'),
    this.toRoute('login'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
