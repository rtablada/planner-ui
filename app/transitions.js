export default function(){
  this.transition(
    this.childOf('.lesson-current-time'),
    this.use('toUp')
  );
};
