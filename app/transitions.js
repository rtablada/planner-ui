export default function(){
  this.transition(
    this.childOf('.timer'),
    this.use('crossFade')
  );
};
