const store =  {
  output: '124',
  fetchOutput() {
    return this.output;
  },
  remove(){
    if(this.output.length<=1){
      this.output = '0';
    }else{
      this.output = this.output.slice(0,-1)
    }
  },
  empty(){
    this.output = '0';
  },
  inputContent(event: MouseEvent){
    const input = (event.target as HTMLButtonElement).textContent as string;
    if(this.output.length<=16){
      if(this.output ==='0' && input !=='.'){
        this.output = input;
      }else{
        if(this.output.indexOf('.')>=0 && input ==='.'){
          return
        }
        this.output += input;
      }
    }
  }
};
export default store