export default function(){
  this.transition(
    this.childOf('.timer'),
    this.use('crossFade')
  );

  this.transition(
    this.fromRoute('app.lessons.index'),
    this.fromRoute('app.lessons.*'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('app.lessons.new'),
    this.fromRoute('app.lessons.show'),
    this.use('toLeft')
  );
}
